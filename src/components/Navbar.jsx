import { useState } from "react";
import styles from "../style";
import { close, petvio, menu, logo } from "../assets";
import { NavLinks} from "../constant";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
  <img src={logo} alt="logo" className="w-[18%] h-[18%] relative sm:w-[7%] sm:h-[7%]"/>
      <img src={petvio} alt="petvio" className="ss:w-[248px] ss:h-[64px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 text-dark">
        {NavLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-primary" : "text-dark"
            } ${index === NavLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onTouchStart={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain mr-1 ml-1"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {NavLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-secondary" : "text-dark"
                } ${index === NavLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title) }
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
        <button href={`#log`} className={`button2 py-1 px-2 font-Rubik font-medium sm:text-[12px] text-dark bg-primary rounded-[10px] outline-none sm:w-[90px] sm:h-[45px] ${styles} relative w-[40px] h-[25px] text-[8px] sm:ml-4
        `}>
      <a href="login.html">
        Log in 
      </a>
    </button> 
    </nav>
  );
};

export default Navbar;
