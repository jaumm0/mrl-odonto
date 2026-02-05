import React from "react";
import dental from './Assets/hero-dental.jpg';
import { MessageCircle } from 'lucide-react';
function Inicio() {
    return(
        <section className="grid grid-cols-2 max-md:grid-cols-1 gap-4 max-md:gap-5 items-center px-10 max-md:px-4 py-10 max-md:py-6 bg-bginicio" id="inicio">
            <div className="flex flex-col gap-6 max-md:gap-4">
                <p className="text-ptext bg-bgptext w-75 max-md:w-full h-8 rounded-xl pt-1 p-1 font-medium text-sm max-md:text-md ">✨ Clínica Odontológica de Excelência</p>
                <h1 className="text-h1 text-2xl w-100 lg:w-full md:w-full sm:w-10 lg:text-6xl md:text-6xl sm:text-2xl font-inter font-bold max-md:text-xl max-md:w-full  ">Sorria com confiança. Cuidado completo  para você e sua família.</h1>
                <span className="text-pspan text-1xl w-80 lg:w-full lg:text-2xl md:text-2xl sm:text-1xl pt-4 text-center lg:text-left md:text-justify sm:text-justify max-md:w-full max-md:text-base max-md:pt-2">Há mais de 15 anos transformando sorrisos com tecnologia de ponta, profissionais especializados e atendimento humanizado.</span>
            <div className="flex max-md:flex-col max-md:gap-3">
                <a target="_blank" href="https://wa.me/5511999999999"><button className="flex items-center justify-center gap-2 bg-buttonp bg-bgwhats animate-pulse space-x-4 w-80 max-md:w-full h-13 max-md:h-12 mr-5 max-md:mr-0 rounded-xl px-4 py-2 cursor-pointer font-medium text-white hover:bg-hoverBtn"><MessageCircle className=""/>Agende sua consulta</button> </a>
                <a href="#Services"><button className="border-borderb border-2 w-60 h-13 hidden lg:block md:block sm:hidden max-md:block max-md:w-full rounded-xl px-4 py-2 cursor-pointer hover:bg-hoverBtn">Conhecer Serviços</button></a>
            </div>   
            <ul className="grid grid-cols-3 max-md:grid-cols-1 w-90 lg:w-full gap-1 lg:text-2xl md:text-2xl sm:text-1xl pt-4 place-items-center max-md:gap-2 max-md:w-full max-md:text-sm">
                <div className="flex items-center gap-2 text-muted-foreground max-md:justify-center"><div className="w-2 h-2 bg-accent rounded-full shrink-0"></div><span className="text-sm">+5.000 pacientes atendidos</span></div>
                <div className="flex items-center gap-2 text-muted-foreground max-md:justify-center"><div className="w-2 h-2 bg-accent rounded-full shrink-0"></div><span className="text-sm">4.9 ⭐ no Google</span></div> 
                <div className="flex items-center gap-2 text-muted-foreground max-md:justify-center"><div className="w-2 h-2 bg-accent rounded-full shrink-0"></div><span className="text-sm">15 anos de experiência</span></div>   
                </ul>
            </div>
            <aside className="max-md:order-first max-md:mb-2">
                <img src={dental} className="object-cover w-full rounded-xl block hidden lg:block md:block sm:hidden lg:w-full md:w-full sm:w-full max-md:block max-md:max-h-56" alt="Hero dental" />
            </aside>
        </section>
        
    )
}
export default Inicio;  