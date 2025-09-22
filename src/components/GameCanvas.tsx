import { useEffect, useRef } from "react";
import type { GameOfLife } from "../lib/GameOfLife";

export type GameCanvasProps = {
	game: GameOfLife;
	cellSize?: number;
	updateTrigger?: unknown; // 更新をトリガーするためのプロパティ
};

export function GameCanvas({
	game,
	cellSize = 10,
	updateTrigger,
}: GameCanvasProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	// ゲーム状態が変わるたびに再描画
	useEffect(() => {
		draw();
	}, [game, updateTrigger]);

	const draw = () => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const { width, height } = game.getSize();
		const grid = game.getGrid();

		// Canvasサイズを設定
		canvas.width = width * cellSize;
		canvas.height = height * cellSize;

		// 背景をクリア
		ctx.fillStyle = "#ffffff";
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// セルを描画
		ctx.fillStyle = "#000000";
		for (let y = 0; y < height; y++) {
			for (let x = 0; x < width; x++) {
				if (grid[y][x]) {
					ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
				}
			}
		}

		// グリッド線を描画
		ctx.strokeStyle = "#cccccc";
		ctx.lineWidth = 1;

		// 縦線
		for (let x = 0; x <= width; x++) {
			ctx.beginPath();
			ctx.moveTo(x * cellSize, 0);
			ctx.lineTo(x * cellSize, height * cellSize);
			ctx.stroke();
		}

		// 横線
		for (let y = 0; y <= height; y++) {
			ctx.beginPath();
			ctx.moveTo(0, y * cellSize);
			ctx.lineTo(width * cellSize, y * cellSize);
			ctx.stroke();
		}
	};

	return (
		<canvas
			ref={canvasRef}
			className="border aspect-video w-full"
			style={{ imageRendering: "pixelated" }}
		/>
	);
}
