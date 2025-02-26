import { ChangeEvent, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { atualizar, buscar, cadastrar } from "../../service/Service"
import Categoria from "../../models/Categoria"

function FormCategorias() {

    const navigate = useNavigate()

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categoria/${id}`, setCategoria)
        } catch (error: any) {
            alert("Error")
                navigate("/")
    
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])


    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    function retornar() {
        navigate("/home")
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/categoria/atualizar`, categoria, setCategoria)
                alert("A Categoria foi atualizada com sucesso!")
            } catch (error: any) {
                alert("Erro ao atualizar a categoria.")
            }
        } else {
            try {
                await cadastrar(`/categoria/criar`, categoria, setCategoria)
                alert("A Categoria foi cadastrada com sucesso!")
            } catch (error: any) {
                alert("Erro ao cadastrar a categoria.")
            }
        }

    setIsLoading(false)
    retornar()
}

    return (

        <div className="container flex flex-col items-center justify-center mx-auto">
        <h1 className="text-4xl text-center my-8">
        {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
        </h1>

        <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
           
        <div className="flex flex-col gap-2">
               
               <label htmlFor="nome">Categoria</label>

               <input type="text" placeholder="Categoria"
                      name='descricao'className="border-2 border-slate-700 rounded p-2" value={categoria.descricao}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
           </div>

            <button className="rounded text-slate-100 bg-[#f5a74ecc] hover:bg-[#e6aa7dcc] w-1/2 py-2 mx-auto flex justify-center" 
                type="submit">
            Cadastrar
            </button>

        </form>
    </div>
  )
}

export default FormCategorias