import { ChangeEvent, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { atualizar, buscar, cadastrar } from "../../service/Service"
import Restaurante from "../../models/Restaurante"
import Categoria from "../../models/Categoria"

function FormRestaurantes() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categorias, setCategorias] = useState<Categoria[]>([])

    const [categoria, setCategoria] = useState<Categoria>({ id: 0, descricao: ''})
    const [restaurante, setRestaurante] = useState<Restaurante>({} as Restaurante)

    const [saudavel, setSaudavel] = useState<boolean>(false)

    const [avaliacao, setAvaliacao] = useState("")
 
    const { id } = useParams<{ id: string }>()


    async function buscarRestaurantePorId(id: string) {
            try {
                await buscar(`/restaurantes/${id}`, setRestaurante)
            } catch (error: any) {
                alert("Error")
                    navigate("/listarestaurantes")
        
            }
        }

        async function buscarCategoriaPorId(id: string) {
            try {
                await buscar(`/categoria/${id}`, setCategoria)
            } catch (error: any) {
                alert("Error")
                    navigate("/listarestaurantes")
        
            }
        }

        async function buscarCategoria() {
            try {
                await buscar(`/categoria/all`, setCategorias)
            } catch (error: any) {
                alert("Error")
                    navigate("/listarestaurantes")
        
            }
        }


        useEffect(() => {
            buscarCategoria()
    
            if (id !== undefined) {
                buscarRestaurantePorId(id)
            }
        }, [id])
        

            useEffect(() => {
                setRestaurante({
                    ...restaurante,
                    categoria: categoria,
                    saudavel: saudavel
                })
            }, [categoria, saudavel])


            function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
                    setRestaurante({
                        ...restaurante,
                        avaliacao: +avaliacao,
                        [e.target.name]: e.target.value, 
                        categoria: categoria
                    })
                }

            function retornar() {
                navigate("/listarestaurantes")
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

            console.log(restaurante)
                
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

                <div className="flex flex-col gap-2">
                       
                       <label htmlFor="horario_funcionamento">Horário de Funcionamento</label>
        
                       <input type="text" placeholder="Horário de Funcionamento"
                              name="horario_funcionamento" className="border-2 border-slate-700 rounded p-2" value={restaurante.horario_funcionamento}
                              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}/>
                   </div>

                   <div className="flex flex-col gap-2">
                       
                   <label htmlFor="avaliacao">Avaliação de 1 a 10:</label>
        
                       <input type="number" name="avaliacao" className="border-2 border-slate-700 rounded p-2"
                         min="1" max="10"   onChange={(e: ChangeEvent<HTMLInputElement>) => setAvaliacao(e.target.value)}/>
                   </div>


                   <div className="flex flex-col gap-2">
                       
                       <label htmlFor="endereco">Endereço</label>
        
                       <input type="text" placeholder="Endereço do Restaurante"
                              name="endereco" className="border-2 border-slate-700 rounded p-2" value={restaurante.endereco}
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


                <div className="flex flex-col gap-2">
                    <p>Categoria do Restaurante</p>
                    <select name="categoria" id="categoria" className='border p-2 border-slate-800 rounded'
                        onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                    >
                        <option value="" selected disabled>Selecione uma Categoria</option>

                        {categorias.map((categoria) => (
                            <>
                                <option value={categoria.id} >{categoria.descricao}</option>
                            </>
                        ))}

                    </select>
                </div>
        

                <button className="rounded-[64px] shadow-2xl text-white font-bold bg-[#f18c18] hover:bg-[#e6aa7d] w-1/2 py-2 mx-auto flex justify-center" 
                type="submit">
            Cadastrar
            </button>
        
                </form>
            </div>
          
  )
}

export default FormRestaurantes