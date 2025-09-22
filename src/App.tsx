import { useState, useRef } from "react";
import { MyButton } from "./components/Button";
import { GameCanvas } from "./components/GameCanvas";
import { GameOfLife } from "./lib/GameOfLife";

function App() {
	// ゲームインスタンスを作成（50x30のグリッド）
	const gameRef = useRef(new GameOfLife(50, 30));
	const [updateTrigger, setUpdateTrigger] = useState(0);

	// 初期化時にグライダーパターンを設定
	const initializeGlider = () => {
		const game = gameRef.current;
		game.clear();
		// グライダーパターン（左上部分に配置）
		game.setCell(1, 0, true);
		game.setCell(2, 1, true);
		game.setCell(0, 2, true);
		game.setCell(1, 2, true);
		game.setCell(2, 2, true);
		triggerUpdate();
	};

	// 再描画をトリガーする関数
	const triggerUpdate = () => {
		setUpdateTrigger(prev => prev + 1);
	};

	const handleNextStep = () => {
		gameRef.current.nextGeneration();
		triggerUpdate();
	};

	const handleClear = () => {
		gameRef.current.clear();
		triggerUpdate();
	};

	const handleRandom = () => {
		gameRef.current.randomize(0.3);
		triggerUpdate();
	};

	return (
		<div className="flex flex-col items-center gap-4 mx-4">
			<h1 className="text-4xl">life game</h1>

			<GameCanvas game={gameRef.current} cellSize={8} updateTrigger={updateTrigger} />

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
