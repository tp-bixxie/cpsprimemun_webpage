import React from "react";
import styles, { layout } from "../../src/style";
import { mainlogo } from "../../src/assets";

const Content = () => {
  return (
    <section
      id="letter"
      className={`${layout.section} bg-white flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={` ${styles.flexStart} flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}
      >
        <div className="flex-[1] flex flex-col justify-start ">
          <div
            className={`flex p-6 rounded-[20px] feature-card3 items-center flex-col `}
          >
            <p className={`${styles.paragraph} mb-4 max-w-[312px] `}>
              <span className="text-white text-[30px]">
                Conference Schedule
              </span>
            </p>
            <div
              className={`flex p-6 rounded-[20px] feature-card2 items-center flex-col `}
            >
              <p className={`${styles.paragraph} max-w-[312px] text-justify `}>
                <span className="text-black text-[18px]">
                  <span>
                    CPS Prime MUN will take place from{" "}
                    <span className="text-bold">
                      July 08th through 09th, 2023.
                    </span>
                  </span>
                  <span className="mt-4">
                    CPS Prime MUN promises to provide a weekend full of engaging
                    activities and debates. Delegates will have the opportunity
                    to debate and relax at
                    the delegate dance. 
                  </span>{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={` ${styles.flexStart} flex-1 flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] items-center text-center`}
      >
        <div className="flex-[1] flex flex-col justify-start ">
          <div
            className={`flex p-6 rounded-[20px] feature-card3 items-center flex-col `}
          >
            <p className={`${styles.paragraph} mb-4 max-w-[312px] `}>
              <span className="text-white text-[30px]">Dress Code</span>
            </p>
            <div
              className={`flex p-6 rounded-[20px] feature-card2 items-center flex-col `}
            >
              <p className={`${styles.paragraph} max-w-[312px] text-justify `}>
                <span className="text-black text-[18px]">
                  <span>CPS Prime MUN's dress code for the event is,</span>
                  <span className="mt-4 text-bold">08th July, 2023</span>
                  <span className="mt-0">Traditional Attire</span>
                  <span className="mt-4 text-bold">09th July, 2023</span>
                  <span className="mt-0">Western Business Attire</span>{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};
export default Content;
