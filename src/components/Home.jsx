import styles from "../style";
import {pets1} from "../assets";

const Home = () =>  (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-Rubik font-medium ss:text-[62px] text-[42px] ss:leading-[100px] leading-[75px] text-dark ">
          The one <br className="sm:block hidden"/> stop
          <span className="text-secondary"> Destination </span> <br className="md:hidden"/>
          for all your pet needs
          😽
        </h1>
      </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 pb-[65px] text-dark mb-6`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
        <div className={`flex-1 flex ${styles.flexCenter} xl:my-0 my-10 relative py-7`}>
        <img src={pets1} alt="pets" className="w-[100%] h-[100%] relative z-[5]" />
  
        <div className="absolute z-[0] w-[40%] h-[55%] top-0 right-0 bg-secondary rounded-full" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bg-secondary bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] rounded-full bg-secondary right-20 bottom-20 " />
        </div>
    </section>
  );

export default Home