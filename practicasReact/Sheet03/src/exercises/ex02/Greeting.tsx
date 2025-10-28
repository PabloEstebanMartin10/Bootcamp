import { useEffect } from "react"

function Greeting({nombre}: {nombre:string}){
    useEffect(()=>{
        console.log("Actualizado mensaje para ", {nombre})
    })
    return<>
        <p>Hola {nombre}</p>
    </>
}
export default Greeting