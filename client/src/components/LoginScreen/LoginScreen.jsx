import { useState, useContext } from "react";
import { UserContext } from "../../context/useUserContext";
import { useNavigate } from "react-router-dom";
import { getUsers, loginUser } from "../../services/api";
import { setTokenInCookies } from "../../utils/cookiesFn";

function LoginScreen() {
  const {  login } = useContext(UserContext);

  const navegate = useNavigate();

  //STATES
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [pais, setPais] = useState("");
  const [error, setError] = useState(false);

  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userLogged = await loginUser({ email, password: contraseña });

    //VALIDACION
    if (email === "" || contraseña === "" || pais === "") {
      setError(true);
      setMensaje("Complete todos los campos");
      return;
    } else if(!userLogged) {
        setError(true)
        setMensaje('Usuario o contraseña incorrectos')
    } else {
      if (userLogged.statusCode === 200) {
        setError(false);
        login(userLogged.data);
        setTokenInCookies(userLogged.data.access_token);
        navegate("/dashboard");
      }
    }
  };

  return (
    <div className="p-10 mt-10 flex-col bg-zinc-50 max-h-screen">
      <h1 className="text-2xl mb-10 text-center">Estas por iniciar sesión en CountryCoin</h1>
      <form action="" className="gradient-orange rounded-3xl px-7 py-5">
        <div className="h-6">
          {error && (
            <p className="text-red-500 text-center text-lg">{mensaje}</p>
          )}
        </div>

        <div className="flex-col flex py-1">
          <p className="font-semibold">Pais</p>
          <select
            className="h-10 p-2 rounded-full bg-zinc-200"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
          >
            <option value="">--Selecciona--</option>
            <option value="argentina">Argentina</option>
            <option value="mexico">Mexico</option>
            <option value="brasil">Brasil</option>
          </select>
        </div>

        <div className="py-1">
          <p className="mb-1 font-semibold">Ingresa tu email</p>
          <input
            type="email"
            value={email}
            className="bg-zinc-200 rounded-full px-2 w-full h-10"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="py-1 mb-6">
          <p className="mb-1 font-semibold">Contraseña</p>
          <input
            type="password"
            placeholder="******"
            className="bg-zinc-200 rounded-full px-2 w-full h-10"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
        </div>
      </form>

      <div className="flex justify-center mt-5">
        <button
          onClick={handleSubmit}
          className="px-6 py-2 font-semibold bg-[#FD7A09] rounded-full"
        >
          Iniciar Sesión
        </button>
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-zinc-200 w-full rounded-lg py-2 font-semibold text-[#FD7A09] border-2 border-[#FD7A09]">
          Iniciar sesiòn con Google
        </button>
      </div>

      <div className='flex flex-col justify-center mt-10 font-semibold'>
        <p className="text-center mb-3">¿No tienes cuenta?</p> 
        <div className="flex items-center justify-center">
          <button onClick={() => navegate('/register')} className='btn  text-center text-[#FD7A09] border-zinc-500 w-40'>Registrate</button>
        </div>
      </div>
      <div className='flex flex-col justify-center mt-10 font-semibold items-center'>
        <small className='text-sm'>Por consultas o ayuda escribenos en</small>
        <small className='text-sm'>tubilleteravirtual@countrycoin.com</small>
      </div>
    </div>
  );
}

export default LoginScreen;
