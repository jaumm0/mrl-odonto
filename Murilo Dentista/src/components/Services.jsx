import React from "react";
import { Stethoscope, CircleDot, Smile, Sparkles, Heart, Baby      } from 'lucide-react';

function Services(){
    return (
    <div className="bg-bgServices" id="Services">
        <section className="grid grid-rows-3 place-content-center  lg:place-content-center md:place-content-center sm:place-items-center pt-10 max-md:pt-6 max-md:px-3">
            <div className="bg-bgP pt-5 w-100 h-15 lg:h-0 md:h-0 sm:h-0  lg:pt-0 md:pt-0 sm:pt-0  rounded-full text-center place-items-center ">
            <p className="text-ptext font-medium   place-content-center text-center max-md:text-sm">Nossos Serviços</p>
            </div>
            <h2 className="text-h1 font-bold text-2xl lg:text-5xl md:text-5xl sm:text-4xl w-100 lg:w-full md:w-full sm:w-full px-5 text-center max-md:text-xl max-md:px-2 pt-5">Tratamentos completos para toda  a família</h2>
            <p className="text-pspan w-100 lg:w-full md:w-full sm:w-full md:px-0 sm:px-0 place-items-center text-center lg:pt-0 md:pt-10 sm:pt-5 px-5 lg:px-0 md:px-0 sm:px-0 max-md:text-sm max-md:pt-3">Oferecemos uma ampla gama de serviços odontológicos com qualidade e tecnologia de ponta.</p>
        </section>
        <section className="pt-10 max-md:pt-6 max-md:px-3">
            <ul className="grid grid-rows-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-rows-1 lg:px-20 max-md:grid-cols-1 max-md:gap-4 max-md:px-2">


                <div className="w-90 lg:w-100 md:w-100 sm:w-100 max-md:w-full h-50 max-md:min-h-0 max-md:py-4 rounded-xl shadow-xl place-self-center mb-10 max-md:mb-4 bg-bgIcons hover:scale-105 trasition-all duration-150">
                <Stethoscope className="bg-blue-500 m-3 w-13 h-13 p-1  text-white  hover:scale-105 trasition-all duration-150 rounded-xl" />
                <h2 className="px-3 font-bold text-1xl" >Clínica Geral</h2>
                <p className="px-3 py-1 font-medium text-spantext" >Consultas, limpezas, restaurações e tratamentos preventivos para manter sua saúde bucal em dia.</p>
                </div>
                <div className="w-90 lg:w-100 md:w-100 sm:w-100 max-md:w-full h-50 max-md:min-h-0 max-md:py-4 rounded-xl shadow-xl place-self-center mb-10 max-md:mb-4 bg-bgIcons hover:scale-105 trasition-all duration-150">
                <CircleDot className="bg-blue-500 m-3 w-13 h-13 p-1  text-white  hover:scale-105 trasition-all duration-150 rounded-xl" />
                <h2 className="px-3 font-bold text-1xl" >Ortodontia</h2>
                <p className="px-3 py-1 font-medium text-spantext" >Aparelhos fixos, móveis e alinhadores invisíveis para um sorriso perfeitamente alinhado.</p>
                </div>
                <div className="w-90 lg:w-100 md:w-100 sm:w-100 max-md:w-full h-50 max-md:min-h-0 max-md:py-4 rounded-xl shadow-xl place-self-center mb-10 max-md:mb-4 bg-bgIcons hover:scale-105 trasition-all duration-150">
                <Smile className="bg-blue-500 m-3 w-13 h-13 p-1  text-white  hover:scale-105 trasition-all duration-150 rounded-xl" />
                <h2 className="px-3 font-bold text-1xl" >Implantes Dentários</h2>
                <p className="px-3 py-1 font-medium text-spantext" >Recupere dentes perdidos com implantes de última geração e resultados naturais.</p>
                </div>
                <div className="w-90 lg:w-100 md:w-100 sm:w-100 max-md:w-full h-50 max-md:min-h-0 max-md:py-4 rounded-xl shadow-xl place-self-center mb-10 max-md:mb-4 bg-bgIcons hover:scale-105 trasition-all duration-150">
                <Sparkles className="bg-blue-500 m-3 w-13 h-13 p-1  text-white  hover:scale-105 trasition-all duration-150 rounded-xl" />
                <h2 className="px-3 font-bold text-1xl" >Clareamento Dental</h2>
                <p className="px-3 py-1 font-medium text-spantext" >Tratamentos profissionais para um sorriso mais branco e radiante em poucas sessões.</p>
                </div>
                <div className="w-90 lg:w-100 md:w-100 sm:w-100 max-md:w-full h-50 max-md:min-h-0 max-md:py-4 rounded-xl shadow-xl place-self-center mb-10 max-md:mb-4 bg-bgIcons hover:scale-105 trasition-all duration-150">
                <Heart  className="bg-blue-500 m-3 w-13 h-13 p-1  text-white  hover:scale-105 trasition-all duration-150 rounded-xl" />
                <h2 className="px-3 font-bold text-1xl" >Estética do Sorriso</h2>
                <p className="px-3 py-1 font-medium text-spantext" >Lentes de contato dental, facetas e harmonização para o sorriso dos seus sonhos.</p>
                </div>
                <div className="w-90 lg:w-100 md:w-100 sm:w-100 max-md:w-full h-50 max-md:min-h-0 max-md:py-4 rounded-xl shadow-xl place-self-center mb-10 max-md:mb-4 bg-bgIcons hover:scale-105 trasition-all duration-150">
                <Baby  className="bg-blue-500 m-3 w-13 h-13 p-1  text-white  hover:scale-105 trasition-all duration-150 rounded-xl" />
                <h2 className="px-3 font-bold text-1xl" >Odontopediatria</h2>
                <p className="px-3 py-1 font-medium text-spantext" >Cuidado especial e carinhoso para os pequenos, criando hábitos saudáveis desde cedo.</p>
                </div>
            </ul>
        </section>
    </div>
    )
}
export default Services;    