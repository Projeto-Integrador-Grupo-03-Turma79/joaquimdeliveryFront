import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { buscar, deletar } from "../../../service/Service"

import Categoria from "../../../models/Categoria"

function DeletarCategoria() {

    const navigate = useNavigate()
    const [, setIsLoading] = useState<boolean>(false)

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categoria/${id}`, setCategoria)
        } catch (error: any) {
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categoria/deletar/${id}`)

            alert('Categoria apagada com sucesso')

        } catch (error: any) {
            alert('Erro ao deletar a categoria.')
        }
        retornar()
    }

    function retornar() {
        navigate("/categoria")
    }


    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Categoria</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a categoria a seguir?</p>
            <div className='flex flex-col border-1 border-gray-300 rounded-3xl overflow-hidden justify-between'>
                <header
                    className='flex justify-center text-4xl p-2 text-white italic bg-[#700200]'>
                    Categoria
                </header>
                <p className='flex justify-center p-8 text-3xl h-full bg-gray-200'>{categoria.descricao}</p>
                <div className="flex bg-gray-200">
                    <button
                        className='w-full text-slate-100 bg-[#c07512] hover:bg-[#8a540e] flex items-center justify-center py-2 m-3 rounded-[20px]'
                        onClick={retornar}>
                        Não
                    </button>
                    <button
                        className='text-slate-100 bg-orange-700 hover:bg-orange-800 w-full flex items-center justify-center py-2 m-3 rounded-[20px]'
                        onClick={deletarCategoria}>
                            Sim
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarCategoria

