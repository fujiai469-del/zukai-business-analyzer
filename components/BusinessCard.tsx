import { Business } from '@/lib/types';
import * as LucideIcons from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface BusinessCardProps {
    business: Business;
    index: number;
    isLoading?: boolean;
}

export default function BusinessCard({ business, index, isLoading = false }: BusinessCardProps) {
    // Dynamically get the icon component
    const IconComponent = (LucideIcons[business.icon as keyof typeof LucideIcons] as LucideIcon) || LucideIcons.Circle;

    return (
        <div className="technical-card p-8 flex flex-col items-center text-center h-full relative overflow-hidden group">
            {/* Scan line effect */}
            <div className="scan-line"></div>

            {/* Index number */}
            <div className="absolute top-4 left-4 data-label text-target-mark">
                UNIT-{String(index + 1).padStart(2, '0')}
            </div>

            {/* Icon/Image area */}
            <div className="mb-6 relative w-full flex justify-center">
                {isLoading ? (
                    // Loading skeleton
                    <div className="w-48 h-48 flex items-center justify-center border border-border rounded bg-background/50 animate-pulse">
                        <div className="text-text-secondary mono text-xs">GENERATING...</div>
                    </div>
                ) : business.imageUrl ? (
                    // Generated image with tactical filter
                    <div className="w-48 h-48 relative border border-border group-hover:border-tech-blue transition-colors overflow-hidden bg-background/50 tactical-image">
                        <Image
                            src={business.imageUrl}
                            alt={business.title}
                            fill
                            className="object-cover"
                            unoptimized
                        />
                    </div>
                ) : (
                    // Fallback icon
                    <div className="w-24 h-24 flex items-center justify-center border border-border rounded-full bg-background/50 group-hover:border-tech-blue transition-colors">
                        <IconComponent size={48} className="text-tech-blue" strokeWidth={1.5} />
                    </div>
                )}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-2 text-foreground">
                {business.title}
            </h3>

            {/* Subtitle */}
            <p className="data-label mb-4 text-tech-blue">
                {business.subtitle}
            </p>

            {/* Divider */}
            <div className="w-16 h-[1px] bg-border mb-4"></div>

            {/* Description */}
            <p className="text-sm text-text-secondary leading-relaxed flex-grow">
                {business.description}
            </p>

            {/* Bottom accent */}
            <div className="mt-6 w-full h-[1px] bg-gradient-to-r from-transparent via-tech-blue to-transparent opacity-50"></div>
        </div>
    );
}
