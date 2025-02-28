import { useEffect, useState } from "react"
import { buscar } from "../../../service/Service"
import CardCategorias from "../cardcategorias/CardCategorias"
import { Link } from "react-router-dom"
import Categoria from "../../../models/Categoria"
import { DotLottieReact } from "@lottiefiles/dotlottie-react"

export default function ListaCategorias() {

    const [categorias, setCategoria] = useState<Categoria[]>([]) //temas: [{id, descricao}] | temas: []


    async function buscarCategorias() {

        try {
            await buscar('/categoria/all', setCategoria)
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert("Deu erro aqui em, man")
            }
        }

    }

    useEffect(() => {
        buscarCategorias()    
    }, [categorias.length]) 
    
    return (
        <>
        {categorias.length === 0 && (  
            <div className="flex flex-col justify-center items-center align-middle min-h-[40vh]"> 
                <DotLottieReact src="https://lottie.host/2d7bfb57-a05e-4490-a7f5-68e75ab2665c/ASczaNiuYr.lottie" loop autoplay />
            </div>
        )}
            <div className="grid justify-center w-full py-12 bg-white grid-rows-2">
                <div className="flex justify-center w-full py-12 bg-white">
                    <div className="container flex flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                        {categorias.map((categoria) => ( 
                                <CardCategorias key={categoria.id} categoria={categoria} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex-col flex justify-center items-center "> 
                    <Link to={"/cadastrarcategorias"} className=' min-w-[50vh] min-h-[10vh] text-3xl text-white font-bold bg-[#f18c18] hover:bg-[#e6aa7d] flex items-center justify-center py-2 m-3 rounded-[64px] shadow-2xl transition-transform hover:scale-102 '>
                        <button>Cadastrar Categoria</button>
                    </Link>
                </div>
            </div>
        </>
    )   
}