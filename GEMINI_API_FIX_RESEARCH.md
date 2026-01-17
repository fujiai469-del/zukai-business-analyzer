# Gemini API 404エラー解決調査結果

## 問題の原因
- **gemini-1.5-flash-latest** は廃止されている
- Google Generative AI SDKが自動的に `models/` プレフィックスを付与している
- v0.24.1では古いモデル名がサポートされていない

## 推奨される解決方法

### 方法1: 最新のFlashモデルを使用（推奨）
```typescript
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
```
- 最新で安定したモデル
- 価格とパフォーマンスのバランスが最適
- 本番環境での使用に推奨

### 方法2: Flash-latestエイリアスを使用
```typescript
const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });
```
- 常に最新のFlashモデルを指す
- 自動的に新バージョンに更新される
- 推奨度は方法1より低い

### 方法3: 2.0 Flashを使用（代替案）
```typescript
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
```
- 安定した前世代モデル
- より低コスト

## 画像生成モデルについて
- **imagen-3.0-generate-001** は正しいモデル名
- ただしGoogle AI SDKでの画像生成は限定的
- 失敗時はフォールバック（アイコン表示）で問題ない

## 実装の推奨順序
1. gemini-2.5-flash（推奨）
2. gemini-flash-latest（代替案1）
3. gemini-2.0-flash（代替案2）

## 参考資料
- Google公式ドキュメント: https://ai.google.dev/gemini-api/docs/models/gemini
- StackOverflow解決例: https://stackoverflow.com/questions/79779187/

## 注意事項
- models/プレフィックスは自動付与されるため、明示的に指定する必要はない
- APIキーの有効性を確認すること
- 環境変数 GOOGLE_API_KEY が正しく設定されていることを確認
