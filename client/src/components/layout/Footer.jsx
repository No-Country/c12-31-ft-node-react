import fondo1 from '../../assets/img/fondoBlanco_LogoVerde.svg'

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 text-base-content" style={{backgroundImage: `url(${fondo1})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100px'}}>
      <div>
        <p className="text-[#090909] text-lg font-bold">Copyright © 2023 - All right reserved by No Country (c12-31-ft-node-react)</p>
      </div>
    </footer>
  )
}

export default Footer
