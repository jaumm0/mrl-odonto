import React from "react";
function Prefooter() {
    return(
        <div className="grid grid-rows-[1fr] lg:gap-6  pt-10 bg-bgprefooter w-100 lg:w-full text-white  ">
                <p className="bg-bgPprefooter w-100 lg:w-full  rounded-xl text-center px-5 lg:px-0 md:px-0 sm:px-0   ">Agende sua consulta</p>
                <h2 className=" text-2xl lg:text-5xl text-center font-inter font-bold  w-100 px-10 lg:px-0 md:px-0 sm:px-0 lg:w-full ">Cuide do seu sorriso hoje mesmo</h2>
                <p className=" text-1xl w-100 lg:w-full text-center px-4 lg:px-0 md:px-0 sm:px-0 pt-2 lg:pt-0 ">Não deixe para depois. Agende sua avaliação gratuita e descubra como podemos transformar o seu sorriso.</p>

            <div className="grid grid-cols-[50vh_40vh] pl-4 lg:pl-0 py-5 lg:py-0  lg:pl-100 ">
               <a href="https://wa.me/5511999999999"> 
                <button target="_blank" className="w-90  text-center lg:w-90 md:w-80 sm:w-80 lg: gap-2  bg-bgwhats  h-13 lg:mr-5 rounded-xl px-10 py-2 cursor-pointer  font-medium text-white  hover:bg-hoverBtn"> Agende sua consulta</button> </a>
                <button className=" border-borderb border-2 border-white w-60 h-13 hidden lg:block md:block sm:block  rounded-xl px-4 py-2 cursor-pointer hover:bg-hoverBtn">Conhecer Serviços</button>
            </div> 
            <p className="h-40 w-100 lg:w-full text-center">Atendimento de segunda a sexta, das 8h às 18h</p>
            </div>
            
    )
}
export default Prefooter;