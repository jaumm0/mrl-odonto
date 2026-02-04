import { Instagram } from 'lucide-react';
import React from "react";
function Footer(){
    return(
        <section className="grid grid-cols-[60vh_40vh_40vh_40vh] max-md:grid-cols-1 max-md:gap-8 bg-bgFooter text-white py-10 max-md:py-8 max-md:px-4 max-md:text-center">
            <div className="w-full text-center lg:w-full lg:pt-15 lg:pl-10 max-md:pt-0 max-md:pl-0">
                <h3 className="font-medium text-2xl max-md:text-xl">🦷 OdontoClínica</h3>
                <p className="pt-5 max-md:pt-3 max-md:text-sm">Há mais de 15 anos transformando sorrisos com excelência, tecnologia e atendimento humanizado.</p>
                <div className="w-13 h-13 border rounded-full mt-5 ml-5 lg:ml-0 md:ml-0 sm:ml-0 max-md:ml-0 max-md:mx-auto px-3 py-3 inline-block"><a href=""><Instagram/></a></div>    
                
            
            </div>
            <div className="pt-15 pl-10 max-md:pt-0 max-md:pl-0">
                <h3 className="font-medium text-2xl max-md:text-xl">Contato</h3>
                <p className="pt-5 max-md:pt-2 max-md:text-sm">(11) 99999-9999</p>
                <p className="pt-5 max-md:pt-1 max-md:text-sm"> Whatszapp : (11) 99999-9999</p>
                <p className="pt-5 max-md:pt-1 max-md:text-sm break-all">contato@odontoclinica.com.br</p>
            </div>
            <div className="pt-15 pl-10 max-md:pt-0 max-md:pl-0">
                <h3 className="font-medium text-2xl max-md:text-xl">Endereço</h3>
                <p className="pt-5 max-md:pt-2 max-md:text-sm">Rua das Flores, 123 Centro - São Paulo/SP CEP: 01234-567</p>
            </div>
            <div className="pt-15 pl-10 max-md:pt-0 max-md:pl-0">
                <h3 className="font-medium text-2xl max-md:text-xl">Horário de Atendimento</h3>
                <p className="pt-5 max-md:pt-2 max-md:text-sm">Segunda a Sexta 08:00 - 18:00</p>
                <p className="pt-5 max-md:pt-1 max-md:text-sm">Sábado 08:00 - 12:00</p>
            </div>
            
            
        </section>
    )
}
export default Footer;