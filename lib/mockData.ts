import { CompanyData } from './types';

export const mockCompanies: Record<string, CompanyData> = {
    'lockheed martin': {
        name: 'Lockheed Martin',
        businesses: [
            {
                title: '赤外線・熱画像センサー',
                subtitle: 'Thermal Imaging',
                description: '真っ暗闇、煙、霧、砂塵の中でも熱を感知。用途：戦車照準装置、ドローン監視、暗視ゴーグル。',
                icon: 'Camera',
            },
            {
                title: 'レーダー・電子戦システム',
                subtitle: 'Radar & EW',
                description: '遠くの飛行空襲やミサイルを探知、敵の通信やレーダーを妨害（ジャミング）。',
                icon: 'Radar',
            },
            {
                title: '電気光学/赤外線システム',
                subtitle: 'EO/IR Systems',
                description: '高精度のカメラとセンサーを組み合わせ、遠距離のターゲットを識別・追尾。',
                icon: 'Target',
            },
        ],
    },
    'leonardo drs': {
        name: 'Leonardo DRS',
        businesses: [
            {
                title: '赤外線・熱画像センサー',
                subtitle: 'Thermal Imaging',
                description: '真っ暗闇、煙、霧、砂塵の中でも熱を感知。用途：戦車照準装置、ドローン監視、暗視ゴーグル。',
                icon: 'Camera',
            },
            {
                title: 'レーダー・電子戦システム',
                subtitle: 'Radar & EW',
                description: '遠くの飛行空襲やミサイルを探知、敵の通信やレーダーを妨害（ジャミング）。',
                icon: 'Radar',
            },
            {
                title: '電気光学/赤外線システム',
                subtitle: 'EO/IR Systems',
                description: '高精度のカメラとセンサーを組み合わせ、遠距離のターゲットを識別・追尾。',
                icon: 'Target',
            },
        ],
    },
    'raytheon': {
        name: 'Raytheon Technologies',
        businesses: [
            {
                title: 'ミサイル防衛システム',
                subtitle: 'Missile Defense',
                description: '弾道ミサイルや巡航ミサイルを迎撃する高度な防衛システム。パトリオットミサイルなどを開発。',
                icon: 'Rocket',
            },
            {
                title: 'レーダー・センサー技術',
                subtitle: 'Radar & Sensors',
                description: '空中、海上、地上の脅威を検出・追跡する先進的なレーダーシステムを提供。',
                icon: 'Radar',
            },
            {
                title: 'サイバー・情報戦',
                subtitle: 'Cyber & Intelligence',
                description: 'サイバー攻撃への防御、情報収集、通信妨害などの電子戦能力を提供。',
                icon: 'Shield',
            },
        ],
    },
    'boeing defense': {
        name: 'Boeing Defense, Space & Security',
        businesses: [
            {
                title: '軍用航空機',
                subtitle: 'Military Aircraft',
                description: '戦闘機、輸送機、給油機など、多様な軍用航空機を設計・製造。',
                icon: 'Plane',
            },
            {
                title: '宇宙システム',
                subtitle: 'Space Systems',
                description: '衛星、宇宙ステーション、宇宙探査機などの開発・運用を担当。',
                icon: 'Satellite',
            },
            {
                title: '自律システム',
                subtitle: 'Autonomous Systems',
                description: '無人航空機（UAV）や自律型システムによる監視・偵察・攻撃能力を提供。',
                icon: 'Bot',
            },
        ],
    },
    'northrop grumman': {
        name: 'Northrop Grumman',
        businesses: [
            {
                title: 'ステルス航空機',
                subtitle: 'Stealth Aircraft',
                description: 'レーダーに捕捉されにくいステルス技術を用いた戦略爆撃機や偵察機を開発。',
                icon: 'Plane',
            },
            {
                title: 'サイバーセキュリティ',
                subtitle: 'Cybersecurity',
                description: '軍事・政府機関向けの高度なサイバー防御ソリューションを提供。',
                icon: 'ShieldCheck',
            },
            {
                title: '宇宙・ミサイルシステム',
                subtitle: 'Space & Missiles',
                description: 'ICBMや宇宙探査システム、衛星打ち上げロケットなどを開発・製造。',
                icon: 'Rocket',
            },
        ],
    },
};

export function getCompanyData(companyName: string): CompanyData | null {
    const normalizedName = companyName.toLowerCase().trim();
    return mockCompanies[normalizedName] || null;
}
