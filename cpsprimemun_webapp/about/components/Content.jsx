import React from 'react';
import styles, { layout } from '../../src/style';
import { mainlogo } from '../../src/assets';

const Content = () => {
  return (
     <section id="letter" className={`${layout.section} bg-white flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={` ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}>
        <div className="flex-[1] flex flex-col justify-start ">
      <div className={`flex p-6 rounded-[20px] feature-card3 items-center flex-col ` }> 
      <div className={`flex p-6 rounded-[20px] feature-card2 items-center flex-col ` }> 
      
         
            <img src={mainlogo} alt="cpsprimemun" className='w-[200px] h-[102px] object-contain ' />
            </div>
            <p className={`${styles.paragraph} mt-4 max-w-[312px] text-`}>
          <span className='text-gradient text-[20px]'>Inspire. Empower. Transform.</span>
        </p>
            </div>
           
          
        </div>

        </div>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center`}>

        <h2 className={`font-formal text-[30px] max-w[470px] mt-5 text-center items-center font-bold`}>
          About Us
        </h2>
     
        <p className={`${styles.paragraph1} max-w[470px] mt-5 text-justify`}>
        CPS Prime Model United Nations (CPS Prime MUN) is a prestigious international Model United Nations conference that aims to inspire, empower, and transform the next generation of global leaders. Founded on the principles of diplomacy, cooperation, and critical thinking, CPS Prime MUN provides a platform for students from around the world to engage in intellectual debates, enhance their understanding of international affairs, and develop vital skills for their future endeavors.
        </p>
        <p className={`${styles.paragraph1} max-w[470px] mt-5 text-justify`}>
        At CPS Prime MUN, we believe that the youth have the potential to shape a better world, and our conference serves as a catalyst for their growth and development. Through immersive simulations of United Nations committees, we foster an environment where delegates can engage in thought-provoking discussions, negotiate solutions, and draft resolutions to address complex global issues. By stepping into the shoes of diplomats, delegates gain valuable insights into the workings of international relations, diplomacy, and the art of compromise. 
        </p>
        <p className={`${styles.paragraph1} max-w[470px] mt-5 text-justify`}>
        We take pride in our commitment to excellence and professionalism. Our dedicated team of organizers works tirelessly to create a memorable and impactful experience for all participants. From meticulously crafting committees and topics to providing comprehensive delegate resources and training, we ensure that every aspect of CPS Prime MUN reflects our high standards of quality. 
        </p>
        <p className={`${styles.paragraph1} max-w[470px] mt-5 text-justify`}>
        In addition to our substantive committee sessions, CPS Prime MUN offers a range of enriching opportunities for delegates to engage with one another and the wider community. We organize interactive workshops, guest speaker sessions, and cultural events to foster cross-cultural understanding and promote collaboration. Through our Community Fair, we connect delegates with local student initiatives and nonprofit organizations, encouraging them to make a positive impact beyond the conference walls. 
        </p>
        <p className={`${styles.paragraph1} max-w[470px] mt-5 text-justify`}>
        CPS Prime MUN also places a strong emphasis on inclusivity and accessibility. We welcome delegates of all backgrounds, skill levels, and nationalities, as we believe that diversity is essential for productive and meaningful discussions. Our dedicated team ensures that the conference environment is safe, supportive, and conducive to learning, allowing each delegate to express their opinions freely and constructively. 
        </p>
        <p className={`${styles.paragraph1} max-w[470px] mt-5 text-justify`}>
        By participating in CPS Prime MUN, delegates gain more than just knowledge and skills; they develop lifelong friendships, broaden their horizons, and become part of a global network of passionate and driven individuals. We take pride in the positive impact that CPS Prime MUN has on the personal and intellectual growth of our delegates, equipping them with the tools they need to become leaders and change-makers in their respective fields. 
        </p>
        <p className={`${styles.paragraph1} max-w[470px] mt-5 text-justify`}>
        Join us at CPS Prime MUN, where inspiration meets action, and together, we can make a difference in the world.
        </p>
        <p className={`${styles.paragraph1} max-w[470px] mt-5 text-justify`}>
        Inspire. Empower. Transform. 
        </p>
            
        </div>  
        
    

     </section>
  )
}
export default Content