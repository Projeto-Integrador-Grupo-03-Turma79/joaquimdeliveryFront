import { useEffect, useState } from "react"
import { buscar } from "../../../service/Service"
import CardCategorias from "../cardcategorias/CardCategorias"
import Categoria from "../../../assets/models/Categoria"

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
            "Não tem nada"
        )}
            <div className="flex justify-center w-full py-12 bg-white">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                       {categorias.map((categoria) => ( 
                            <CardCategorias key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )   
}