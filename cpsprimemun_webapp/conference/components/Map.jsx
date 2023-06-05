import React from 'react';
import styles, { layout } from '../../src/style'

const Map = () => {
  return (
     <section id="letter" className={`${layout.section} bg-white`}>
      <div className={`mr-[20px] ml-[20px] md:mr-[40px] md:ml-[40px] ${layout.sectionInfo} text-center items-center`}>
      <p className={`${styles.paragraph} mb-4 max-w-[312px] text-center`}>
              <span className="text-black text-[30px] text-center text-bold">
                Location / Venue
              </span>
            </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6558684344263!2d80.0539216754228!3d13.057563337265746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528a33919f0f87%3A0x7400b0725a4b877f!2sChennai%20Public%20School!5e0!3m2!1sen!2sin!4v1684307136855!5m2!1sen!2sin" width="100%" height="500" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

     </section>
  )
}
export default Map