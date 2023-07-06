import Footer from "../layout/Footer";
import NavBar from "../layout/NavBar";
import "../../components/container/styleHomePageContainer.css";
import img1 from "../../assets/img/moneda-frente.png"; 
import img2 from "../../assets/img/moneda-torcida.png"; 
import img3 from "../../assets/img/monedas-varias-chica.png";
import img4 from "../../assets/img/monedas-varias-grande.png";


const HomePageContainer = () => {
    
    return (
        <div className="bg-gray-200">
            <nav className="bg-transparent absolute z-50">
                <NavBar/>
            </nav>
            <header>
                <div className="contImg1 h-screen relative">    
                <div className="flex flex-col justify-center absolute bottom-0 w-full">
                    <p className="text-black font-bold text-lg ml-2">No somos una billetera más...</p>
                    <p className="text-black font-bold text-lg mt-2 ml-2">Somos tu mejor amigo en finanzas</p>
                    <div className="flex justify-center">
                        <button className="btn btn-wide rounded-3xl bg-gray-400 border-none text-black font-bold m-4 ">Descubrinos</button>
                    </div>
                    </div>
                </div>
            </header>
            <body>

                <div className="flex justify-center items-center relative mt-20">
                    <div className="flex flex-col justify-center items-center z-10 overflow-visible absolute left-0">
                        <p className="text-black font-bold text-lg ml-2 overflow-visible">Realiza y recibe</p>
                        <p className="text-black font-bold text-lg ml-2 overflow-visible">transferencias en cuestion</p>
                        <p className="text-black font-bold text-lg ml-2 overflow-visible">de segundos</p>
                    </div>
                    <div className="flex justify-center items-center mb-40 relative -right-20">
                        <img className="object-none h-40 w-40 overflow-visible " src={img2} alt="" />
                    </div>
                </div>

                <div className="flex justify-center items-center relative mt-20">
                    <div className="flex justify-center items-center mb-40 relative -left-10">
                        <img className="object-none h-40 w-40 overflow-visible " src={img4} alt="" />
                    </div>
                    <div className="flex flex-col justify-center items-center z-10 overflow-visible absolute right-10 bottom-0">
                        <p className="text-black font-bold text-lg ml-2 overflow-visible">Ingresa y extrae dinero</p>
                        <p className="text-black font-bold text-lg ml-2 overflow-visible">facilmente</p>
                    </div>
                </div>

                <div className="flex justify-center items-center relative ">
                    <div className="flex justify-center items-center mb-20 relative -left-10">
                        <img className="object-cover h-100 w-100 overflow-visible " src={img1} alt="" />
                    </div>
                    <div className="flex flex-col justify-center items-start z-10 overflow-visible absolute right-0 bottom-0 pr-4 pb-7 ">
                        <p className="text-black font-black text-xl ml-2 overflow-visible">Transacciones rápidas y seguras</p>
                        <p className="text-black font-bold text-lg ml-2 overflow-visible">Podrás operar en pesos, comprar dólares</p>
                        <p className="text-black font-bold text-lg ml-2 overflow-visible">e invertir en Cryptos</p>
                    </div>
                </div>

                <div className="flex justify-center items-center relative mt-10">
                    <div className="flex flex-col justify-center items-start z-10 overflow-visible absolute left-0 bottom-0">
                        <p className="text-black font-bold text-lg ml-2 overflow-visible items-start">Tu dinero disponible todos los</p>
                        <p className="text-black font-bold text-lg ml-2 overflow-visible">días, en todo momento</p>
                        <div className="flex flex-col justify-center  items-center" >
                        <p className="text-black font-bold text-2xl ml-2 overflow-visible">Estás a un paso de cambiar el</p>
                        <p className="text-black font-bold text-2xl ml-2 overflow-visible">futuro de tus finanzas.</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mb-40 relative -right-20">
                        <img className="object-none h-40 w-40 overflow-visible " src={img2} alt="" />
                    </div>
                </div>

                <div className="flex justify-center items-center relative mt-10 mb-10">
                    <div className="flex flex-col justify-center items-start z-10 overflow-visible absolute left-0 top-0">
                        <p className="text-black font-bold text-lg ml-2 overflow-visible items-start">Controla y limita tus gastos</p>
                        <p className="text-black font-bold text-lg ml-2 overflow-visible">Paga servicios</p>
                        <p className="text-black font-bold text-lg ml-2 overflow-visible">Invierte y ahorra</p>
                        <p className="text-black font-bold text-2xl ml-2 mt-2 overflow-visible ">Todo en el mismo lugar</p>
                    </div>
                    <div className="flex justify-center items-center mb-40 relative -right-20 -bottom-40" >
                        <img className="object-none h-40 w-40 overflow-visible " src={img3} alt="" />
                    </div>
                </div>
                
                <div className="flex flex-col mt-20 mb-10 justify-center items-center">
                    <h2 className="text-black font-black text-xl ">¿Qué esperas para registrarte?</h2>
                    <div className="flex justify-center">
                        <button className="btn btn-wide rounded-3xl bg-gray-400 border-none text-black font-black  m-4 ">Registrate</button>
                    </div>
                </div>
            
            </body>    
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default HomePageContainer