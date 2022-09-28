import React from 'react';
import styles from '../style';
import {Res} from "../assets";

const Rescue = () => {
  return (
    <section id="rescue" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 flex ${styles.flexCenter} xl:my-0 my-10 relative py-7`}>
    <img src={Res} alt="pets" className="w-[100%] h-[100%] relative z-[5] rounded-[30px]" />
    </div>
  <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
  <div className="flex flex-row justify-between items-center w-full">
    <h1 className="flex-1 font-Rubik font-medium ss:text-[62px] text-[42px] ss:leading-[100px] leading-[75px] text-dark top-1">
        A few lines <br className="sm:block hidden"/>
      <span className="text-secondary"> Rescue</span> <br className="md:hidden"/>
      what we do and who we are 🐶
    </h1>
  </div>
    <p className={`${styles.paragraph} max-w-[470px] mt-5 pb-[5px] text-dark`}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
</section>
  )
}

export default Rescue