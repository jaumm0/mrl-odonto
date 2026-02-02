import React from "react";
import dental from './Assets/hero-dental.jpg';
import { MessageCircle } from 'lucide-react';
function Inicio() {
    return(
        <section className="grid grid-cols-2 gap-4 items-center px-10 py-10  bg-bginicio       " id="inicio">
            <div className=" flex flex-col gap-6 ">
                <p className="text-ptext bg-bgptext w-75 h-8  rounded-xl pt-1 p-1 font-medium ">✨ Clínica Odontológica de Excelência</p>
                <h1 className="text-h1 text-6xl font-inter font-bold  ">Sorria com confiança. <br />Cuidado completo <br /> para você e sua <br /> família.</h1>
                <span className="text-pspan text-2xl pt-4 ">Há mais de 15 anos transformando sorrisos com tecnologia de ponta, profissionais especializados e atendimento humanizado.</span>
            <div className="flex  ">
                <a target="_blank" href="https://wa.me/5511999999999"><button className="flex items-center justify-center gap-2  bg-buttonp bg-bgwhats animate-pulse space-x-4  w-80 h-13 mr-5 rounded-xl px-4 py-2 cursor-pointer  font-medium text-white  hover:bg-hoverBtn"><MessageCircle className=""/>Agende sua consulta</button> </a>
                <a href="#Services"><button className=" border-borderb border-2 w-60 h-13  rounded-xl px-4 py-2 cursor-pointer hover:bg-hoverBtn">Conhecer Serviços</button></a>
            </div>   
            <ul className="grid grid-cols-3 ">
                <div className="flex items-center gap-2 text-muted-foreground"><div className="w-2 h-2 bg-accent rounded-full"></div><span className="text-sm">+5.000 pacientes atendidos</span></div>
                <div className="flex items-center gap-2 text-muted-foreground"><div className="w-2 h-2 bg-accent rounded-full pl-2"></div><span className="text-sm">4.9 ⭐ no Google</span></div> 
                <div className="flex items-center gap-2 text-muted-foreground"><div className="w-2 h-2 bg-accent rounded-full"></div><span className="text-sm">15 anos de experiência</span></div>   
                </ul>
            </div>
            <aside>
                <img src={dental} className="object-cover w-full rounded-xl " alt="Hero dental" />
            </aside>
        </section>
        
    )
}
export default Inicio;  