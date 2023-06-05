import React from 'react';
import styles from '../src/style';
import { Banner , Committee, Eb, EbTxt } from './components';
import { Navbar, Footer, Countdown} from '../src/components'; 





const App = () => {
  return (
    
    <div className='bg-primary w-full overflow-hidden'>
      
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>

          <Navbar />
        
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Banner />
        </div>
      </div>
   
      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Committee />
        <EbTxt />
        <Eb />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Footer />
        </div>
      </div>
    </div>
  )
}

export default App