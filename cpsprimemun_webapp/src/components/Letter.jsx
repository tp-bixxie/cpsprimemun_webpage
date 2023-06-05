import React from 'react';
import styles, { layout } from '../style'

const Letter = () => {
  return (
     <section id="letter" className={`${layout.section} bg-white`}>
      <div className={`mr-[20px] ml-[20px] md:mr-[300px] md:ml-[300px] ${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}  text-black `}>
          Welcome to CPS Prime MUN
        </h2>
        <p className={`${styles.paragraph1} max-w[470px] mt-5 text-justify`}>
        <span className='font-bold'>Dear Delegates and Advisors,</span>
        </p>
              <p className={`${styles.paragraph1} max-w[470px] mt-5 text-justify`}>
              My name is Nitin Balaji, and as the Secretary-General of CPS Prime Model United Nations, I am thrilled to extend my warmest greetings to all of you. It is my great pleasure to announce that the second iteration of CPS Prime MUN will be held on July 7 and 8, 2023.
              </p>
              <p className={`${styles.paragraph1} max-w[470px] mt-5 text-justify`}>
              CPS Prime MUN is committed to providing a dynamic and immersive Model UN experience, where delegates are encouraged to address and negotiate solutions for the most pressing global issues of our time. We have brought together bright-minded students from around the world, fostering fast-paced, highly intellectual, and stimulating debates. This year, we are building upon our previous successes to offer an even more robust and premier Model UN experience.
              </p>
              
              <p className={`${styles.paragraph1} max-w[470px] mt-5 text-justify `}>
              Our motto for this decade is "Inspire. Empower. Transform." With this in mind, we will maintain successful elements of our platform, such as the Online Training Program and Director Office Hours, while introducing new initiatives like our Pre-Conference Training Workshops. We have refreshed all our documents, including the Rules of Procedure, position paper guidelines, and awards criteria, to ensure that every delegate has an enriching experience. From larger General Assembly discussions to advanced crisis committees, we strive to create an inclusive environment where everyone's voice can be heard and where delegates can learn from one another.
              </p>
              <p className={`${styles.paragraph1} max-w[470px] mt-5 text-justify`}> 
              Furthermore, we are excited to bridge the gap between the discussions held in committee and the outside world. Last year, we successfully hosted our inaugural Community Fair, which featured eight student initiatives and nonprofit organizations. As always, our priority is to provide an educational experience that is enriching for all delegates, regardless of their skill or experience level.
              </p>
              <p className={`${styles.paragraph1} max-w[470px] mt-5 text-justify`}> 
              To secure your seat for our conference, we kindly ask you to register as soon as possible. Our team is here to assist you with any questions or concerns you may have, so please don't hesitate to reach out.


              </p>
              <p className={`${styles.paragraph1} max-w[470px] mt-5 text-justify`}> 
              Thank you for your continued support of CPS Prime MUN. We are eagerly looking forward to meeting all of you in July and working together to make this conference a resounding success. Once again, welcome to CPS Prime MUN!
              </p>
              
              <p className={`${styles.paragraph1} max-w[470px] mt-5 text-justify font-semibold`}>
              Nitin Balaji
              </p>
              <p className={`${styles.paragraph1} max-w[470px] mt-5 text-justify font-semibold`}>
              Secretary-General
              </p>
              <p className={`${styles.paragraph1} max-w[470px] mt-5 text-justify font-semibold`}>
              CPS Prime Model United Nations
              </p>
      </div>

     </section>
  )
}
export default Letter