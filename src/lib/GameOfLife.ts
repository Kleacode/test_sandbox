export class GameOfLife {
	private grid: boolean[][];
	private width: number;
	private height: number;

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
		this.grid = this.createEmptyGrid();
	}

	private createEmptyGrid(): boolean[][] {
		return Array(this.height)
			.fill(null)
			.map(() => Array(this.width).fill(false));
	}

	// セルの状態を設定
	setCell(x: number, y: number, alive: boolean): void {
		if (this.isValidPosition(x, y)) {
			this.grid[y][x] = alive;
		}
	}

	// セルの状態を取得
	getCell(x: number, y: number): boolean {
		if (this.isValidPosition(x, y)) {
			return this.grid[y][x];
		}
		return false;
	}

	// 位置が有効かチェック
	private isValidPosition(x: number, y: number): boolean {
		return x >= 0 && x < this.width && y >= 0 && y < this.height;
	}

	// 隣接する生きているセルの数を数える
	private countLiveNeighbors(x: number, y: number): number {
		let count = 0;
		for (let dy = -1; dy <= 1; dy++) {
			for (let dx = -1; dx <= 1; dx++) {
				if (dx === 0 && dy === 0) continue; // 自分自身は除外
				const nx = x + dx;
				const ny = y + dy;
				if (this.isValidPosition(nx, ny) && this.grid[ny][nx]) {
					count++;
				}
			}
		}
		return count;
	}

	// 次の世代に進む
	nextGeneration(): void {
		const newGrid = this.createEmptyGrid();

		for (let y = 0; y < this.height; y++) {
			for (let x = 0; x < this.width; x++) {
				const neighbors = this.countLiveNeighbors(x, y);
				const currentlyAlive = this.grid[y][x];

				// ライフゲームのルール
				if (currentlyAlive) {
					// 生きているセル: 2または3個の隣接セルがあれば生存、そうでなければ死亡
					newGrid[y][x] = neighbors === 2 || neighbors === 3;
				} else {
					// 死んでいるセル: ちょうど3個の隣接セルがあれば誕生
					newGrid[y][x] = neighbors === 3;
				}
			}
		}

		this.grid = newGrid;
	}

	// グリッド全体を取得
	getGrid(): boolean[][] {
		return this.grid.map((row) => [...row]);
	}

	// グリッドをクリア
	clear(): void {
		this.grid = this.createEmptyGrid();
	}

	// ランダムにセルを配置
	randomize(probability = 0.3): void {
		for (let y = 0; y < this.height; y++) {
			for (let x = 0; x < this.width; x++) {
				this.grid[y][x] = Math.random() < probability;
			}
		}
	}

	// サイズを取得
	getSize(): { width: number; height: number } {
		return { width: this.width, height: this.height };
	}
}
