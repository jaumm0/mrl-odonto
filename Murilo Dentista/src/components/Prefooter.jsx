import React from "react";
function Prefooter() {
    return(
        <div className="grid grid-rows-[1fr] lg:gap-6 pt-10 max-md:pt-6 max-md:px-4 bg-bgprefooter w-full lg:w-full text-white">
                <p className=" w-full lg:w-full rounded-xl text-center px-5 lg:px-0 md:px-0 sm:px-0 max-md:text-sm max-md:py-2">Agende sua consulta</p>
                <h2 className="text-2xl lg:text-5xl text-center font-inter font-bold w-full px-10 lg:px-0 md:px-0 sm:px-0 lg:w-full max-md:text-xl max-md:px-2">Cuide do seu sorriso hoje mesmo</h2>
                <p className="text-1xl w-full lg:w-full text-center px-4 lg:px-0 md:px-0 sm:px-0 pt-2 lg:pt-0 max-md:text-sm max-md:pt-2">Não deixe para depois. Agende sua avaliação gratuita e descubra como podemos transformar o seu sorriso.</p>

            <div className="grid grid-cols-[35vh_25vh] lg:grid-cols-[40vh_35vh] 2xl:grid-cols-[35vh_25vh] max-md:grid-cols-1 max-md:gap-3  py-5 lg:py-0 place-self-center max-md:pl-0 max-md:place-items-center">
               <a href="https://wa.me/5511999999999" className="max-md:w-full place-self-center"> 
                <button target="_blank" className="w-90  text-center lg:w-80 md:w-80 sm:w-80 gap-2 bg-bgwhats h-13  rounded-xl px-10 py-2 cursor-pointer font-medium text-white hover:bg-hoverBtn max-md:w-full max-md:max-w-xs"> Agende sua consulta</button> </a>
                <a href="#Services" className="max-md:w-full max-md:flex max-md:justify-center place-self-center">
                <button className="border-borderb border-2 border-white w-60 h-13 hidden lg:block md:block sm:block max-md:block max-md:w-full max-md:max-w-xs rounded-xl px-4 py-2 cursor-pointer hover:bg-hoverBtn">Conhecer Serviços</button></a>
            </div> 
            <p className="h-40 w-full lg:w-full text-center max-md:h-auto max-md:py-4 max-md:text-sm">Atendimento de segunda a sexta, das 8h às 18h</p>
            </div>
            
    )
}
export default Prefooter;