import { MyButton } from "./components/Button";

function App() {
	return (
		<div className="flex flex-col items-center gap-4 mx-4">
			<h1 className="text-4xl">life game</h1>

			<canvas className="border aspect-video w-full" />

			<div className="flex gap-4">
				<MyButton>start</MyButton>
				<MyButton>next step</MyButton>
				<MyButton>clear</MyButton>
				<MyButton>random</MyButton>
			</div>
		</div>
	);
}

export default App;
