import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini API
const apiKey = process.env.GOOGLE_API_KEY;

export async function POST(request: NextRequest) {
    try {
        // Check if API key is configured
        if (!apiKey) {
            return NextResponse.json(
                { success: false, error: 'API key not configured' },
                { status: 500 }
            );
        }

        const genAI = new GoogleGenerativeAI(apiKey);

        // Parse request body
        const { prompt } = await request.json();

        if (!prompt || typeof prompt !== 'string') {
            return NextResponse.json(
                { success: false, error: 'Invalid prompt' },
                { status: 400 }
            );
        }

        // Generate image using Imagen 4 Fast
        // Use the correct model name: imagen-4.0-fast-generate-001
        const imageModel = genAI.getGenerativeModel({ model: 'imagen-4.0-fast-generate-001' });

        // Set timeout to 8 seconds to avoid Vercel's 10-second limit
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('Image generation timeout')), 8000);
        });

        const imageGenerationPromise = imageModel.generateContent(prompt);

        const imageResult = await Promise.race([
            imageGenerationPromise,
            timeoutPromise
        ]) as any;

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

                        return NextResponse.json({
                            success: true,
                            imageUrl: `data:${mimeType};base64,${base64Image}`
                        });
                    }
                }
            }
        }

        // If no image data found
        console.warn('No image data in response');
        return NextResponse.json(
            { success: false, error: 'No image data generated' },
            { status: 500 }
        );

    } catch (error: any) {
        console.error('Image generation error:', error);
        return NextResponse.json(
            {
                success: false,
                error: error.message || 'Failed to generate image'
            },
            { status: 500 }
        );
    }
}
