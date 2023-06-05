import React from "react";
import styles, { layout } from "../style";
import { mainlogo } from "../assets";

const Sponsor = () => {
  return (
    <section id="sponsor" className={`${layout.section}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px]`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-formal font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] item-center text-center">
            Our Sponsors
            <br className="sm:block hidden" />{" "}
          </h1>
        </div>
      </div>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px]`}
      >
        <div className="flex flex-col w-full items-center p-8">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full  text-center text-sm font-light dark:border-neutral-500">
                  <thead className="border-b font-medium dark:border-neutral-500 bg-primary">
                    <tr>
                      <th
                        scope="col"
                        className="border-r px-6 py-4 dark:border-neutral-500"
                      >
                        <div
                          className={`w-[120px] h-[120px] rounded-full ${styles.flexCenter} bg-white `}
                        >
                          <img
                            src={mainlogo}
                            alt="icon"
                            className="w-[90%] h-[90%] object-contain "
                          />
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-4">
                        <div
                          className={`w-[120px] h-[120px] rounded-full ${styles.flexCenter} bg-white `}
                        >
                          <img
                            src={mainlogo}
                            alt="icon"
                            className="w-[90%] h-[90%] object-contain "
                          />
                        </div>
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b dark:border-neutral-500 bg-primary">
                      <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        <div
                          className={`w-[120px] h-[120px] rounded-full ${styles.flexCenter} bg-white `}
                        >
                          <img
                            src={mainlogo}
                            alt="icon"
                            className="w-[90%] h-[90%] object-contain "
                          />
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div
                          className={`w-[120px] h-[120px] rounded-full ${styles.flexCenter} bg-white `}
                        >
                          <img
                            src={mainlogo}
                            alt="icon"
                            className="w-[90%] h-[90%] object-contain "
                          />
                        </div>{" "}
                      </td>
                    </tr>
                    <tr className=" border-b dark:border-neutral-500 bg-primary">
                      <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        <div
                          className={`w-[120px] h-[120px] rounded-full ${styles.flexCenter} bg-white `}
                        >
                          <img
                            src={mainlogo}
                            alt="icon"
                            className="w-[90%] h-[90%] object-contain "
                          />
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div
                          className={`w-[120px] h-[120px] rounded-full ${styles.flexCenter} bg-white `}
                        >
                          <img
                            src={mainlogo}
                            alt="icon"
                            className="w-[90%] h-[90%] object-contain "
                          />
                        </div>{" "}
                      </td>
                    </tr>
                    <tr className=" dark:border-neutral-500 bg-primary">
                      <td className="whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500">
                        <div
                          className={`w-[120px] h-[120px] rounded-full ${styles.flexCenter} bg-white `}
                        >
                          <img
                            src={mainlogo}
                            alt="icon"
                            className="w-[90%] h-[90%] object-contain "
                          />
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div
                          className={`w-[120px] h-[120px] rounded-full ${styles.flexCenter} bg-white `}
                        >
                          <img
                            src={mainlogo}
                            alt="icon"
                            className="w-[90%] h-[90%] object-contain "
                          />
                        </div>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
