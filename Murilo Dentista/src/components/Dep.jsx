import { Star } from 'lucide-react';
import React from "react";
function Dep(){
    return(
        <section className='grid grid-rows-[40vh_1fr] place-items-center bg-bgServices '>
            <div>
                <p className='place-self-center text-ptext font-medium bg-bgP '>Depoimentos</p>
                <h2 className='text-h1 font-bold text-5xl place-items-center justify-content'>O que nossos pacientes dizem</h2>
                <p className='place-self-center pt-3 text-pspan text-1xl'>A satisfação dos nossos pacientes é o nosso maior orgulho.</p>
            </div>
            <section>
                <ul className='grid grid-cols-2 gap-13 px-8   '>
                    <div className='w-170 h-55 shadow-xl px-7 py-10 rounded-xl bg-bgIcons   '>
                        <span className='flex'>
                        <Star className='text-test '/>
                        <Star className='text-test '/>
                        <Star className='text-test '/>
                        <Star className='text-test '/>
                        <Star/>
                        </span>
                        <p className='py-3 text-1xl font-medium '>"Melhor clínica que já frequentei! Equipe super atenciosa e o resultado do meu clareamento ficou incrível."</p>
                        <div className='grid grid-cols-[9vh_20vh] pt-2'>
                            <p className='w-13 h-13 text-white rounded-full justify-center  py-3 px-3   font-medium bg-gradient-to-tr from-[#2253bd] to-[#48b4cf]'>MS</p>
                            <h3 className='font-medium'>Maria Silva Paciente <span className='text-pspan'>há 5 anos</span> </h3>         
                        </div>  
                    </div>
                    <div className='w-170 h-55 shadow-xl px-7 py-10 rounded-xl bg-bgIcons   '>
                        <span className='flex'>
                        <Star className='text-test '/>
                        <Star className='text-test '/>
                        <Star className='text-test '/>
                        <Star className='text-test '/>
                        <Star/>
                        </span>
                        <p className='py-3 text-1xl font-medium '>"Melhor clínica que já frequentei! Equipe super atenciosa e o resultado do meu clareamento ficou incrível."</p>
                        <div className='grid grid-cols-[9vh_20vh] pt-2'>
                            <p className='w-13 h-13 text-white rounded-full justify-center  py-3 px-3   font-medium bg-gradient-to-tr from-[#2253bd] to-[#48b4cf]'>MS</p>
                            <h3 className='font-medium'>Maria Silva Paciente <span className='text-pspan'>há 5 anos</span> </h3>
                           
                        </div>
                        
                            
                    </div>
                    <div className='w-170 h-55 shadow-xl px-7 py-10 rounded-xl bg-bgIcons   '>
                        <span className='flex'>
                        <Star className='text-test '/>
                        <Star className='text-test '/>
                        <Star className='text-test '/>
                        <Star className='text-test '/>
                        <Star/>
                        </span>
                        <p className='py-3 text-1xl font-medium '>"Melhor clínica que já frequentei! Equipe super atenciosa e o resultado do meu clareamento ficou incrível."</p>
                        <div className='grid grid-cols-[9vh_20vh] pt-2'>
                            <p className='w-13 h-13 text-white rounded-full justify-center  py-3 px-3   font-medium bg-gradient-to-tr from-[#2253bd] to-[#48b4cf]'>MS</p>
                            <h3 className='font-medium'>Maria Silva Paciente <span className='text-pspan'>há 5 anos</span> </h3>
                           
                        </div>
                        
                            
                    </div>
                    <div className='w-170 h-55 shadow-xl px-7 py-10 rounded-xl bg-bgIcons   '>
                        <span className='flex'>
                        <Star className='text-test '/>
                        <Star className='text-test '/>
                        <Star className='text-test '/>
                        <Star className='text-test '/>
                        <Star/>
                        </span>
                        <p className='py-3 text-1xl font-medium '>"Melhor clínica que já frequentei! Equipe super atenciosa e o resultado do meu clareamento ficou incrível."</p>
                        <div className='grid grid-cols-[9vh_20vh] pt-2'>
                            <p className='w-13 h-13 text-white rounded-full justify-center  py-3 px-3   font-medium bg-gradient-to-tr from-[#2253bd] to-[#48b4cf]'>MS</p>
                            <h3 className='font-medium'>Maria Silva Paciente <span className='text-pspan'>há 5 anos</span> </h3>
                           
                        </div>
                        
                            
                    </div>
                    
                 
                    
                </ul>
            </section>
        </section>
    )
}
export default Dep;