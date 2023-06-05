import React from 'react';
import styles, { layout } from '../../src/style';
import { features1, features2, features3 } from "../../src/constants";

const FeatureCard = ({ link, icon, title, content, index}) => (
    <a href={link}>
    <div className={`flex flex-col p-6 rounded-[20px] ${index !== features1.length - 1 ? "mb-6" : "mb-0"} feature-card w-auto h-auto md:w-[335px] md:h-[240px] items-center` }>
        <div className={`w-[120px] h-[120px] rounded-full ${styles.flexCenter} bg-dimBlue `}>
            <img src={icon} alt="icon" className='w-[90%] h-[90%] object-contain ' /> 
        </div> 
        <div className='flex-1 flex flex-col ml-3'> 
            <h4 className='font-formal font-semibold text-white text-[18px] leading -[23.4px] mb-1 text-center'>
                {title}
            </h4>
            <p className="font-formal font-normal text-dimWhite text-[16px] leading-[24px]">
                 {content}
            </p>
        </div>    
        
    </div>
    </a>
       
);


       
       

const Committee = () => {
  return (
    <section id="committee">
    <div className={`flex md:flex-row flex-col ${styles.paddingY} items-center`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] grid-row-3 items-center`}>
            {features1.map((feature1, index) => 
            
                <FeatureCard key={feature1.id} {...feature1} index={index} />
            
            )

            }
        </div>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] grid-row-3 items-center`}>
            {features2.map((feature2, index) => 
       
            <FeatureCard key={feature2.id} {...feature2} index={index} />
           
            )

            }
        </div>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] grid-row-3 items-center`}>
            {features3.map((feature3, index) => 
            
            <FeatureCard key={feature3.id} {...feature3} index={index} />
            
            )

            }
        </div>
    </div>    
    </section>
  )
}

export default Committee