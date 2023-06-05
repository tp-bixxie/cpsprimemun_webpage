import React from 'react';
import styles from '../../src/style';



const Banner = () => {
  return (
    <section id='home' className={`flex flex-1 md:flex-row flex-col ${styles.paddingY} `}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[100px] text-center relative ${styles.flexCenter}`}>
            <div className='flex flex-row justify-between items-center w-full'>
                <h1 className='flex-1 font-formal font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
                    Economic and Social Council <br></br>(ECOSOC)
                    <br className='sm:block hidden' />{" "}
                </h1>
                {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
            </div>
            
            
        </div>
        

      
        
        {/*  */}
        

    </section>
  )
}

export default Banner