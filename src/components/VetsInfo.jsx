import React from 'react';
import Vets from "./Vets";
import styles from "../style";


const VetsInfo = () => (
        <section className={`flex flex-col ${styles.paddingY}`}>
          <div className="text-[100px] font-Rubik text-dark mb-9">
              Vets <span className='text-secondary'>Near you</span>
          </div>
        <div className="p-7 bg-secondary rounded-[20px] mb-64">
          <Vets />

        </div>
        <div>

        </div>
        </section>
  );

export default VetsInfo