import { BiUserCircle } from "react-icons/bi";
import { AiOutlinePoweroff } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { UserContext } from "../context/useUserContext";
import { useContext } from "react";
import { clearTokenFromCookies } from "../utils/cookiesFn";

export const NavBar = () => {
  const { user, login, logout } = useContext(UserContext);
  const logoutUser = () => {
    logout();
    clearTokenFromCookies();
  };
  return (
    <div className="mx-5 my-3 shadow-xl sticky top-3 z-50">
        <div className="navbar bg-gradient-to-r from-[#FD7A09] via-[#FFED48] to-[#FD7A09] sticky top-0 z-10 rounded-lg">
          <div className="flex justify-between w-full px-5 ">
            <div className="flex items-center">
              <BiUserCircle className="text-4xl" />
              <a className="btn btn-ghost normal-case text-xl">
                Hola usuario
              </a>
            </div>
            <div className="items-center">
              <AiOutlinePoweroff
                onClick={() => logoutUser()}
                className="text-3xl"
                />
            </div>
          </div>
      </div>
  </div>
  );
};
