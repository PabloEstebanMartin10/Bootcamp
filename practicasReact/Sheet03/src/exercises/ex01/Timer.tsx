import { useEffect, useState } from "react";
let start = Date.now();

function Timer() {
	const [hora, setHora] = useState(0);
	useEffect(() => {
		setInterval(() => {
			setHora(Math.floor((Date.now() - start) / 1000));
		}, 1000);
	}, []);
	function resetCounter() {
		start = Date.now();
        setHora(0)
	}
	return (
		<>
			{" "}
			<button onClick={resetCounter}>Reset</button>
			<p>{hora}</p>
		</>
	);
}
export default Timer;
