function NavBar({children}:{children:React.ReactNode}){
    return(
        <header>
            <nav>
                {children}
            </nav>
        </header>
    )
}
export default NavBar;