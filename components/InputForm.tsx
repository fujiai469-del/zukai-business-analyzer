'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

interface InputFormProps {
    onAnalyze: (companyName: string) => void;
}

export default function InputForm({ onAnalyze }: InputFormProps) {
    const [companyName, setCompanyName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (companyName.trim()) {
            onAnalyze(companyName.trim());
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 relative z-10">
            <div className="max-w-2xl w-full">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 mono tracking-tight">
                    BUSINESS MODEL ANALYZER
                </h1>
                <p className="text-center text-text-secondary mb-12 data-label">
                    TACTICAL BUSINESS INTELLIGENCE SYSTEM
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="relative">
                        <label htmlFor="company" className="data-label block mb-3">
                            TARGET COMPANY NAME
                        </label>
                        <div className="relative">
                            <input
                                id="company"
                                type="text"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                placeholder="例: Lockheed Martin"
                                className="w-full px-4 py-4 border border-border bg-card-bg text-foreground mono text-lg focus:outline-none focus:border-tech-blue transition-colors"
                                autoComplete="off"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary">
                                <Search size={20} />
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-foreground text-background mono font-semibold tracking-widest border border-foreground hover:bg-tech-blue hover:border-tech-blue hover:text-white transition-all duration-300 flex items-center justify-center gap-3 group"
                    >
                        <span>ANALYZE</span>
                        <span className="text-xs opacity-60 group-hover:opacity-100 transition-opacity">
                            [ ENTER ]
                        </span>
                    </button>
                </form>

                <div className="mt-8 pt-8 border-t border-border">
                    <p className="data-label text-center mb-3">AVAILABLE TARGETS</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {['Lockheed Martin', 'Leonardo DRS', 'Raytheon', 'Boeing Defense', 'Northrop Grumman'].map(
                            (company) => (
                                <button
                                    key={company}
                                    onClick={() => setCompanyName(company)}
                                    className="px-3 py-1 text-xs mono border border-border hover:border-tech-blue hover:text-tech-blue transition-colors"
                                >
                                    {company}
                                </button>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
