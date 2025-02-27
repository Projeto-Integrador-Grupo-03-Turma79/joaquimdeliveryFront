export default function Home() {
    return (
        <>
            <div className="bg-white flex flex-col justify-center items-center">
                <div className='container grid grid-cols-2 text-black pt-20 pb-30'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-7xl font-bold'>Delivery Joaquim</h2>
                        <p className='text-2xl'> Comida para você e dinheiro para mim! </p>
                        <div className="flex justify-around gap-4">
                            <div className="flex justify-around gap-4">
                            </div>
                        </div>
                    </div>

                    <div id="imagem" className="flex justify-center ">
                        <img src="" alt="Imagem Página Home" />
                    </div>
                </div>
                <div className="container flex flex-col items-center allign-center w-full bg-gray-200 rounded-4xl -mt-10 mb-15 max-w-7xl" >
                        <h2 className="text-4xl font-bold pt-10" > Sobre nossa Empresa </h2>
                        <p  className='text-xl text-justify justify-center items-center p-7'> Nossa empresa de Recursos Humanos é especializada em conectar talentos às melhores oportunidades do mercado. Com soluções personalizadas, oferecemos recrutamento e seleção, treinamento, desenvolvimento organizacional e consultoria estratégica. Nosso compromisso é impulsionar o crescimento das empresas e valorizar o potencial dos profissionais, garantindo um ambiente de trabalho produtivo e harmonioso. Utilizamos metodologias inovadoras e tecnologia para otimizar processos e proporcionar resultados eficazes. Com uma equipe qualificada e focada em excelência, ajudamos empresas a construir equipes de alto desempenho, promovendo o engajamento e a retenção de talentos. Nossa missão é transformar desafios em oportunidades e gerar impacto positivo no mundo corporativo. </p>    
                </div>
            </div>
        </>
    )
}