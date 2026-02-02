import { Heart, Cpu, GraduationCap, BedDouble, CreditCard    } from 'lucide-react';
import React from "react";
function Workon(){
    return(
        <section className="grid grid-cols-[90vh_1fr]  pt-25  bg-bgServices ">
            <div className="place-items-center">
                <p className="text-ptextSV font-medium  bg-bgptextSV ">Por que nos escolher</p>
                <h2 className="text-5xl font-bold text-h2 pt-10   ">Diferenciais que fazem a <br /> diferença</h2>
                <p className="text-spangray pt-5 pr-20">Nossa missão é proporcionar a melhor experiência em cuidados <br /> odontológicos, combinando excelência técnica com atendimento <br /> acolhedor.</p>
                <ul className="grid grid-cols-3 w-full px-22 pt-10 ">
                    <div><p className="text-2xl font-bold w-100 h-1 "  >15+</p> <br /> Anos de experiência</div>
                    <div><p className="text-2xl font-bold w-100 h-1"  >5k+</p> <br /> Pacientes satisfeitos</div>
                    <div><p className="text-2xl font-bold w-100 h-1"  >98%</p> <br />  Taxa de satisfação</div>

                </ul>
            </div>
            <aside>
                    <div className=' grid grid-cols-[9vh_1fr] mb-5 rounded-xl shadow-xl py-2 px-3 bg-bgI w-175 h-20 hover:scale-105 trasition-all duration-150'>
                        <div className=' py-2 px-1'>
                            <Heart className='bg-iconbg w-12 h-12 p-2 rounded-xl text-white'/> 
                            
                        </div>
                        
                        <div>
                            <p className='font-medium w-50 pt-1'>Atendimento Humanizado</p>
                            <span className='text-spangray text-1xl'>Cada paciente é único. Tratamos você com carinho, respeito e atenção aos detalhes.</span> 
                        </div>
                    </div>
                    <div className=' grid grid-cols-[9vh_1fr] mb-5 rounded-xl shadow-xl  py-2 px-3 bg-bgI w-175 h-20 hover:scale-105 trasition-all duration-150'>
                        <div className='py-2 px-1'>
                            <Cpu  className='bg-iconbg  w-12 h-12 p-2 rounded-xl text-white'/> 
                            
                        </div>
                        
                        <div>
                            <p className='font-medium w-50 pt-1'>Equipamentos Modernos</p>
                            <span className='text-spangray text-1xl'>Cada paciente é único. Tratamos você com carinho, respeito e atenção aos detalhes.</span> 
                        </div>
                    </div>
                    <div className=' grid grid-cols-[9vh_1fr] mb-5 rounded-xl shadow-xl  py-2 px-3 bg-bgI w-175 h-20 hover:scale-105 trasition-all duration-150'>
                        <div className=' py-2 px-1'>
                            <GraduationCap  className='bg-iconbg  w-12 h-12 p-2 rounded-xl text-white'/> 
                            
                        </div>
                        
                        <div>
                            <p className='font-medium w-50 pt-1'>Profissionais Especializados</p>
                            <span className='text-spangray text-1xl'>Equipe altamente qualificada com formação nas melhores instituições do país.</span> 
                        </div>
                    </div>
                    <div className=' grid grid-cols-[9vh_1fr] mb-5 rounded-xl shadow-xl  py-2 px-3 bg-bgI w-175 h-20 hover:scale-105 trasition-all duration-150 '>
                        <div className=' py-2 px-1'>
                            <BedDouble  className='bg-iconbg  w-12 h-12 p-2 rounded-xl text-white'/> 
                            
                        </div>
                        
                        <div>
                            <p className='font-medium w-50 pt-1'>Ambiente Confortável</p>
                            <span className='text-spangray text-1xl'>Estrutura acolhedora projetada para proporcionar tranquilidade e bem-estar.</span> 
                        </div>
                    </div>
                      <div className=' grid grid-cols-[9vh_1fr] mb-5 rounded-xl shadow-xl  py-2 px-3 bg-bgI w-175 h-20 hover:scale-105 trasition-all duration-150 '>
                        <div className=' py-2 px-1'>
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