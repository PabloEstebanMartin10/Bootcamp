import { useState } from "react";
import "./App.css";
import MensajePersonalizado from "./exercises/ex01/MensajePersonalizado";
import Tarjeta from "./exercises/ex02/Tarjeta";
import Cabecera from "./exercises/ex02/Cabecera";
import Panel from "./exercises/ex03/Panel";
function App() {
	const [mensaje, setMensaje] = useState("Tienes 3 mensajes nuevos");

	return (
		<>
			{/* <MensajePersonalizado color="blue" texto="Texto aqui" /> */}
			{/* <Tarjeta>
				<Cabecera>Mi título</Cabecera>
				<p>Este es el contenido</p>
			</Tarjeta> */}
      <Panel mensaje={mensaje}/>
		</>
	);
}

export default App;
