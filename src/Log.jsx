import React from 'react';
import {bg} from "./assets";
import styles from './style';

const Log = () => {
  return (
    <section className='justify-center'>
      <img src={bg} className="" />
      <div className={`absolute log justify-center flex `}>
        <div className="flex flex-col justify-center items-center pb:24 md:py16">

        <h1 className="text-dark text-[40px] py-4">
          Log in
        </h1>
        <h2 className='text-secondary '>
          Username:
          <div className="pb-6">
          <input type="text" placeholder="  username" className="border-2 border-secondary rounded-[10px]" />
          </div>
          Password: 
          <div className="">
          <input type="password" placeholder="  Password" className="border-2 border-secondary rounded-[10px] "/>
          </div>
        </h2><br />
        <div className="bg-secondary justify-center w-[120px] rounded-[10px] flex">
          <button >
            <a href="index.html" >
            Log in
            </a>
          </button>
        </div>
        </div>

      </div>
    </section>
  )
}

export default Log