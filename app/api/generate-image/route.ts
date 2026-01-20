import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

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

        const ai = new GoogleGenAI({ apiKey });

        // Parse request body
        const { prompt } = await request.json();

        if (!prompt || typeof prompt !== 'string') {
            return NextResponse.json(
                { success: false, error: 'Invalid prompt' },
                { status: 400 }
            );
        }

        // Generate image using Imagen 4 Fast
        // Use the correct model name and API: ai.models.generateImages
        const response = await ai.models.generateImages({
            model: 'imagen-4.0-fast-generate-001',
            prompt: prompt,
            config: {
                numberOfImages: 1,
                aspectRatio: '1:1'
            }
        });

        // Check if images were generated
        if (!response.generatedImages || response.generatedImages.length === 0) {
            return NextResponse.json(
                { success: false, error: 'No image generated' },
                { status: 500 }
            );
        }

        // Get the first generated image
        const generatedImage = response.generatedImages[0];
        
        // The image object contains the image data
        // We need to convert it to base64 for transmission
        const imageData = generatedImage.image;
        
        // Convert image to base64 if it's a Buffer
        let base64Image: string;
        if (Buffer.isBuffer(imageData)) {
            base64Image = imageData.toString('base64');
        } else if (typeof imageData === 'string') {
            base64Image = imageData;
        } else {
            // If it's an object with data property
            const imgObj = imageData as any;
            if (imgObj.data) {
                base64Image = Buffer.from(imgObj.data).toString('base64');
            } else {
                return NextResponse.json(
                    { success: false, error: 'Invalid image format' },
                    { status: 500 }
                );
            }
        }

        return NextResponse.json({
            success: true,
            image: `data:image/png;base64,${base64Image}`
        });

    } catch (error: any) {
        console.error('Image generation error:', error);
        return NextResponse.json(
            { 
                success: false, 
                error: error.message || 'Failed to generate image',
                details: error.toString()
            },
            { status: 500 }
        );
    }
}
