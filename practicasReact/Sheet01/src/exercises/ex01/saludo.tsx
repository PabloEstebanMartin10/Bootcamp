const Saludo: React.FC<{nombre:string}> = ({nombre= "Jose Ramón" }) => {
    return <h1>Hola, {nombre}</h1>;
};

export default Saludo;