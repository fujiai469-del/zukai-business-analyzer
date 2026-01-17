import { CompanyData } from '@/lib/types';
import BusinessCard from './BusinessCard';

interface AnalysisResultProps {
    companyData: CompanyData;
    onReset: () => void;
    isLoading?: boolean;
}

export default function AnalysisResult({ companyData, onReset, isLoading = false }: AnalysisResultProps) {
    return (
        <div className="min-h-screen py-12 px-4 relative z-10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <p className="data-label mb-2">ANALYSIS COMPLETE</p>
                            <h1 className="text-4xl md:text-5xl font-bold mono">
                                {companyData.name}
                            </h1>
                        </div>
                        <button
                            onClick={onReset}
                            className="px-6 py-3 border border-border hover:border-tech-blue hover:text-tech-blue transition-colors mono text-sm"
                        >
                            [ NEW ANALYSIS ]
                        </button>
                    </div>
                    <p className="text-text-secondary mt-4">
                        不可能を可視化するテクノロジー
                    </p>
                    <div className="mt-6 h-[1px] bg-gradient-to-r from-tech-blue via-border to-transparent"></div>
                </div>

                {/* 3-Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {companyData.businesses.map((business, index) => (
                        <BusinessCard key={index} business={business} index={index} isLoading={isLoading} />
                    ))}
                </div>

                {/* Footer Information */}
                <div className="border-t border-border pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="coordinate-text">
                            <p>ASC</p>
                            <p>TECHNICAL BRIEFING</p>
                        </div>
                        <div className="coordinate-text text-right">
                            <p>CONFIDENTIAL: #4A5569</p>
                            <p>COORD: 34.0522° N, 118.2437° W</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
