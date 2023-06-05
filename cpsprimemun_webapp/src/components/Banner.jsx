import React from 'react';
import styles from '../style';
import { discount, robot } from '../assets';


const Banner = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px]`}>
            <div className='flex flex-row justify-between items-center w-full'>
                <h1 className='flex-1 font-formal font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
                    CPS Prime 
                    <br className='sm:block hidden' />{" "}
                </h1>
                
            </div>
            <h1 className='font-formal font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full'>Model United Nations</h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-5 font-formal`}>
                <span className='text-gradient text-[30px]'>
                    Inspire. Empower. Transform.
                </span>
                <br className='sm:block hidden' />{" "}
                <br className='sm:block hidden' />{" "}
                MUN teaches participants research, speaking, debating and writing skills, in addition to critical thinking, teamwork and leadership abilities. Join PRIME MUN now!
            </p>
            <button className={`${styles.button} mt-6`}>
            Register Now
          </button>
            
        </div>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      
        
        {/*  */}
        

    </section>
  )
}

export default Banner