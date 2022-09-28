import React from 'react';
import styles from "../style";

const Articles = () => {
  return (
    <section id="articles" className={`flex md:flex-row flex-col ${styles.paddingY} mb-60`}>
    <div className={`flex-1 flex ${styles.flexCenter} xl:mt-0 mt-10 relative py-1`}>
    </div>
  <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
  <div className="flex flex-row justify-between items-center w-full">
    <h1 className="flex-1 font-Rubik font-medium ss:text-[62px] text-[42px] ss:leading-[100px] leading-[75px] text-dark">
        A few <br className="sm:block hidden"/>
      <span className="text-secondary"> Pet Articles</span> <br className="md:hidden"/>
      That might interest you
      😸
    </h1>
  </div>
    <p className={`${styles.paragraph} max-w-[470px] mt-5 pb-[5px] text-dark`}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
</section>
  )
}

export default Articles