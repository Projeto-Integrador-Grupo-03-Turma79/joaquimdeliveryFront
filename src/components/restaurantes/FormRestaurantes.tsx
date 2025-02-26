import { ChangeEvent, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { atualizar, buscar, cadastrar } from "../../service/Service"
import Restaurante from "../../models/Restaurante"

function FormRestaurantes() {

    const navigate = useNavigate()

    const [restaurante, setRestaurante] = useState<Restaurante>({} as Restaurante)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [saudavel, setSaudavel] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
            try {
                await buscar(`/restaurantes/${id}`, setRestaurante)
            } catch (error: any) {
                alert("Error")
                    navigate("/home")
        
            }
        }

         useEffect(() => {
                if (id !== undefined) {
                    buscarPorId(id)
                }
            }, [id])
        

            function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
                    setRestaurante({
                        ...restaurante,
                        [e.target.name]: e.target.value
                    })
                }

            function retornar() {
                navigate("/home")
                }


            async function gerarNovoRestaurante(e: ChangeEvent<HTMLFormElement>) {
                    e.preventDefault()
                    setIsLoading(true)
            
                    if (id !== undefined) {
                        try {
                            await atualizar(`/restaurantes/atualizar`, restaurante, setRestaurante)
                            alert("O Restaurante foi atualizada com sucesso!")
                        } catch (error: any) {
                            alert("Erro ao atualizar o restaurante.")
                        }
                    } else {
                        try {
                            await cadastrar(`/restaurantes/criar`, restaurante, setRestaurante)
                            alert("O Restaurante foi cadastrado com sucesso!")
                        } catch (error: any) {
                            alert("Erro ao cadastrar o Restaurante.")
                        }
                    }

                setIsLoading(false)
                retornar()
            }

                
    return (

         <div className="container flex flex-col items-center justify-center mx-auto">
                <h1 className="text-4xl text-center my-8">
                {id === undefined ? 'Cadastrar Restaurante' : 'Editar Restaurante'}
                </h1>
        
                <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoRestaurante}>
                   
                <div className="flex flex-col gap-2">
                       
                       <label htmlFor="nome">Restaurante</label>
        
                       <input type="text" placeholder="Nome"
                              name="nome" className="border-2 border-slate-700 rounded p-2" value={restaurante.nome}
                              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
                   </div>

                   <div>
                        <label>Escolha Saudável</label>
                     <br />
            <input type="radio" id="sim" name="saudavel" value="true" checked={saudavel === true} onChange={() => setSaudavel(true)}/>
      
            <label htmlFor="sim">Sim</label>
                    <br />
      
            <input type="radio" id="nao" name="saudavel" value="false" checked={saudavel === false} onChange={() => setSaudavel(false)}/>
        
             <label htmlFor="nao">Não</label>
                <br />
            </div>
        
                    <button className="rounded text-slate-100 bg-[#f5a74ecc] hover:bg-[#e6aa7dcc] w-1/2 py-2 mx-auto flex justify-center" 
                        type="submit">
                    Cadastrar
                    </button>
        
                </form>
            </div>
          
  )
}

export default FormRestaurantes