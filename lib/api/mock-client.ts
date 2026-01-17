/**
 * Mock API Client
 * 
 * Simulates API calls without hitting actual services.
 * Useful for development to avoid rate limits.
 */

import { ICompanyAnalysisClient, AnalyzeCompanyRequest, AnalyzeCompanyResponse } from './types';
import { getMockCompanyData } from './mock-data';

export class MockCompanyAnalysisClient implements ICompanyAnalysisClient {
    private readonly delayMs: number;

    constructor(delayMs: number = 1000) {
        this.delayMs = delayMs;
    }

    async analyzeCompany(request: AnalyzeCompanyRequest): Promise<AnalyzeCompanyResponse> {
        // Simulate network delay
        await this.delay(this.delayMs);

        // ALWAYS return Raytheon Technologies data regardless of input
        // This avoids API limits and ensures images are always displayed
        const mockData = getMockCompanyData('raytheon technologies');

        if (!mockData) {
            // This should never happen since we hardcoded the company name
            return {
                success: false,
                error: 'Internal error: Raytheon Technologies mock data not found'
            };
        }

        console.log('🎭 Returning fixed Raytheon Technologies mock data');
        return {
            success: true,
            data: mockData
        };
    }

    private delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
