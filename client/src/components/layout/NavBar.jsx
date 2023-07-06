
const NavBar = () => {
    return (
        <div className="navbar w-full fixed top-0 bg-transparent ">
            <div className="navbar-start">
                <a className="ml-2 normal-case text-xl text-black">Billetera</a>
            </div>
            <div className="navbar-end ">
                <a className="btn m-2 bg-gray-400 border-none text-black font-bold" >Registrarse</a>
                <a className="btn m-2 bg-gray-400 border-none text-black font-bold">Ingresar</a>
            </div>
        </div>
    )
}

export default NavBar