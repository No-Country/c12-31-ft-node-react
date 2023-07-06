import {useNavigate} from 'react-router-dom'
import { UserContext } from '../../context/useUserContext';
import { useContext } from 'react';

const NavBar = () => {
    const navegate = useNavigate()
    const { isLoggedIn, login, logout } = useContext(UserContext);
    return (
        <div className="navbar w-full fixed top-0 bg-transparent z-50 ">
            <div className="navbar-start">
                <div onClick={() =>navegate("/")} className="ml-2 normal-case text-xl text-black">Billetera</div>
            </div>
            <div className="navbar-end ">
                <div onClick={() => navegate('/register')} className="btn m-2 bg-gray-400 border-none text-black font-bold" >Registrarse</div>
                <div onClick={() => navegate('/login')} className="btn m-2 bg-gray-400 border-none text-black font-bold">Ingresar</div>
            </div>
        </div>
    )
}

export default NavBar