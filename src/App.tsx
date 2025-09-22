import { useState } from "react";
import { MyButton } from "./components/Button";
import { GameCanvas } from "./components/GameCanvas";
import { GameOfLife } from "./lib/GameOfLife";

function App() {
	// グリッドサイズ定数
	const GRID_WIDTH = 50;
	const GRID_HEIGHT = 30;

	// グリッドをReact stateで管理
	const [grid, setGrid] = useState<boolean[][]>(() => {
		const game = new GameOfLife(GRID_WIDTH, GRID_HEIGHT);
		return game.getGrid();
	});

	// グライダーパターンを設定
	const initializeGlider = () => {
		const game = new GameOfLife(GRID_WIDTH, GRID_HEIGHT);
		// グライダーパターン（左上部分に配置）
		game.setCell(1, 0, true);
		game.setCell(2, 1, true);
		game.setCell(0, 2, true);
		game.setCell(1, 2, true);
		game.setCell(2, 2, true);
		setGrid(game.getGrid());
	};

	const handleNextStep = () => {
		const game = new GameOfLife(GRID_WIDTH, GRID_HEIGHT);
		// 現在のgridを復元
		grid.forEach((row, y) => {
			row.forEach((cell, x) => {
				game.setCell(x, y, cell);
			});
		});

		game.nextGeneration();
		setGrid(game.getGrid());
	};

	const handleClear = () => {
		const game = new GameOfLife(GRID_WIDTH, GRID_HEIGHT);
		setGrid(game.getGrid());
	};

	const handleRandom = () => {
		const game = new GameOfLife(GRID_WIDTH, GRID_HEIGHT);
		game.randomize(0.3);
		setGrid(game.getGrid());
	};

	return (
		<div className="flex flex-col items-center gap-4 mx-4">
			<h1 className="text-4xl">life game</h1>

			<GameCanvas grid={grid} cellSize={8} />

			<div className="flex gap-4">
				<MyButton onClick={initializeGlider}>glider</MyButton>
				<MyButton onClick={handleNextStep}>next step</MyButton>
				<MyButton onClick={handleClear}>clear</MyButton>
				<MyButton onClick={handleRandom}>random</MyButton>
			</div>
		</div>
	);
}

export default App;
