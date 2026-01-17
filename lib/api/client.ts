/**
 * API Client Factory
 * 
 * This is the ONLY file that needs to know about the environment.
 * It creates and exports the appropriate client based on configuration.
 * 
 * Usage in components:
 * ```typescript
 * import { companyAnalysisClient } from '@/lib/api/client';
 * 
 * const result = await companyAnalysisClient.analyzeCompany({ companyName: 'Lockheed Martin' });
 * ```
 */

import { ICompanyAnalysisClient } from './types';
import { MockCompanyAnalysisClient } from './mock-client';
import { RealCompanyAnalysisClient } from './real-client';

/**
 * Determines whether to use mock mode based on environment variables
 */
function shouldUseMock(): boolean {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
        return process.env.NEXT_PUBLIC_USE_MOCK === 'true';
    }
    // Server-side: always use real client
    return false;
}

/**
 * Create the appropriate client based on the environment
 */
function createClient(): ICompanyAnalysisClient {
    if (shouldUseMock()) {
        console.log('🎭 Using MOCK API Client (development mode)');
        return new MockCompanyAnalysisClient(1500); // 1.5 second delay to simulate network
    } else {
        console.log('🚀 Using REAL API Client (production mode)');
        return new RealCompanyAnalysisClient();
    }
}

/**
 * Singleton instance of the company analysis client
 * 
 * This is the ONLY export that UI components should use.
 * The implementation (mock vs real) is completely abstracted away.
 */
export const companyAnalysisClient: ICompanyAnalysisClient = createClient();
