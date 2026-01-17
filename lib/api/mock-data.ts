/**
 * Mock Data for Development
 * 
 * This file contains pre-defined mock responses to avoid
 * hitting API rate limits during development.
 */

import { CompanyAnalysis } from './types';

export const MOCK_COMPANIES: Record<string, CompanyAnalysis> = {
    'lockheed martin': {
        name: 'Lockheed Martin',
        businesses: [
            {
                title: '航空機・戦闘機事業',
                subtitle: 'Advanced Fighter Aircraft Systems',
                description: 'F-35ライトニングII、F-22ラプター等の次世代戦闘機の開発・製造。ステルス技術と高度な電子戦システムを統合した最先端の航空優勢プラットフォームを提供。',
                icon: 'Plane',
                imageUrl: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&h=600&fit=crop'
            },
            {
                title: 'ミサイル・防衛システム',
                subtitle: 'Missile Defense & Space Systems',
                description: 'THAAD（終末高高度防衛）ミサイル、PAC-3迎撃システム等の弾道ミサイル防衛システム。衛星監視・早期警戒システムとの統合により多層防衛網を構築。',
                icon: 'Rocket',
                imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&h=600&fit=crop'
            },
            {
                title: '宇宙システム・衛星事業',
                subtitle: 'Space & Satellite Technology',
                description: 'GPS衛星、偵察衛星、通信衛星の設計・製造・運用。宇宙状況認識（SSA）システムとサイバーセキュリティ技術を融合した次世代宇宙インフラを展開。',
                icon: 'Satellite',
                imageUrl: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop'
            }
        ]
    },
    'raytheon': {
        name: 'Raytheon Technologies',
        businesses: [
            {
                title: 'ミサイル防衛システム',
                subtitle: 'Missile Defense Systems',
                description: 'トマホーク巡航ミサイル、SM-6迎撃ミサイル、AMRAAM等の精密誘導兵器システム。多層防衛網を構築し、AIベースのターゲティングと自律飛行技術により脅威を無力化。',
                icon: 'Target',
                imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80'
            },
            {
                title: 'レーダー・センサーシステム',
                subtitle: 'Advanced Radar & Sensor Systems',
                description: 'AN/SPY-6イージス艦載レーダー、Patriot防空システム等の先進探知システム。フェーズドアレイ技術と量子センサーを統合した次世代監視プラットフォームを展開。',
                icon: 'Radar',
                imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
            },
            {
                title: 'サイバーセキュリティ・電子戦',
                subtitle: 'Cyber & Electronic Warfare',
                description: '軍事ネットワーク防衛、電子妨害システム、SIGINT(信号情報)収集プラットフォーム。AIによる脅威検知と自動対処機能により、サイバー空間での優位性を確保。',
                icon: 'Shield',
                imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
            }
        ]
    },
    'raytheon technologies': {
        name: 'Raytheon Technologies',
        businesses: [
            {
                title: 'ミサイル防衛システム',
                subtitle: 'Missile Defense Systems',
                description: 'トマホーク巡航ミサイル、SM-6迎撃ミサイル、AMRAAM等の精密誘導兵器システム。多層防衛網を構築し、AIベースのターゲティングと自律飛行技術により脅威を無力化。',
                icon: 'Target',
                imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80'
            },
            {
                title: 'レーダー・センサーシステム',
                subtitle: 'Advanced Radar & Sensor Systems',
                description: 'AN/SPY-6イージス艦載レーダー、Patriot防空システム等の先進探知システム。フェーズドアレイ技術と量子センサーを統合した次世代監視プラットフォームを展開。',
                icon: 'Radar',
                imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80'
            },
            {
                title: 'サイバーセキュリティ・電子戦',
                subtitle: 'Cyber & Electronic Warfare',
                description: '軍事ネットワーク防衛、電子妨害システム、SIGINT(信号情報)収集プラットフォーム。AIによる脅威検知と自動対処機能により、サイバー空間での優位性を確保。',
                icon: 'Shield',
                imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
            }
        ]
    },
    'boeing defense': {
        name: 'Boeing Defense',
        businesses: [
            {
                title: '軍用輸送機・給油機',
                subtitle: 'Military Transport & Tanker Aircraft',
                description: 'KC-46ペガサス空中給油機、C-17グローブマスター輸送機等の戦略的空輸プラットフォーム。自動化された給油システムと高度な航法技術を統合。',
                icon: 'Plane',
                imageUrl: 'https://images.unsplash.com/photo-1583910283309-d0ca9bcf2c57?w=800&h=600&fit=crop'
            },
            {
                title: '無人航空機・自律システム',
                subtitle: 'Unmanned Aerial Systems',
                description: 'MQ-25スティングレイ無人給油機、ロイヤルウィングマン自律戦闘機等のUAVシステム。スウォーム技術とAI意思決定エンジンを搭載。',
                icon: 'Bot',
                imageUrl: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop'
            },
            {
                title: '衛星通信・情報システム',
                subtitle: 'Satellite Communications',
                description: 'WGS（広帯域グローバル衛星通信）システム、軍事通信ネットワーク。量子暗号通信と耐妨害技術を実装した次世代C4ISRプラットフォーム。',
                icon: 'Satellite',
                imageUrl: 'https://images.unsplash.com/photo-1516849677043-ef67c9557e16?w=800&h=600&fit=crop'
            }
        ]
    },
    'northrop grumman': {
        name: 'Northrop Grumman',
        businesses: [
            {
                title: 'ステルス爆撃機・無人機',
                subtitle: 'Stealth Bomber & UAV Systems',
                description: 'B-2スピリット、B-21レイダー次世代ステルス爆撃機、RQ-4グローバルホーク高高度無人偵察機。最先端のステルス技術と自律飛行システムを統合。',
                icon: 'Plane',
                imageUrl: 'https://images.unsplash.com/photo-1569429593454-2f63127e7c76?w=800&h=600&fit=crop'
            },
            {
                title: 'サイバー・宇宙システム',
                subtitle: 'Cyber & Space Operations',
                description: 'James Webb宇宙望遠鏡、軍事衛星システム、サイバー防衛プラットフォーム。宇宙領域認識（SDA）と量子通信技術を開発。',
                icon: 'Satellite',
                imageUrl: 'https://images.unsplash.com/photo-1516849677043-ef67c9557e16?w=800&h=600&fit=crop'
            },
            {
                title: 'ミサイル防衛・指向性エネルギー',
                subtitle: 'Missile Defense & Directed Energy',
                description: 'GBI（地上配備型迎撃ミサイル）、高エネルギーレーザー兵器システム。マイクロ波兵器とレールガン技術を研究開発。',
                icon: 'ShieldCheck',
                imageUrl: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&h=600&fit=crop'
            }
        ]
    }
};

/**
 * Get mock data for a company
 * @param companyName - The company name (case-insensitive)
 * @returns Mock company analysis data or undefined if not found
 */
export function getMockCompanyData(companyName: string): CompanyAnalysis | undefined {
    const normalizedName = companyName.toLowerCase().trim();
    return MOCK_COMPANIES[normalizedName];
}
