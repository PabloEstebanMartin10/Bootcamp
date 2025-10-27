import { useState } from "react";
import "./App.css";
import MensajePersonalizado from "./exercises/ex01/MensajePersonalizado";
import Tarjeta from "./exercises/ex02/Tarjeta";
import Cabecera from "./exercises/ex02/Cabecera";
function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			{/* <MensajePersonalizado color="blue" texto="Texto aqui" /> */}
			<Tarjeta>
				<Cabecera>Mi título</Cabecera>
				<p>Este es el contenido</p>
			</Tarjeta>
		</>
	);
}

export default App;
