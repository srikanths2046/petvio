import React from 'react';
import styles, {layout} from "../style";

const Contact = () => {
  return (
    <section id="contact" className={`flex xl:flex-row flex-col ${styles.paddingY}`}>
      <div className={layout.sectionInfo}>
        <h2 className="text-dark sm:text-[80px] text-[40px]">Contact us</h2>
      </div>
      <div>
      <p className='sm:text-[40px] text-[18px] text-dark mt-9'>petvio.care.org
      Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin. Halvah croissant candy canes bonbon candy. Apple pie jelly beans topping carrot cake danish tart cake cheesecake. Muffin danish chocolate soufflé pastry icing bonbon oat cake. Powder cake jujubes oat cake. Lemon drops tootsie roll marshmallow halvah carrot cake.
      </p>
      </div>
    </section>
  )
}

export default Contact