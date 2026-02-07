import { Heart, Cpu, GraduationCap, BedDouble, CreditCard    } from 'lucide-react';
import React from "react";
import dental from './Assets/odontocl.jpg';
function Workon(){
    return(
        <section className="grid grid-cols-[49vh]  justify-cente place-self-center lg:pt-10 2xl:pt-15  2xl:grid-cols-[87vh_1fr] lg:grid-cols-[90vh_1fr]  bg-bgServices place-self-center">
            
            <section className="grid grid-rows-[3vh_8vh_10vh]  mt-10 2xl:mt-0 lg:mt-0 md:mt-0 sm:mt-0  2xl:px-0 lg:px-0 md:px-0 sm:px-0 2xl:grid-rows-[3vh_10vh_10vh_40vh] lg:grid-rows-[3vh_15vh_8vh]   ">
            
            <p className="text-ptext font-medium text-center   ">Por que nos escolher</p>
            

            <h2 className="text-h1 font-bold text-2xl lg:text-5xl md:text-5xl sm:text-4xl w-full lg:w-full md:w-full sm:w-full  text-center max-md:text-xl max-md:px-2 py-3 ">Diferenciais que fazem a <br /> diferença</h2>
            <p className="text-pspan w-full lg:w-full md:w-full sm:w-full md:px-0 sm:px-0 place-items-center text-center 2xl:pt-5  lg:pt-0 md:pt-10 sm:pt-5 px-5 lg:px-0 md:px-0 sm:px-0 max-md:text-sm pt-3  ">Nossa missão é proporcionar a melhor experiência em <br /> cuidados    odontológicos, combinando excelência técnica com atendimento  acolhedor.</p>
            <img src={dental} alt="" className='w-200 h-80 object-cover place-self-center mb-25 lg:mb-15 rounded-full px-10 hidden lg:block 2xl:block   ' />
        </section>
              
            <aside className='w-full lg:w-full px-2 mt-5 lg:px-0 md:px-0 sm:px-0 lg:mt-0 md:mt-0 sm:mt-0 pt-10 lg:pt-0 md:pt-0 sm:pt-0  max-md:mt-4'>
                    <div className='grid grid-cols-[9vh_1fr] max-md:grid-cols-[9vh_1fr]  max-md:grid-rows-[auto_1fr] mb-5 rounded-xl shadow-xl py-2 pl-2 max-md:py-4 max-md:px-2 bg-bgI 2xl:w-175  lg:w-170 max-md:w-full h-30 lg:h-20 md:h-20 sm:h-20 max-md:min-h-0 hover:scale-105 trasition-all duration-150'>
                        <div className='py-2 px-1 lg:px-2 md:px-2 sm:px-2 lg:py-0 lg:pt-2  text-center   max-md:flex max-md:justify-start pt-5 lg:pt-0 md:pt-0 sm:pt-0 '>
                            <Heart className='bg-iconbg w-12 h-12 p-2 rounded-xl   text-white'/> 
                            
                        </div>
                        
                        <div className="">
                            <p className='font-medium w-50 pt-1'>Atendimento Humanizado</p>
                            <span className='text-spangray text-1xl max-md:text-sm'>Cada paciente é único. Tratamos você com carinho, respeito e atenção aos detalhes.</span> 
                        </div>
                    </div>
                    <div className='grid grid-cols-[9vh_1fr] max-md:grid-cols-[9vh_1fr]  max-md:grid-rows-[auto_1fr] mb-5 rounded-xl shadow-xl py-2 pl-2 max-md:py-4 max-md:px-4 bg-bgI w-90 lg:w-170 2xl:w-175 max-md:w-full h-30 lg:h-20 md:h-20 sm:h-20 max-md:min-h-0 hover:scale-105 trasition-all duration-150'>
                        <div className='py-2 px-1 lg:px-2 md:px-2 sm:px-2 lg:py-0 lg:pt-2  text-center   max-md:flex max-md:justify-start  pt-5 lg:pt-0 md:pt-0 sm:pt-0 '>
                            <Cpu  className='bg-iconbg  w-12 h-12 p-2 rounded-xl text-white'/> 
                            
                        </div>
                        
                        <div className="max-md:w-full">
                            <p className='font-medium w-50 max-md:w-full pt-1'>Equipamentos Modernos</p>
                            <span className='text-spangray text-1xl max-md:text-sm'>Cada paciente é único. Tratamos você com carinho, respeito e atenção aos detalhes.</span> 
                        </div>
                    </div>
                    <div className='grid grid-cols-[9vh_1fr] max-md:grid-cols-[9vh_1fr]  max-md:grid-rows-[auto_1fr] mb-5 rounded-xl shadow-xl py-2 pl-2 max-md:py-4 max-md:px-4 bg-bgI w-90 lg:w-170 2xl:w-175 max-md:w-full h-30 lg:h-20 md:h-20 sm:h-20 max-md:min-h-0 hover:scale-105 trasition-all duration-150'>
                        <div className='py-2 px-1 lg:px-2 md:px-2 sm:px-2 lg:py-0 lg:pt-2 text-center   max-md:flex max-md:justify-start  pt-5 lg:pt-0 md:pt-0 sm:pt-0 '>
                            <GraduationCap  className='bg-iconbg  w-12 h-12 p-2 rounded-xl text-white'/> 
                            
                        </div>
                        
                        <div className="max-md:w-full">
                            <p className='font-medium w-50 max-md:w-full pt-1'>Profissionais Especializados</p>
                            <span className='text-spangray text-1xl max-md:text-sm'>Equipe altamente qualificada com formação nas melhores instituições do país.</span> 
                        </div>
                    </div>
                    <div className='grid grid-cols-[9vh_1fr] max-md:grid-cols-[9vh_1fr]  max-md:grid-rows-[auto_1fr] mb-5 rounded-xl shadow-xl py-2 pl-2 max-md:py-4 max-md:px-4 bg-bgI w-90 lg:w-170 2xl:w-175 max-md:w-full h-30 lg:h-20 md:h-20 sm:h-20 max-md:min-h-0 hover:scale-105 trasition-all duration-150'>
                        <div className='py-2 px-1 lg:px-2 md:px-2 sm:px-2 lg:py-0 lg:pt-2  text-center   max-md:flex max-md:justify-start  pt-5 lg:pt-0 md:pt-0 sm:pt-0 '>
                            <BedDouble  className='bg-iconbg  w-12 h-12 p-2 rounded-xl text-white'/> 
                            
                        </div>
                        
                        <div className="max-md:w-full">
                            <p className='font-medium w-50 max-md:w-full pt-1'>Ambiente Confortável</p>
                            <span className='text-spangray text-1xl max-md:text-sm'>Estrutura acolhedora projetada para proporcionar tranquilidade e bem-estar.</span> 
                        </div>
                    </div>
                      <div className='grid grid-cols-[9vh_1fr] max-md:grid-cols-[9vh_1fr]  max-md:grid-rows-[auto_1fr] mb-5 rounded-xl shadow-xl py-2 pl-2 max-md:py-4 max-md:px-4 bg-bgI w-90 lg:w-170 2xl:w-175 max-md:w-full h-30 lg:h-20 md:h-20 sm:h-20 max-md:min-h-0 hover:scale-105 trasition-all duration-150'>
                        <div className='py-2 px-1 lg:px-2 md:px-2 sm:px-2 lg:py-0 lg:pt-2  text-center   max-md:flex max-md:justify-start pt-5 lg:pt-0 md:pt-0 sm:pt-0  '>
                            <CreditCard  className='bg-iconbg  w-12 h-12 p-2 rounded-xl text-white'/> 
                            
                        </div>
                        
                        <div className="max-md:w-full">
                            <p className='font-medium w-50 max-md:w-full pt-1'>Facilidade de Pagamento</p>
                            <span className='text-spangray text-1xl max-md:text-sm'>Diversas formas de pagamento e parcelamento para caber no seu orçamento.</span> 
                        </div>
                    </div>
                    
                    
               
                    

                   
                </aside>
        </section>


    )
}
export default Workon;