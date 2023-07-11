import { useState } from "react"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"


function Registro() {

  //STATES
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [repetirContraseña, setRepetirContraseña] = useState("");
  const [pais, setPais] = useState("")
  const [error, setError] = useState(false)
  const [exito, setExito] = useState(false)
  const [mensaje, setMensaje] = useState("")
  const [contraseñaError, setContraseñaError] = useState(false)

  //MOSTRAR CONTRASEÑA
  const [mostrarContraseña1, setMostrarContraseña1] = useState(false)
  const [mostrarContraseña2, setMostrarContraseña2] = useState(false)

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

  const handleSubmit = (event) => {
    event.preventDefault();

    //VALIDACION
    if (email === "" || contraseña === "" || repetirContraseña === "" || pais === "" || contraseña !== repetirContraseña) {

      setError(true)
      setExito(false)
      setMensaje("Los campos deben de estan completos y las contraseñas deben ser iguales")
      return

    }
    else {
      if (!passwordRegex.test(contraseña)) {

        setContraseñaError(true)

        setExito(false)
        return
      }
      else {
        setExito(true)
        setError(false)
        setMensaje("Se registro correctamente")
        setContraseñaError(false)
      }
    }


  }

  const handleToggleContraseña1 = (event) => {
    event.preventDefault();
    setMostrarContraseña1(!mostrarContraseña1);
  };

  const handleToggleContraseña2 = (event) => {
    event.preventDefault();
    setMostrarContraseña2(!mostrarContraseña2);
  };

  return (
    <div className="bg-white">
      <h2 className="text-center text-black font-bol m-12 text-xl">Estas por registrar un nuevo usuario en tu billetera virtual</h2>



      <div className="flex justify-center items-center">
        <form className="flex flex-col gap-4 p-10 m-5 w-96 bg-[#D9D9D9] rounded-2xl h-full ">
          <div className="h-4 m-2">
            {error && <p className="text-red-500 text-center text-sm">{mensaje}</p>}
            {exito && <p className="text-green-500 text-center text-lg">{mensaje}</p>}
          </div>
          <div className="flex-col flex">
            <label htmlFor="mail" className="text-lg ">Ingresa un email</label>
            <input
              type="email"
              className="rounded-2xl h-10 p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>


          <div>
            <label htmlFor="contraseña text-xl">Contraseña</label>
            <div className="relative">
              <input
                type={mostrarContraseña1 ? "text" : "password"}
                id="contraseña"
                className="rounded-2xl h-10 p-2 pr-28"
                onChange={(e) => setContraseña(e.target.value)}
              />
              <button
                className="absolute right-2 top-2 bg-transparent border-none"
                onClick={handleToggleContraseña1}
              >
                {mostrarContraseña1 ? <AiFillEye className="text-gray-500"/> : <AiFillEyeInvisible  className="text-gray-500"/>}
              </button>
            </div>
          </div>


          {contraseñaError ? <p className="text-sm text-center m-2 text-red-600">Debe tener minimo 6 caracteres, una mayuscula, una minuscula, un numero.</p> : <p className="text-sm text-center m-2">Debe tener minimo 6 caracteres, una mayuscula, una minuscula, un numero.</p>}

          <div>
            <label htmlFor="repetirContraseña text-xl">Repetir Contraseña</label>
            <div className="relative">
              <input
                type={mostrarContraseña2 ? "text" : "password"}
                id="repetirContraseña"
                className="rounded-2xl h-10 p-2 pr-28"
                onChange={(e) => setRepetirContraseña(e.target.value)}
              />
              <button
                className="absolute right-2 top-2 bg-transparent border-none"
                onClick={handleToggleContraseña2}
              >
                {mostrarContraseña2 ? <AiFillEye className="text-gray-500"/> : <AiFillEyeInvisible  className="text-gray-500"/>}

              </button>
            </div>
          </div>

          <div className="flex-col flex">
            <label htmlFor="pais" className="text-lg">Pais</label>
            <select
              className="rounded-2xl h-10 p-2"
              value={pais}
              onChange={(e) => setPais(e.target.value)}
            >
              <option value="">--Selecciona--</option>
              <option value="argentina">Argentina</option>
              <option value="mexico">Mexico</option>
              <option value="brasil">Brasil</option>
            </select>
          </div>


        </form>
      </div>

      <div className="flex justify-center items-center">
        <button
          className="text-lg bg-[#D9D9D9] p-4 rounded-2xl mt-10"
          onClick={handleSubmit}
        >Registrarse</button>
      </div>


      <p className="text-center m-8 text-lg">
        Por consultas o ayuda escribenos en tubilleteravirtual@nombrebilletera.com
      </p>

    </div>
  )
}

export default Registro
