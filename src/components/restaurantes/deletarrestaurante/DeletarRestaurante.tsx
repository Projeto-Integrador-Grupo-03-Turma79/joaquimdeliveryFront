import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { buscar, deletar } from "../../../service/Service"

import Restaurante from "../../../models/Restaurante"

function DeletarRestaurante() {

    const navigate = useNavigate()
    const [, setIsLoading] = useState<boolean>(false)

    const [restaurante, setRestaurante] = useState<Restaurante>({} as Restaurante)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/restaurantes/${id}`, setRestaurante)
        } catch (error: any) {
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarRestaurante() {
        setIsLoading(true)

        try {
            await deletar(`/restaurantes/deletar/${id}`)

            alert('Restaurante apagado com sucesso')

        } catch (error: any) {
            alert('Erro ao deletar o tema.')
        }
        retornar()
    }

    function retornar() {
        navigate("/listarrestaurantes")
    }


    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar restaurante</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o restaurante a seguir?</p>
            <div className='flex flex-col border-1 border-gray-300 rounded-3xl overflow-hidden justify-between'>
                <header
                    className='flex justify-center text-4xl p-2 text-white italic bg-[#700200]'>
                    Restaurante
                </header>
                <p className='flex justify-center p-8 text-3xl h-full bg-gray-200'>{restaurante.nome}</p>
                <div className="flex bg-gray-200">
                    <button
                        className='w-full text-slate-100 bg-[#c07512] hover:bg-[#8a540e] flex items-center justify-center py-2 m-3 rounded-[20px]'
                        onClick={retornar}>
                        Não
                    </button>
                    <button
                        className='text-slate-100 bg-orange-700 hover:bg-orange-800 w-full flex items-center justify-center py-2 m-3 rounded-[20px]'
                        onClick={deletarRestaurante}>
                            Sim
                    </button>
                </div>
            </div>
        </div>
    )
    /*<div className=' flex flex-col border-1 border-gray-300 rounded-3xl overflow-hidden justify-between '>

            <header className="flex justify-center text-4xl p-2 text-white italic bg-[#700200]"> Restaurante </header>

            <p className='flex justify-center p-8 text-3xl h-full bg-gray-200'>{restaurante.nome}</p>

            <div className="flex  bg-gray-200">
                <Link to={/editartema/${restaurante.id}} className='w-full text-slate-100 bg-[#c07512] hover:bg-[#8a540e] flex items-center justify-center py-2 m-3 rounded-[20px] '>
                    <button>Editar</button>
                </Link>

                <Link to={/deletartema/${restaurante.id}} className='text-slate-100 bg-orange-700 hover:bg-orange-800 w-full flex items-center justify-center py-2 m-3 rounded-[20px]'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>*/
}
export default DeletarRestaurante

