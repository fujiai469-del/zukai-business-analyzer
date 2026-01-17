export interface Business {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  imageUrl?: string;        // 生成画像のURL or Base64
  imagePrompt?: string;     // 画像生成プロンプト（デバッグ用）
}

export interface CompanyData {
  name: string;
  businesses: Business[];
}
