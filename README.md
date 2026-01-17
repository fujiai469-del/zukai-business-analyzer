# SF/軍事用インターフェーススタイル 企業分析アプリ

AI画像生成機能を搭載した、SF/軍事用インターフェーススタイルの企業分析Webアプリケーションです。

## 機能

- **AI企業分析:** Gemini Pro APIで企業の主要事業を3つ分析
- **AI画像生成:** Imagen 3 APIでサイバーパンク風の産業図面画像を自動生成
- **SF/軍事UIデザイン:** グリッド背景、ターゲットマーク装飾、Roboto Mono等幅フォント
- **リアルタイム処理:** ローディング状態とエラーハンドリングを実装

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

プロジェクトのルートディレクトリに`.env.local`ファイルを作成し、Google AI APIキーを設定します。

```bash
# .env.localファイルを作成
touch .env.local
```

`.env.local`に以下の内容を追加:

```env
GOOGLE_API_KEY=your_google_ai_api_key_here
```

> **APIキーの取得方法:**
> 1. [Google AI Studio](https://aistudio.google.com/)にアクセス
> 2. 「Get API key」をクリック
> 3. APIキーをコピーして`.env.local`に貼り付け

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで`http://localhost:3000`を開きます。

## 使い方

1. **企業名を入力:** 入力フォームに分析したい企業名を入力（例: Lockheed Martin, Leonardo DRS, Raytheon）
2. **ANALYZEをクリック:** AIが企業を分析し、3つの主要事業を特定
3. **画像が自動生成:** 各事業に対応するサイバーパンク風の産業図面が生成されて表示
4. **NEW ANALYSIS:** 別の企業を分析する場合はこのボタンで入力画面に戻る

## 技術スタック

- **フロントエンド:** Next.js 16, React, TypeScript
- **スタイリング:** Tailwind CSS v4, Vanilla CSS
- **AIエンジン:** 
  - Google Gemini Pro (テキスト分析)
  - Google Imagen 3 (画像生成)
- **アイコン:** Lucide React
- **フォント:** Roboto Mono

## 画像生成について

生成される画像は以下の特徴を持つように設計されています:

- **スタイル:** ブループリント(青写真)、テクニカル線画、サーマルイメージング
- **テーマ:** HUDディスプレイ、サイバーパンク産業図面
- **配色:** 青と緑を基調とした配色
- **用途:** 各事業の技術的な側面を視覚化

## トラブルシューティング

### APIキーエラー
```
Error: API key not configured
```
→ `.env.local`ファイルが正しく設定されているか確認してください。

### 画像が生成されない
一部の企業や事業で画像生成に失敗する場合があります。その場合はLucide Reactアイコンがフォールバックとして表示されます。

### 分析に時間がかかる
AI処理には30秒〜1分程度かかる場合があります。ローディング表示が出ている間はお待ちください。

## ライセンス

MIT License
