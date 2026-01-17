import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini API
const apiKey = process.env.GOOGLE_API_KEY;

export async function POST(request: NextRequest) {
    try {
        // Check if API key is configured
        if (!apiKey) {
            return NextResponse.json(
                { success: false, error: 'API key not configured. Please set GOOGLE_API_KEY in .env.local' },
                { status: 500 }
            );
        }

        const genAI = new GoogleGenerativeAI(apiKey);

        // Parse request body
        const { companyName } = await request.json();

        if (!companyName || typeof companyName !== 'string') {
            return NextResponse.json(
                { success: false, error: 'Invalid company name' },
                { status: 400 }
            );
        }

        // 1. Generate business analysis and image prompts using Gemini
        // Use gemini-2.5-flash (latest stable model)
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const analysisPrompt = `あなたは防衛・軍事産業のビジネスアナリストです。

企業名: ${companyName}

この企業の主要事業を3つ分析し、以下のJSON形式で出力してください。
各事業について、SF/軍事用インターフェース向けの画像生成プロンプトも作成してください。

画像プロンプトの要件:
- 英語で記述
- 必須キーワード: "tactical display", "night vision scope style" または "thermal imaging camera", "monochrome" または "grayscale", "cyan and green color overlay", "high contrast", "military HUD interface", "technical blueprint diagram"
- 配色指定: グレースケールベース + シアン(#00FFFF)とグリーン(#00FF00)のアクセント
- 暗視スコープやサーマルセンサー風の見た目を指定
- 産業用図面やテクニカルな雰囲気を重視
- 具体的な機器やシステムを視覚化
- 避けるべき: "colorful", "vibrant", "realistic photo"などのカラフルな写真調の表現

JSON形式（このJSON以外は出力しないでください）:
{
  "businesses": [
    {
      "title": "日本語のタイトル",
      "subtitle": "English Subtitle",
      "description": "3行程度の日本語説明文",
      "icon": "Lucideアイコン名（Camera, Radar, Target, Rocket, Shield, Bot, Plane, Satellite, ShieldCheckのいずれか）",
      "imagePrompt": "Detailed English prompt for Imagen 3..."
    }
  ]
}`;

        const analysisResult = await model.generateContent(analysisPrompt);
        const analysisText = analysisResult.response.text();

        // Extract JSON from the response
        const jsonMatch = analysisText.match(/\{[\s\S]*\}/);
        if (!jsonMatch) {
            throw new Error('Failed to parse Gemini response');
        }

        const analysisData = JSON.parse(jsonMatch[0]);

        if (!analysisData.businesses || !Array.isArray(analysisData.businesses)) {
            throw new Error('Invalid analysis data structure');
        }

        // 2. Generate images using Imagen 3
        const imageModel = genAI.getGenerativeModel({ model: 'imagen-3.0-generate-001' });

        const businessesWithImages = await Promise.all(
            analysisData.businesses.slice(0, 3).map(async (business: any) => {
                try {
                    // Generate image with Imagen 3
                    const imageResult = await imageModel.generateContent(business.imagePrompt);

                    // Extract image data from response
                    const response = imageResult.response;

                    // Try to get image from candidates
                    if (response.candidates && response.candidates.length > 0) {
                        const candidate = response.candidates[0];
                        if (candidate.content && candidate.content.parts) {
                            for (const part of candidate.content.parts) {
                                if (part.inlineData && part.inlineData.data) {
                                    const base64Image = part.inlineData.data;
                                    const mimeType = part.inlineData.mimeType || 'image/png';

                                    return {
                                        ...business,
                                        imageUrl: `data:${mimeType};base64,${base64Image}`
                                    };
                                }
                            }
                        }
                    }

                    // If image generation failed, return without image
                    console.warn('No image data in response for:', business.title);
                    return business;
                } catch (imageError) {
                    console.error('Image generation error for', business.title, ':', imageError);
                    // Return business data without image on error
                    return business;
                }
            })
        );

        return NextResponse.json({
            success: true,
            data: {
                name: companyName,
                businesses: businessesWithImages
            }
        });

    } catch (error: any) {
        console.error('Analysis error:', error);
        return NextResponse.json(
            {
                success: false,
                error: error.message || 'Failed to analyze company'
            },
            { status: 500 }
        );
    }
}
