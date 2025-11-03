function NavBar({children}:{children:React.ReactNode}){
    return(
        <header className="my-0 mx-auto pt-4">
            <nav className="flex justify-center">
                {children}
            </nav>
        </header>
    )
}
export default NavBar;