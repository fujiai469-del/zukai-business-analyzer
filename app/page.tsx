'use client';

import { useState } from 'react';
import TargetMark from '@/components/TargetMark';
import InputForm from '@/components/InputForm';
import AnalysisResult from '@/components/AnalysisResult';
import { CompanyData } from '@/lib/types';
import { companyAnalysisClient } from '@/lib/api/client';

export default function Home() {
  const [companyData, setCompanyData] = useState<CompanyData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const handleAnalyze = async (companyName: string) => {
    setIsLoading(true);
    setError('');

    try {
      // Use the abstracted API client (automatically uses mock or real based on env)
      const result = await companyAnalysisClient.analyzeCompany({ companyName });

      if (result.success && result.data) {
        setCompanyData(result.data);
      } else {
        setError(result.error || 'Analysis failed');
        setTimeout(() => setError(''), 5000);
      }
    } catch (err: any) {
      console.error('Analysis error:', err);
      setError('Failed to connect to analysis service');
      setTimeout(() => setError(''), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setCompanyData(null);
    setError('');
    setIsLoading(false);
  };

  return (
    <div className="relative min-h-screen">
      {/* Target marks at corners */}
      <TargetMark />

      {/* Main content */}
      {!companyData && !isLoading ? (
        <div>
          <InputForm onAnalyze={handleAnalyze} />
          {error && (
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-red-600 text-white mono text-sm border border-red-700 z-50">
              ⚠ {error}
            </div>
          )}
        </div>
      ) : isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="mono text-2xl mb-4">ANALYZING...</div>
            <div className="text-text-secondary text-sm">
              Generating business intelligence report
            </div>
            <div className="mt-8 flex justify-center gap-2">
              <div className="w-3 h-3 bg-tech-blue rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-3 h-3 bg-tech-blue rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-3 h-3 bg-tech-blue rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>
      ) : companyData ? (
        <AnalysisResult companyData={companyData} onReset={handleReset} isLoading={false} />
      ) : null}
    </div>
  );
}
