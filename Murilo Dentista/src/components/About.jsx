import TextType from './TextType';
import { Check } from 'lucide-react';
import React from "react";
function About(){
        return(
            <section className="grid grid-cols-2 gap-4 items-center px-10 py-10 bg-bgServices  " id="About">
            
            <aside className='grid grid-cols-[40vh_30vh] gap-10 '>
                <div className='w-77 h-50 rounded-xl bg-gradient-to-tr from-[#2253bd] to-[#48b4cf] shadow-xl '>
                        <p className='text-7xl h-full place-self-center  place-content-center '>🦷</p>
                </div>  
                <div className='w-60 h-40 rounded-xl bg-coloraside shadow-xl '>
                        <p className='text-7xl h-full place-self-center  place-content-center '>💙</p>
                </div>
                   <div className='w-70 h-35 rounded-xl bg-coloraside shadow-xl '>
                        <p className='text-7xl h-full place-self-center  place-content-center '>😊</p>
                </div>  
                <div className='w-70 h-65 rounded-xl bg-coloraside shadow-xl '>
                        <p className='text-7xl h-full place-self-center  place-content-center '>👨‍⚕️</p>
                </div>  
           
                
            </aside>
            
            <div className=" flex flex-col gap-6  pt-10">
                <p className="text-ptext bg-bgptext w-75 h-8  rounded-xl pt-1 p-1 font-medium  ">Sobre a Clínica</p>
                <h2 className="text-h1 text-6xl font-inter font-bold   ">Sua saúde bucal em boas mãos</h2>
                <span className="text-pspan text-1xl ">Fundada com o compromisso de oferecer o melhor em odontologia, nossa clínica combina tecnologia avançada com um atendimento verdadeiramente humanizado. <p className="pt-3">Nossa equipe é formada por profissionais apaixonados pelo que fazem, constantemente atualizados com as mais modernas técnicas e tratamentos disponíveis no mercado. Acreditamos que um sorriso bonito e saudável transforma vidas.</p></span>
            <section>
                <ul className='grid grid-cols-[4vh_1fr] '>
                    <div className="w-6 h-6 border-2 rounded-full  text-aboutcolor "><Check className='px-1 pb-1 place-self-center'/> </div>
                    <p className='px-2 mb-2'>Equipe multidisciplinar altamente qualificada</p>
                </ul>
                <ul className='grid grid-cols-[4vh_1fr] '>
                    <div className="w-6 h-6 border-2 rounded-full text-aboutcolor "><Check className='px-1 pb-1 place-self-center'/> </div>
                    <p className='px-2 mb-2'>Tecnologia digital de última geração</p>
                </ul>
                <ul className='grid grid-cols-[4vh_1fr] '>
                    <div className="w-6 h-6 border-2 rounded-full  text-aboutcolor "><Check className='px-1 pb-1 place-self-center'/> </div>
                    <p className='px-2 mb-2'>Ambiente climatizado e confortável</p>
                </ul>
                <ul className='grid grid-cols-[4vh_1fr] '>
                    <div className="w-6 h-6 border-2 rounded-full  text-aboutcolor "><Check className='px-1 pb-1 place-self-center'/> </div>
                    <p className='px-2 mb-2'>Protocolos rigorosos de biossegurança</p>
                </ul>
                <ul className='grid grid-cols-[4vh_1fr] '>
                    <div className="w-6 h-6 border-2 rounded-full  text-aboutcolor "><Check className='px-1 pb-1 place-self-center'/> </div>
                    <p className='px-2 mb-2'>Atendimento personalizado e humanizado</p>
                </ul>
            </section>
            </div>
        </section>
    )
}
export default About;