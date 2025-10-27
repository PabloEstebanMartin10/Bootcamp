import { useEffect, useState } from "react";

function Clock() {
    const [hora, setHora] = useState(new Date().toLocaleTimeString("es-ES"));
    useEffect(()=>{
        setInterval(() => {
            setHora(new Date().toLocaleTimeString("es-ES"))
        }, 1000);
    },[])
    return <p>
            {hora}
        </p>
}

export default Clock
