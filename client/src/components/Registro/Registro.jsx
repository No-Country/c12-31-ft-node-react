import { useState, useContext } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { register } from "../../services/api";
import { UserContext } from "../../context/useUserContext";
import { useNavigate } from "react-router-dom";
import { setTokenInCookies } from "../../utils/cookiesFn";
import Logo from "../../assets/img/LogoRegistro.png";

function Registro() {
  const { login } = useContext(UserContext);

  //STATES
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState(false);
  const [exito, setExito] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [contraseñaError, setContraseñaError] = useState(false);
  const navegate = useNavigate();

  //MOSTRAR CONTRASEÑA
  const [mostrarContraseña1, setMostrarContraseña1] = useState(false);
  const [mostrarContraseña2, setMostrarContraseña2] = useState(false);

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

  const handleSubmit = async (event) => {
    event.preventDefault();

    //VALIDACION
    if (
      email === "" ||
      password === "" ||
      name === "" ||
      lastname === "" ||
      country === ""
    ) {
      setError(true);
      setExito(false);
      setMensaje(
        "Los campos deben de estan completos y las contraseñas deben ser iguales"
      );
      return;
    } else {
      if (!passwordRegex.test(password)) {
        setContraseñaError(true);

        setExito(false);
        return;
      } else {
        setExito(true);
        setError(false);
        setMensaje("Se registro correctamente");
        setContraseñaError(false);
        const userForm = {
          name,
          lastname,
          email,
          country,
          password,
        };

        const respuesta = await register(userForm);
        if (respuesta.statusCode === 201) {
          login(respuesta.data);
          setTokenInCookies(respuesta.data.access_token);
          navegate("/dashboard");
        }

        //ENVIO DE DATOS
      }
    }
  };

  const handleToggleContraseña1 = (event) => {
    event.preventDefault();
    setMostrarContraseña1(!mostrarContraseña1);
  };

  return (
    <div className="bg-white">
      <div className="flex justify-center items-center">
        <form className="flex flex-col gap-4 p-10 m-5 w-96 gradient-orange rounded-2xl h-full ">
          <h2 className="text-center text-black font-bol m-2 text-xl">
            Estas por registrar un nuevo usuario en tu billetera virtual
          </h2>

          <div className="flex justify-center ite">
            <img src={Logo} alt="logo" className="w-20 h-auto" />
          </div>

          <div className="h-4 mt-4 mb-4">
            {error && (
              <p className="text-red-500 text-center text-lg font-semibold">
                {mensaje}
              </p>
            )}
            {exito && (
              <p className="text-green-500 text-center text-2xl font-semibold">
                {mensaje}
              </p>
            )}
          </div>

          <div className="flex-col flex mt-10">
            <label htmlFor="nombre" className="text-lg ">
              Ingresa tu Nombre
            </label>
            <input
              type="text"
              className="rounded-2xl h-10 p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex-col flex">
            <label htmlFor="apellido" className="text-lg ">
              Ingresa tu apellido
            </label>
            <input
              type="text"
              className="rounded-2xl h-10 p-2"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="flex-col flex">
            <label htmlFor="mail" className="text-lg ">
              Ingresa un email
            </label>
            <input
              type="email"
              className="rounded-2xl h-10 p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password text-xl">Contraseña</label>
            <div className="relative">
              <input
                type={mostrarContraseña1 ? "text" : "password"}
                id="password"
                className="rounded-2xl h-10 p-2 pr-24"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="absolute right-2 top-2 bg-transparent border-none"
                onClick={handleToggleContraseña1}
              >
                {mostrarContraseña1 ? (
                  <AiFillEye className="text-gray-500 w-5 h-auto" />
                ) : (
                  <AiFillEyeInvisible className="text-gray-500 w-5 h-auto" />
                )}
              </button>
            </div>
          </div>

          {contraseñaError ? (
            <p className="text-sm text-center m-2 text-red-600">
              Debe tener minimo 6 caracteres, una mayuscula, una minuscula, un
              numero.
            </p>
          ) : (
            <p className="text-sm text-center m-2">
              Debe tener minimo 6 caracteres, una mayuscula, una minuscula, un
              numero.
            </p>
          )}

          <div className="flex-col flex">
            <label htmlFor="country" className="text-lg">
              Pais
            </label>
            <select
              className="rounded-2xl h-10 p-2"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">--Selecciona--</option>
              <option value="argentina">Argentina</option>
              <option value="mexico">Mexico</option>
              <option value="brasil">Brasil</option>
            </select>
          </div>

          <div className="flex justify-center items-center">
            <button
              className="text-lg text-white border-2 border-white bg-transparent hover:bg-[#FD7A09] duration-200 p-4 rounded-2xl mt-10"
              onClick={handleSubmit}
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>

      <p className="text-center m-8 text-lg">
      Es muy importante que sea un correo personal,  con acceso continuo y directo.
      <br /> 
      En caso de tener que recuperar tu cuenta te enviaremos un código a ese mail.
      </p>

      <p className="text-center m-8 text-lg">
        Por consultas o ayuda escribenos en
        tubilleteravirtual@nombrebilletera.com
      </p>
    </div>
  );
}

export default Registro;
