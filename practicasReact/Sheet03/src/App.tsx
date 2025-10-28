import { useState } from "react";
import "./App.css";
import Clock from "./exercises/ex01/Clock";
import Timer from "./exercises/ex01/Timer";
import Greeting from "./exercises/ex02/Greeting";

function App() {
	const [nombre, setNombre] = useState("");
	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setNombre(e.target.value);
	}
	return (
		<>
			{/* <Clock/>
			<Timer/> */}

			<input type="text" value={nombre} onChange={handleChange} />
			<Greeting nombre={nombre} />
		</>
	);
}

export default App;
