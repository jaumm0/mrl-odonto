import { Heart, Cpu, GraduationCap, BedDouble, CreditCard    } from 'lucide-react';
import React from "react";
function Workon(){
    return(
        <section className="grid grid-rows-1 lg:grid-cols-[90vh_1fr]  pt-15  bg-bgServices ">
            <div className="">
                <p className="text-ptextSV font-medium  bg-bgptextSV  w-100 text-center rounded-xl lg:w-full md:w-full sm:w-full ">Por que nos escolher</p>
                <h2 className="text-2xl lg:text-5xl  font-bold text-h2 pt-5 lg:pt-10 md:pt-10 sm:pt-10 w-100 lg:w-full   text-center   ">Diferenciais que fazem a <br /> diferença</h2>
                <p className="text-spangray pt-5 w-100 lg:w-full md:w-full sm:w-full text-center px-5">Nossa missão é proporcionar a melhor experiência em cuidados  odontológicos, combinando excelência técnica com atendimento  acolhedor.</p>
                <ul className="grid grid-cols-3 w-100 lg:w-full md:w-full sm:w-full gap-5 px-10 lg:px-22 md:px-22 sm:px-22 pt-10 ">
                    <div><p className="text-2xl font-bold w-100 h-1 "  >15+</p> <br /> Anos de experiência</div>
                    <div><p className="text-2xl font-bold w-100 h-1"  >5k+</p> <br /> Pacientes satisfeitos</div>
                    <div><p className="text-2xl font-bold w-100 h-1"  >98%</p> <br />  Taxa de satisfação</div>

                </ul>
            </div>
            <aside className='w-100 lg:w-full px-2 mt-5 lg:px-0 md:px-0 sm:px-0 lg:mt-0 md:mt-0 sm:mt-0 pt-10 lg:pt-0 md:pt-0 sm:pt-0'>
                    <div className=' grid grid-cols-[9vh_1fr] mb-5 rounded-xl shadow-xl py-2 pl-2 bg-bgI w-90 lg:w-175 h-30 lg:h-20 md:h-20 sm:h-20 hover:scale-105 trasition-all duration-150'>
                        <div className=' py-2 px-1 text-center place-content-center '>
                            <Heart className='bg-iconbg w-12 h-12 p-2 rounded-xl text-white'/> 
                            
                        </div>
                        
                        <div>
                            <p className='font-medium w-50 pt-1'>Atendimento Humanizado</p>
                            <span className='text-spangray text-1xl'>Cada paciente é único. Tratamos você com carinho, respeito e atenção aos detalhes.</span> 
                        </div>
                    </div>
                    <div className='grid grid-cols-[9vh_1fr] mb-5 rounded-xl shadow-xl py-2 pl-2 bg-bgI w-90 lg:w-175 h-30 lg:h-20 md:h-20 sm:h-20 hover:scale-105 trasition-all duration-150'>
                        <div className='py-2 px-1 text-center place-content-center '>
                            <Cpu  className='bg-iconbg  w-12 h-12 p-2 rounded-xl text-white'/> 
                            
                        </div>
                        
                        <div>
                            <p className='font-medium w-50 pt-1'>Equipamentos Modernos</p>
                            <span className='text-spangray text-1xl'>Cada paciente é único. Tratamos você com carinho, respeito e atenção aos detalhes.</span> 
                        </div>
                    </div>
                    <div className='  grid grid-cols-[9vh_1fr] mb-5 rounded-xl shadow-xl py-2 pl-2 bg-bgI w-90 lg:w-175 h-30 lg:h-20 md:h-20 sm:h-20 hover:scale-105 trasition-all duration-150'>
                        <div className='py-2 px-1 text-center place-content-center '>
                            <GraduationCap  className='bg-iconbg  w-12 h-12 p-2 rounded-xl text-white'/> 
                            
                        </div>
                        
                        <div>
                            <p className='font-medium w-50 pt-1'>Profissionais Especializados</p>
                            <span className='text-spangray text-1xl'>Equipe altamente qualificada com formação nas melhores instituições do país.</span> 
                        </div>
                    </div>
                    <div className=' grid grid-cols-[9vh_1fr] mb-5 rounded-xl shadow-xl py-2 pl-2 bg-bgI w-90 lg:w-175 h-30 lg:h-20 md:h-20 sm:h-20 hover:scale-105 trasition-all duration-150'>
                        <div className=' py-2 px-1 text-center place-content-center '>
                            <BedDouble  className='bg-iconbg  w-12 h-12 p-2 rounded-xl text-white'/> 
                            
                        </div>
                        
                        <div>
                            <p className='font-medium w-50 pt-1'>Ambiente Confortável</p>
                            <span className='text-spangray text-1xl'>Estrutura acolhedora projetada para proporcionar tranquilidade e bem-estar.</span> 
                        </div>
                    </div>
                      <div className=' grid grid-cols-[9vh_1fr] mb-5 rounded-xl shadow-xl py-2 pl-2 bg-bgI w-90 lg:w-175 h-30 lg:h-20 md:h-20 sm:h-20 hover:scale-105 trasition-all duration-150 '>
                        <div className=' py-2 px-1 text-center place-content-center '>
                            <CreditCard  className='bg-iconbg  w-12 h-12 p-2 rounded-xl text-white'/> 
                            
                        </div>
                        
                        <div>
                            <p className='font-medium w-50 pt-1'>Facilidade de Pagamento</p>
                            <span className='text-spangray text-1xl'>Diversas formas de pagamento e parcelamento para caber no seu orçamento.</span> 
                        </div>
                    </div>
                    
                    
               
                    

                   
                </aside>
        </section>


    )
}
export default Workon;