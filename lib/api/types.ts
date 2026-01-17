/**
 * API Client Type Definitions
 * 
 * This file defines the interfaces for the API client,
 * allowing for clean separation between real and mock implementations.
 */

export interface Business {
    title: string;
    subtitle: string;
    description: string;
    icon: 'Camera' | 'Radar' | 'Target' | 'Rocket' | 'Shield' | 'Bot' | 'Plane' | 'Satellite' | 'ShieldCheck';
    imageUrl?: string;
    imagePrompt?: string;
}

export interface CompanyAnalysis {
    name: string;
    businesses: Business[];
}

export interface AnalyzeCompanyRequest {
    companyName: string;
}

export interface AnalyzeCompanyResponse {
    success: boolean;
    data?: CompanyAnalysis;
    error?: string;
}

/**
 * Interface for the Company Analysis API Client
 * 
 * This abstraction allows us to swap between real API calls
 * and mock responses without changing the UI code.
 */
export interface ICompanyAnalysisClient {
    /**
     * Analyzes a company and returns business intelligence
     * @param request - The company name to analyze
     * @returns Promise with the analysis results
     */
    analyzeCompany(request: AnalyzeCompanyRequest): Promise<AnalyzeCompanyResponse>;
}
