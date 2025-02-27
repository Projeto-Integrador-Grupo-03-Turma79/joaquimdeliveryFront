import { Link } from "react-router-dom";
import logo from "../../assets/joaquimdelilogo2.svg"

export default function Navbar()  {

    function saida(){
        alert('Obrigado por usar o nosso sistema!');
    }

    return (
        <>
        <nav className='w-full bg-[#700300] text-white flex justify-center py-4'>
            <div className="container flex justify-between text-2xl">
                <Link to='/home' > <img src={logo} alt="Logo de RH" className="w-25" /> </Link>

                <div className='flex gap-20 items-center justify-center'>
                    <Link to='/sobre' className='hover:underline'>Sobre nós</Link>
                    <Link to='/listacategorias' className='hover:underline'>Lista de Categorias</Link>
                    <Link to='/listarestaurantes' className='hover:underline'>Lista de Restaurantes</Link>
                    <a onClick={saida} href="https:/google.com" className='hover:underline'> Sair </a>
                </div>
            </div>
        </nav>
    </>
    )
}