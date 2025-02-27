import logo from "../../../assets/joaquimdelilogo2.svg";
import { Link } from "react-router-dom";
import Restaurante from "../../../assets/models/Restaurante";


interface CardRestaurantesProps {
  restaurante : Restaurante
}


export default function CardRestaurantes( {restaurante}: CardRestaurantesProps) {

  return (
    <>
        <div className=' flex flex-col  rounded-3xl overflow-hidden justify-between transition-transform hover:scale-102'>

            <header className="flex justify-center text-justify text-4xl p-2 text-white italic bg-[#700200]"> {restaurante.nome} </header>

            <div className="container grid grid-cols-2 bg-gray-200"> 
                <div className="rounded-full bg-[#700200] m-7">
                  <img src= {logo} className="flex items-center justify-center p-3 object-[-4px]"/>
                </div>
                  <div className="flex flex-col justify-between pt-5 pb-5"> 
                  <p> Categoria: <span className="font-bold"> {restaurante.categoria?.descricao} </span></p>
                  <p className="pb10"> Funcionamento: <span className="font-bold"> {restaurante.horario_funcionamento}</span> </p>
                  <p> Endereço: <span className="font-bold"> {restaurante.endereco} </span> </p>
                  <p>  Opção Saudável:  <span className="font-bold"> {restaurante.saudavel === true ? ("Sim!") : ("Não.") } </span> </p>
                  <p> Avaliação: <span className="font-bold"> {restaurante.avaliacao}/10 </span> </p>
                </div>

            </div>

            <div className="flex  bg-gray-200">
                <Link to={`/editartema/${restaurante.id}`} className='w-full text-slate-100 bg-[#c07512] hover:bg-[#8a540e] flex items-center justify-center py-2 m-3 rounded-[20px] '>
            	    <button>Editar</button>
                </Link>

                <Link to={`/deletartema/${restaurante.id}`} className='text-slate-100 bg-orange-700 hover:bg-orange-800 w-full flex items-center justify-center py-2 m-3 rounded-[20px]'>
	                <button>Deletar</button>
                </Link>
            </div>

        </div>

    </>
  )
}
