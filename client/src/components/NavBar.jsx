import { BiUserCircle } from "react-icons/bi";
import { AiOutlinePoweroff } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { UserContext } from "../context/useUserContext";
import { useContext } from "react";
import { clearTokenFromCookies } from "../utils/cookiesFn";
import { Link } from 'react-router-dom';


export const NavBar = () => {
  const { user, login, logout } = useContext(UserContext);
  const logoutUser = () => {
    logout();
    clearTokenFromCookies();
  };

  return (
    <>
      <div className="modal" id="my_modal_8">
        <div className="modal-box">
          <h3 className="font-bold text-2xl text-center  mt-20 mb-20">¿Seguro que quieres cerrar sesion?</h3>
          <div className="modal-action flex justify-between">
          <Link className="btn bg-red-500 text-white" to={"/login"}>
          Cerrar sesion
          </Link>
          <a href="#" className="btn bg-green-500 text-white">Continuar sesion</a>
          </div>
        </div>
      </div>
      
      <div className="mx-5 my-3 shadow-xl sticky top-3 z-50">
        <div className="navbar bg-gradient-to-r from-[#FD7A09] via-[#FFED48] to-[#FD7A09] sticky top-0 z-10 rounded-lg">
          <div className="flex justify-between w-full px-5 ">
            <div className="flex items-center">


            
            <BiUserCircle
                className="text-4xl"
              />
            
            {
              user &&
              <a className="btn btn-ghost normal-case text-xl">Hola {user.user.name}</a>
            }

            </div>
            <div className="items-center">

            <a href="#my_modal_8" >
              <AiOutlinePoweroff
                onClick={() => logoutUser()}
                className="text-3xl"
              />
            </a>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
