import { Instagram } from 'lucide-react';
import React from "react";
function Footer(){
    return(
        <section className="grid grid-cols-[60vh_40vh_40vh_40vh] bg-bgFooter text-white py-10">
            <div className="w-100 text-center lg:w-full lg:pt-15 lg:pl-10 ">
                <h3 className="font-medium text-2xl">🦷 OdontoClínica</h3>
                <p className="pt-5 ">Há mais de 15 anos transformando sorrisos com excelência, tecnologia e atendimento humanizado.</p>
                <div className="w-13 h-13 border rounded-full mt-5 ml-5 lg:ml-0 md:ml-0 sm:ml-0 px-3 py-3 "><a href=""><Instagram/></a></div>    
                
            
            </div>
            <div className="pt-15 pl-10 ">
                <h3 className="font-medium text-2xl">Contato</h3>
                <p className="pt-5 ">(11) 99999-9999</p>
                <p className="pt-5 "> Whatszapp : (11) 99999-9999</p>
                <p className="pt-5">contato@odontoclinica.com.br</p>
            </div>
            <div className="pt-15 pl-10 ">
                <h3 className="font-medium text-2xl">Endereço</h3>
                <p className="pt-5 ">Rua das Flores, 123Centro - São Paulo/SPCEP: 01234-567</p>
            </div>
            <div className="pt-15 pl-10 ">
                <h3 className="font-medium text-2xl">Horário de Atendimento</h3>
                <p className="pt-5 ">Segunda a Sexta 08:00 - 18:00</p>
                <p className="pt-5">Sábado 08:00 - 12:00</p>
            </div>
            
            
        </section>
    )
}
export default Footer;