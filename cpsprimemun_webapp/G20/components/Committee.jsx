import React from 'react';
import styles, { layout } from '../../src/style';
import { mainlogo } from '../../src/assets';


const Committee = () => {
  return (
     <section id="letter" className={`${layout.section} bg-white flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={` ${styles.flexStart} flex flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}>
        <div className="flex-[1] flex flex-col justify-start ">
     
        <div className={`flex flex-col p-6 rounded-[20px] mb-6 feature-card1 w-auto h-auto md:w-auto md:h-auto items-center` }>
        <div className={`w-[120px] h-[120px] rounded-full ${styles.flexCenter} bg-white `}>
            <img src={mainlogo} alt="icon" className='w-[90%] h-[90%] object-contain ' /> 
        </div> 
        <div className='flex-1 flex flex-col ml-3'> 
            <h4 className='font-formal font-semibold text-white text-[20px] leading -[23.4px] mb-1 text-center'>
            Global 20 Summit
            </h4>
            <p className="font-formal font-normal text-white text-[18px] leading-[24px]">
                 <span className='font-bold'>Agenda:</span> Analyzing  You are seeing an agenda, though there isnt one.

            </p>
        </div>    
        
    </div>
          
        </div>

        </div>
        
        
    

     </section>
  )
}
export default Committee