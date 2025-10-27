import Saludo from "../ex01/saludo"

const Composicion :React.FC<{nombres:string[]}> =({nombres})=>{
    return 	<>
			{nombres.map((u) => (
				<Saludo nombre={u}/>
			))}
		</>
    
}

export default Composicion
