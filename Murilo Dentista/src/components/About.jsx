import TextType from './TextType';
import { Check } from 'lucide-react';
import React from "react";
function About(){
        return(
            <section className="grid grid-rows-1 lg:grid-cols-2 gap-4 items-center px-10 py-10 max-md:px-4 max-md:py-6 bg-bgServices" id="About">
            
            <aside className='grid grid-rows-[30vh_] lg:grid-cols-[40vh_30vh] gap-10 max-md:justify-items-center max-md:mb-4'>
                <div className='w-77 h-50 rounded-xl bg-gradient-to-tr from-[#2253bd] to-[#48b4cf] shadow-xl  hidden lg:block'>
                        <p className='text-7xl h-full place-self-center  place-content-center '>🦷</p>
                </div>  
                <div className='w-60 h-50 rounded-xl bg-coloraside shadow-xl hidden lg:block '>
                        <p className='text-7xl h-full place-self-center  place-content-center '>💙</p>
                </div>
                   <div className='w-70 h-35 rounded-xl bg-coloraside shadow-xl hidden lg:block'>
                        <p className='text-7xl h-full place-self-center  place-content-center '>😊</p>
                </div>  
                <div className='w-70 h-65 rounded-xl bg-coloraside shadow-xl '>
                        <p className='text-7xl h-full place-self-center  place-content-center '>👨‍⚕️</p>
                </div>  
           
                
            </aside>
            
            <div className="flex flex-col gap-6 pt-10 place-self-center max-md:pt-4 max-md:gap-4 ">
                <div className='bg-bgP pt-5 w-100 place-self-center h-15 lg:h-0 md:h-0 sm:h-0  lg:pt-0 md:pt-0 sm:pt-0  rounded-full text-center place-items-center '>
                    <p className="text-ptextSV  font-medium text-center rounded-xl lg:w-full md:w-full sm:w-full max-md:text-sm ">Por que nos escolher</p>
                </div>
                <h2 className="text-h1 text-2xl text-center lg:text-6xl font-inter font-bold max-md:text-xl text-center py-4 lg:py-0 md:py-0 sm:py-0">Sua saúde bucal em boas mãos</h2>
                <span className="text-pspan text-1xl max-md:text-sm text-center">Fundada com o compromisso de oferecer o melhor em odontologia, nossa clínica combina tecnologia avançada com um atendimento verdadeiramente humanizado. <p className="pt-3 max-md:pt-2 pb-5 lg:pb-0 md:pb-0 sm:pb-0">Nossa equipe é formada por profissionais apaixonados pelo que fazem, constantemente atualizados com as mais modernas técnicas e tratamentos disponíveis no mercado. Acreditamos que um sorriso bonito e saudável transforma vidas.</p></span>
            <section>
                <ul className='grid grid-cols-[4vh_1fr] place-self-center place-self-center text-center lg:place-self-start md:place-self-start sm:place-self-center '>
                    <div className="w-6 h-6 border-2 rounded-full  text-aboutcolor "><Check className='px-1 pb-1 place-self-center'/> </div>
                    <p className='px-2 mb-2'>Equipe multidisciplinar altamente qualificada</p>
                </ul>
                <ul className='grid grid-cols-[4vh_1fr] place-self-center place-self-center text-center lg:place-self-start md:place-self-start sm:place-self-center '>
                    <div className="w-6 h-6 border-2 rounded-full text-aboutcolor "><Check className='px-1 pb-1 place-self-center'/> </div>
                    <p className='px-2 mb-2'>Tecnologia digital de última geração</p>
                </ul>
                <ul className='grid grid-cols-[4vh_1fr] place-self-center place-self-center text-center lg:place-self-start md:place-self-start sm:place-self-center '>
                    <div className="w-6 h-6 border-2 rounded-full  text-aboutcolor "><Check className='px-1 pb-1 place-self-center'/> </div>
                    <p className='px-2 mb-2'>Ambiente climatizado e confortável</p>
                </ul>
                <ul className='grid grid-cols-[4vh_1fr] place-self-center place-self-center text-center lg:place-self-start md:place-self-start sm:place-self-center'>
                    <div className="w-6 h-6 border-2 rounded-full  text-aboutcolor "><Check className='px-1 pb-1 place-self-center'/> </div>
                    <p className='px-2 mb-2'>Protocolos rigorosos de biossegurança</p>
                </ul>
                <ul className='grid grid-cols-[4vh_1fr] place-self-center text-center lg:place-self-start md:place-self-start sm:place-self-center '>
                    <div className="w-6 h-6 border-2 rounded-full  text-aboutcolor "><Check className='px-1 pb-1 place-self-center'/> </div>
                    <p className='px-2 mb-2'>Atendimento personalizado e humanizado</p>
                </ul>
            </section>
            </div>
        </section>
    )
}
export default About;