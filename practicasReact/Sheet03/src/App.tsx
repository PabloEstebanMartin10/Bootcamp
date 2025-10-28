import { useState } from "react";
import "./App.css";
import Clock from "./exercises/ex01/Clock";
import Timer from "./exercises/ex01/Timer";
import Greeting from "./exercises/ex02/Greeting";
import RoomStatus from "./exercises/ex02/RoomStatus";

function App() {
	const [nombre, setNombre] = useState("");
	function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
		//setNombre(e.target.value)6;
		setRoomID(e.target.value);
	}
	const [roomID, setRoomID] = useState("");
	return (
		<>
			{/* <Clock/>
			<Timer/> */}
			{/* <input type="text" value={nombre} onChange={handleChange} /> */}
			{/* <Greeting nombre={nombre} /> */}
			<select value={roomID} onChange={handleChange}>
				<option value="general">general</option>
				<option value="soporte">soporte</option>
				<option value="random">random</option>
			</select>
			<RoomStatus roomID={roomID} />
		</>
	);
}

export default App;
