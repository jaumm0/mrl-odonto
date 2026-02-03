import { Star } from 'lucide-react';
import React from "react";
function Dep(){
    return(
        <section className='grid grid-rows-[40vh_1fr] max-md:grid-rows-auto place-items-center bg-bgServices max-md:px-3 max-md:py-8'>
            <div className="max-md:mb-4">
                <p className='place-self-center text-ptext font-medium bg-bgP max-md:text-sm'>Depoimentos</p>
                <h2 className='text-h1 font-bold text-2xl text-center lg:text-5xl md:text-5xl sm:text-5xl place-items-center justify-content max-md:text-xl max-md:px-2'>O que nossos pacientes dizem</h2>
                <p className='place-self-center pt-3 text-pspan text-1xl text-center max-md:text-sm max-md:pt-2'>A satisfação dos nossos pacientes é o nosso maior orgulho.</p>
            </div>
            <section className="max-md:w-full">
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-13 px-3 lg:px-8 max-md:gap-4 max-md:px-0'>
                    <div className='w-90 lg:w-170 md:w-170 sm:w-170 max-md:w-full max-md:h-auto h-55 shadow-xl px-7 py-10 max-md:px-4 max-md:py-6 rounded-xl bg-bgIcons'>
                        <span className='flex'>
                        <Star className='text-test '/>
                        <Star className='text-test '/>
                        <Star className='text-test '/>
                        <Star className='text-test '/>
                        <Star/>
                        </span>
                        <p className='py-2 text-1xl font-medium max-md:text-sm'>"Melhor clínica que já frequentei! Equipe super atenciosa e o resultado do meu clareamento ficou incrível."</p>
                        <div className='grid grid-cols-[9vh_20vh] max-md:grid-cols-1 max-md:gap-2 pt-2'>
                            <p className='w-13 h-13 text-white rounded-full justify-center  py-3 px-3   font-medium bg-gradient-to-tr from-[#2253bd] to-[#48b4cf]'>MS</p>
                            <h3 className='font-medium max-md:text-sm'>Maria Silva Paciente <span className='text-pspan'>há 5 anos</span> </h3>         
                        </div>  
                    </div>
                    <div className='w-90 lg:w-170 md:w-170 sm:w-170 max-md:w-full max-md:h-auto h-55 shadow-xl px-7 py-10 max-md:px-4 max-md:py-6 rounded-xl bg-bgIcons'>
                        <span className='flex'>
                        <Star className='text-test '/>
                        <Star className='text-test '/>
                        <Star className='text-test '/>
                        <Star className='text-test '/>
                        <Star/>
                        </span>
                        <p className='py-2 text-1xl font-medium max-md:text-sm'>"Melhor clínica que já frequentei! Equipe super atenciosa e o resultado do meu clareamento ficou incrível."</p>
                        <div className='grid grid-cols-[9vh_20vh] max-md:grid-cols-1 max-md:gap-2 pt-2'>
                            <p className='w-13 h-13 text-white rounded-full justify-center  py-3 px-3   font-medium bg-gradient-to-tr from-[#2253bd] to-[#48b4cf]'>MS</p>
                            <h3 className='font-medium'>Maria Silva Paciente <span className='text-pspan'>há 5 anos</span> </h3>
                           
                        </div>
                        
                            
                    </div>
                    <div className='w-90 lg:w-170 md:w-170 sm:w-170 max-md:w-full max-md:h-auto h-55 shadow-xl px-7 py-10 max-md:px-4 max-md:py-6 rounded-xl bg-bgIcons'>
                        <span className='flex'>
                        <Star className='text-test '/>
                        <Star className='text-test '/>
                        <Star className='text-test '/>
                        <Star className='text-test '/>
                        <Star/>
                        </span>
                        <p className='py-2 text-1xl font-medium max-md:text-sm'>"Melhor clínica que já frequentei! Equipe super atenciosa e o resultado do meu clareamento ficou incrível."</p>
                        <div className='grid grid-cols-[9vh_20vh] max-md:grid-cols-1 max-md:gap-2 pt-2'>
                            <p className='w-13 h-13 text-white rounded-full justify-center  py-3 px-3   font-medium bg-gradient-to-tr from-[#2253bd] to-[#48b4cf]'>MS</p>
                            <h3 className='font-medium'>Maria Silva Paciente <span className='text-pspan'>há 5 anos</span> </h3>
                           
                        </div>
                        
                            
                    </div>
                    <div className='w-90 lg:w-170 md:w-170 sm:w-170 max-md:w-full max-md:h-auto h-55 shadow-xl px-7 py-10 max-md:px-4 max-md:py-6 rounded-xl bg-bgIcons2'>
                        <span className='flex'>
                        <Star className='text-test '/>
                        <Star className='text-test '/>
                        <Star className='text-test '/>
                        <Star className='text-test '/>
                        <Star/>
                        </span>
                        <p className='py-2 text-1xl font-medium max-md:text-sm'>"Melhor clínica que já frequentei! Equipe super atenciosa e o resultado do meu clareamento ficou incrível."</p>
                        <div className='grid grid-cols-[9vh_20vh] max-md:grid-cols-1 max-md:gap-2 pt-2'>
                            <p className='w-13 h-13 text-white rounded-full justify-center  py-3 px-3   font-medium bg-gradient-to-tr from-[#2253bd] to-[#48b4cf]'>MS</p>
                            <h3 className='font-medium max-md:text-sm'>Maria Silva Paciente <span className='text-pspan'>há 5 anos</span> </h3>
                           
                        </div>
                        
                            
                    </div>
                    
                 
                    
                </ul>
            </section>
        </section>
    )
}
export default Dep;