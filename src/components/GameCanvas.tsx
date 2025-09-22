import { useCallback, useEffect, useRef } from "react";

export type GameCanvasProps = {
	grid: boolean[][];
	cellSize?: number;
};

export function GameCanvas({ grid, cellSize = 10 }: GameCanvasProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const draw = useCallback(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const height = grid.length;
		const width = grid[0]?.length || 0;

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
	}, [grid, cellSize]);

	// ゲーム状態が変わるたびに再描画
	useEffect(() => {
		draw();
	}, [draw]);

	return (
		<canvas
			ref={canvasRef}
			className="border aspect-video w-full"
			style={{ imageRendering: "pixelated" }}
		/>
	);
}
