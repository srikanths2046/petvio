import React from 'react'
import { Vet, PetCare, Groom } from '../assets';
import styles from '../style';

const Services = () => (
  <section id="services" className={`flex xl:flex-row flex-col ${styles.paddingY} mb-64`}>
  <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
  <div className="flex flex-row justify-between items-center w-full">
    <h1 className="flex-1 font-Rubik font-medium ss:text-[62px] text-[42px] ss:leading-[100px] leading-[75px] text-dark ">
      We provide <br className="sm:block hidden"/>
      <span className="text-secondary"> Quality Services </span> <br className="md:hidden"/>
      for your beloved pets..
      🐱
    </h1>
  </div>
    <blockquote className={`${styles.paragraph} max-w-[470px] mt-5 pb-[65px] text-dark`}>
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    </blockquote>
  </div>

<div className={`flex md:flex-row flex-col py-11`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
    <div className="text-dark text-[24px] mt-3 relative py-9 leading-[69px] flex md:flex-row flex-col justify-between items-center w-full">
    <div className='md:hidden'>
      Tap on the images to know more...
    </div>
    <div className={`flip-card`}>
      <div className={`flip-card-inner`}>
        <div className={`flip-card`}>
          <img src={Vet} alt="articles" className='rounded-[30px]'/>
        </div >
      <div className={`flip-card-back rounded-[30px] py-[74px]`}>
        <a href={`#articles`} >
        Articles
        </a>
        </div>
      </div>
    </div>
    <div className={`flip-card md:mt-0 mt-60`}>
      <div className={`flip-card-inner`}>
        <div className={`flip-card`}>
          <img src={PetCare} alt="articles" className='rounded-[30px]'/>
        </div >
      <div className={`flip-card-back rounded-[30px] py-[74px]`}>
        <a href={`#rescue`}>
        🐾Rescue Center
        </a>
        </div>
      </div>
    </div>
    <div className={`flip-card md:mt-0 mt-60`}>
      <div className={`flip-card-inner`}>
        <div className={`flip-card`}>
          <img src={Groom} alt="articles" className='rounded-[30px]'/>
        </div >
      <div className={`flip-card-back rounded-[30px] py-[74px]`}>
        <a href={`#shop`}>
        🐾Pet Accessories
        </a>
        </div>
      </div>
    </div>
    </div>
    </div>
  </div>
    </section>
  );

export default Services