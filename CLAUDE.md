# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# 重要事項

開発は適切な粒度でコミットを行う
コミットメッセージ、コメントは日本語
ファイルも適切な粒度で分割する

## プロジェクト概要

Conway's Game of Life（ライフゲーム）の実装プロジェクトです。React + TypeScript + Vite + Tailwind CSSの構成で、インタラクティブなライフゲームシミュレーターを作成しています。

## 開発コマンド

- `npm run dev` - 開発サーバーを起動（Vite）
- `npm run build` - プロダクションビルド（TSコンパイル後にViteビルド）
- `npm run lint` - ESLintでコードをチェック
- `npm run preview` - ビルド後のアプリをプレビュー

## コード品質ツール

### Biome
- フォーマッター＆リンターとして使用
- タブ文字でのインデント設定
- ダブルクォート使用
- 自動インポート整理が有効

### ESLint
- TypeScript推奨設定使用
- React Hooks + React Refresh プラグイン設定済み
- `dist/`フォルダは除外

## アーキテクチャ

### メインコンポーネント構成
- `App.tsx`: メインアプリケーション、ライフゲームのUIレイアウト
- `components/Button.tsx`: 再利用可能なボタンコンポーネント

### UI設計
- Tailwind CSS v4使用
- レスポンシブ対応
- `canvas`要素でゲーム盤面を描画予定
- コントロールボタン: start, next step, clear, random

### 技術スタック
- React 19 + TypeScript
- Vite（開発サーバー＆ビルドツール）
- Tailwind CSS v4（スタイリング）
- Biome（フォーマット＆リント）
- ESLint（追加リント）

## 実装状況
現在はUI外観のみ実装済み。ライフゲームのロジック部分は未実装です。