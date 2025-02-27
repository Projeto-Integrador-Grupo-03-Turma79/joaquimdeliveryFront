interface CardCategoriasProps {
    categoria : Categoria
}

import { Link } from "react-router-dom";
import Categoria from "../../../assets/models/Categoria";

export default function CardCategorias( {categoria}: CardCategoriasProps) {

  return (
    <>
        <div className=' flex flex-col border-2 rounded-3xl overflow-hidden justify-between shadow-blue-950 shadow-2xs'>

            <header className="flex justify-center text-4xl p-2 text-white italic bg-[#700200]"> Categoria </header>

            <p className='flex justify-center p-8 text-3xl h-full bg-gray-200'>{categoria.descricao}</p>
            
            <div className="flex  bg-gray-200">
                <Link to={`/editartema/${categoria.id}`} className='w-full text-slate-100 bg-[#c07512] hover:bg-[#8a540e] flex items-center justify-center py-2 m-3 rounded-[20px] '>
            	    <button>Editar</button>
                </Link>

                <Link to={`/deletartema/${categoria.id}`} className='text-slate-100 bg-orange-700 hover:bg-orange-800 w-full flex items-center justify-center py-2 m-3 rounded-[20px]'>
	                <button>Deletar</button>
                </Link>
            </div>

        </div>

    </>
  )
}
