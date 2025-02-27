import { useEffect, useState } from "react"
import { buscar } from "../../../service/Service"
import CardRestaurantes from "../cardrestaurantes/CardRestaurantes"
import Restaurante from "../../../models/Restaurante"
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Link } from "react-router-dom";


export default function ListaRestaurantes() {

    const [restaurantes, setRestaurante] = useState<Restaurante[]>([]) 
    

    async function buscarRestaurantes() {

        try {
            await buscar('/restaurantes/saudavel', setRestaurante)
        } catch (error: any) {
            alert("Deu erro aqui em, man")
        }

    }   

    useEffect(() => {
        buscarRestaurantes()    
    }, [restaurantes.length]) 
    
    return (
        <>
        {restaurantes.length === 0 && (  <div className="flex flex-col justify-center items-center align-middle min-h-[40vh]"> 
            <DotLottieReact src="https://lottie.host/2d7bfb57-a05e-4490-a7f5-68e75ab2665c/ASczaNiuYr.lottie" loop autoplay />
          </div>
          )}

            <div className="grid justify-center w-full py-12 bg-white grid-rows-3">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                       {restaurantes.map((restaurante) => ( 
                            <div className="shadow-2xl  rounded-3xl"> <CardRestaurantes key={restaurante.id} restaurante={restaurante} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex-col flex justify-center items-center "> 
                    <Link to={"/cadastrarrestaurantes"} className=' min-w-[50vh] min-h-[10vh] text-3xl text-white font-bold bg-[#f18c18] hover:bg-[#e6aa7d] flex items-center justify-center py-2 m-3 rounded-[64px] shadow-2xl transition-transform hover:scale-102 '>
                        <button>Cadastrar Restaurante</button>
                    </Link>
                </div>
                
            </div>
        </>
    )   

}