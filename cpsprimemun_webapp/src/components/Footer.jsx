import React from 'react';
import { mainlogo } from '../assets';
import { footerLinks, socialMedia } from '../constants';
import styles, { layout } from '../style';

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10 ">
      <div className={`flex p-6 rounded-[20px] feature-card2 items-center flex-col ` }> 
      
         
            <img src={mainlogo} alt="cpsprimemun" className='w-[200px] h-[102px] object-contain ' />
            <p className={`${styles.paragraph} mt-4 max-w-[312px] text-`}>
          <span className='text-gradient text-[20px]'>Inspire. Empower. Transform.</span>
        </p>
            </div>
           
          
        </div>

        <div className={`flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10`}>
          {footerLinks.map((footerlink) =>(
            <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
              <h4 className='font-formal font-medium text-[18px] leading-[27px] text-white'>
                {footerlink.title}
              </h4>
              <ul className='list-none mt-4'>
                {footerlink.links.map((link, index) => (
                  <li key={link.name} className={`font-formal font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"}`}>
                    {link.name}
                  </li>
                ))}
              </ul>
              
            </div>
          ))}
        </div>
        

      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-formal font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2023 CPS Prime MUN. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>

    </section>
  )
}

export default Footer
