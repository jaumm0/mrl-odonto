import React from "react";
import { MessageCircle } from 'lucide-react';

function Header() {
    return (
        <header className="flex lg:flex-row md:flex-row sm:flex-row justify-between items-center  py-3 lg:py-4 md:py-4 sm:py-3  lg:px-10 md:px-4 sm:px-10 bg-gray-200 z-50 sticky top-0 w-full shadow-md min-h-[60px] overflow-hidden">
           <h1 className="font-cormorant text-2xl lg:text-3xl md:text-2xl sm:text-xl">Odonto Murilo</h1>
            <ul className="flex flex-col font-inter text-Headertext font-medium lg:flex-row md:flex-row sm:flex-row justify-around w-80 items-center ">
                <li><a href="#inicio" className="hover:text-blue-600">Inicio</a></li>
                <li><a href="#Services" className="hover:text-blue-600">Serviços</a></li>
                <li><a href="#About" className="hover:text-blue-600">Sobre</a></li>
            </ul>
            <button className="flex gap-3 font-medium  rounded-xl px-2 py-2 w-55  justify-center cursor-pointer  bg-bgwhats text-white " ><MessageCircle />Agendar Consulta</button>

        </header>
    )
}
export default Header;