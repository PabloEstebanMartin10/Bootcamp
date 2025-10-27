function Tarjeta ({children}:{children:React.ReactNode}){
    return<div className="container" style={{padding:  "2%",boxShadow: "0 0 16px gray", border: "2px solid black" }}>
        {children}
    </div>
}
export default Tarjeta