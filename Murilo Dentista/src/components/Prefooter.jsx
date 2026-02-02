import React from "react";
function Prefooter() {
    return(
        <div className="grid grid-rows-[1vh_1fr] gap-6 place-items-center pt-10 bg-bgprefooter text-white  ">
                <p className="bg-bgPprefooter w-50 px-5 font-">Agende sua consulta</p>
                <h2 className=" text-5xl font-inter font-bold   ">Cuide do seu sorriso hoje mesmo</h2>
                <p className=" text-1xl ">Não deixe para depois. Agende sua avaliação gratuita e descubra como podemos transformar o seu sorriso.</p>

            <div className="flex  ">
               <a href="https://wa.me/5511999999999"> <button target="_blank" className="flex items-center justify-center gap-2  bg-bgwhats  w-80 h-13 mr-5 rounded-xl px-4 py-2 cursor-pointer  font-medium text-white  hover:bg-hoverBtn"> Agende sua consulta</button> </a>
                <button className=" border-borderb border-2 border-white w-60 h-13  rounded-xl px-4 py-2 cursor-pointer hover:bg-hoverBtn">Conhecer Serviços</button>
            </div> 
            <p className="h-40">Atendimento de segunda a sexta, das 8h às 18h</p>
            </div>
            
    )
}
export default Prefooter;