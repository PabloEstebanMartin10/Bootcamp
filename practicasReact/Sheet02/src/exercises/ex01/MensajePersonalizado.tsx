function MensajePersonalizado({texto,color}:{texto:string, color:string}){
    return <div>
        <button style={{ backgroundColor: color}} >{texto}</button>
    </div>
}

export default MensajePersonalizado;