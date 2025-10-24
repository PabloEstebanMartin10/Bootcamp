import Saludo from "./saludo"

const Composicion :React.FC<{nombres:string[]}> =({nombres})=>{
    return <div>
        <Saludo nombre = {nombres[0]}/>
        <Saludo nombre = {nombres[1]}/>
        <Saludo nombre = {nombres[2]}/>
        <Saludo nombre = {nombres[3]}/>
    </div>
    
}

export default Composicion