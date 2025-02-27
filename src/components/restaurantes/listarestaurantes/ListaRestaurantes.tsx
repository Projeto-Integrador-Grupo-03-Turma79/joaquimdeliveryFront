import { useEffect, useState } from "react"
import { buscar } from "../../../service/Service"
import CardRestaurantes from "../cardrestaurantes/CardRestaurantes"
import Restaurante from "../../../assets/models/Restaurante"

export default function ListaRestaurantes() {

    const [restaurantes, setRestaurante] = useState<Restaurante[]>([]) //temas: [{id, descricao}] | temas: []


    async function buscarRestaurantes() {

        try {
            await buscar('/restaurantes/all', setRestaurante)
        } catch (error: any) {
            alert("Deu erro aqui em, man")
        }

    }   

    useEffect(() => {
        buscarRestaurantes()    
    }, [restaurantes.length]) 
    
    return (
        <>
        {restaurantes.length === 0 && (
            "Não tem nada"
        )}
            <div className="flex justify-center w-full py-12 bg-white">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                       {restaurantes.map((restaurante) => ( 
                            <div className="shadow-2xl  rounded-3xl"> <CardRestaurantes key={restaurante.id} restaurante={restaurante} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )   

}