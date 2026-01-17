/**
 * Real API Client
 * 
 * Makes actual API calls to the backend endpoints.
 * Used in production and when testing with real services.
 */

import { ICompanyAnalysisClient, AnalyzeCompanyRequest, AnalyzeCompanyResponse } from './types';

export class RealCompanyAnalysisClient implements ICompanyAnalysisClient {
    private readonly baseUrl: string;

    constructor(baseUrl: string = '') {
        this.baseUrl = baseUrl;
    }

    async analyzeCompany(request: AnalyzeCompanyRequest): Promise<AnalyzeCompanyResponse> {
        try {
            const response = await fetch(`${this.baseUrl}/api/analyze`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ companyName: request.companyName }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
                return {
                    success: false,
                    error: errorData.error || `HTTP ${response.status}: ${response.statusText}`
                };
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Network error occurred'
            };
        }
    }
}
