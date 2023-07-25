import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/useUserContext';
import { useContext } from 'react';

const NavBar = () => {

  const navegate = useNavigate()
  const { isLoggedIn, login, logout } = useContext(UserContext);
  return (
      <div className="navbar w-full flex justify-around  fixed top-0 z-50" style={{background: 'rgba( 255, 255, 255, 0.4 )',
        backdropFilter: 'blur( 15.5px )'}}>
        <div onClick={() => navegate('/register')} className=" m-2 bg-transparent border-none  font-medium text-[#FD7A09]" >Registrate</div>
        <div onClick={() => navegate('/login')} className="  m-2 bg-transparent border-none font-,medium text-[#FD7A09]">Iniciar sesión</div>
      </div>
  )
}

export default NavBar
