import React, { useEffect, useState } from 'react';
import styles, { layout } from '../style';

const Countdown = () => {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [secs, setSeconds] = useState(0)

    const deadline = "July, 08, 2023"

    const getTime = () =>{
        const time = Date.parse(deadline)-Date.now()
        setDays(Math.floor(time/(1000*60*60*24)))
        setHours(Math.floor(time/(1000*60*60)%24))
        setMinutes(Math.floor(time/(1000*60)%60))
        setSeconds(Math.floor(time/(1000)%60))
    }

    useEffect(() =>{
        const interval = setInterval(()=>getTime(), 1000)
        return () => clearInterval(interval)
    }, [])

  return (
    <section id="letter" className={`${layout.section} bg-white`}>
      <div className={`mr-[20px] ml-[20px] md:mr-[300px] md:ml-[300px] ${layout.sectionInfo} items-center`}>
      <h2 className={`${styles.heading2}  text-black text-center`}>
      Get Ready: The Countdown Starts Now!
        </h2>
        <div className='flex flex-row text-center items-center'>
        <div className={`flex p-6 rounded-[20px] feature-card1 items-center ` }>   
        <h2 className={`${styles.heading2} text-center ml-[10px]  mr-[20px] md:mr-[20px] md:ml-[20px] text-white`}>
          {days<10 ? "0"+days: days} <br className='sm:block hidden' />{" "}Day
        </h2>
        
        <h2 className={`${styles.heading2} text-center ml-[10px] mr-[10px] md:mr-[20px] md:ml-[20px] text-white`}>
          {hours<10 ? "0"+hours: hours} <br className='sm:block hidden' />{" "}Hour
        </h2>
        <h2 className={`${styles.heading2} text-center ml-[10px]  mr-[10px] md:mr-[20px] md:ml-[20px] text-white`}>
          {minutes<10 ? "0"+minutes: minutes} <br className='sm:block hidden' />{" "}Min
        </h2>
        <h2 className={`${styles.heading2}  text-center ml-[10px]  mr-[10px] md:mr-[20px] md:ml-[20px] text-white`}>
          {secs<10 ? "0"+secs: secs} <br className='sm:block hidden' />{" "} Sec
        </h2>
        </div>
        </div>
        </div>
        </section>
  )
}

export default Countdown