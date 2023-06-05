import React from 'react';
import styles, { layout } from '../../src/style';
import { mainlogo } from '../../src/assets';

const EbTxt = () => {
  return (
     <section id="letter" className={`${layout.section} bg-white flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={` ${styles.flexStart} flex flex-1 flex-col  items-center text-center`}>
        <div className="flex-[1] flex flex-col justify-start ">
     
        <div className={`flex flex-col rounded-[20px] w-auto h-auto md:w-auto md:h-auto items-center` }>
        <div className='flex-1 flex flex-col ml-3'> 
            <h1 className='font-formal font-semibold text-black text-[30px] leading -[23.4px] text-center'>
               Executive Board Members
            </h1>
        </div>    
        
    </div>
          
        </div>

        </div>
        
        
    

     </section>
  )
}
export default EbTxt