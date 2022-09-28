import styles, {layout} from "../style";
import products from "../constant"
import Button from './Button';

const ProductCard = ({image, title, content, index}) => (
  <div className={`flex flex-col p-6 rounded-[20px] ${index !== products.length - 1 ? "mb-8" : "mb-0"} product-card object-contain`}>
    <div className={`w-full h-full rounded-[10px] ${styles.flexCenter} flex-col`}>
      <h3 className="font-Rubik font-semibold text-dark text-[28px] leading-[23px] bg-primary w-full py-6 px-6 rounded-[30px]">
        {title}
      </h3>
      <img src={image} alt="image" className="w-[100%] h-[100%] mt-4 object-contain"/>
    </div>
    <div className="mt-5">
      <p className="mt-5 font-Rubik font-light text-dark text-[18px] leading-[23px] bg-primary w-full py-6 px-6">
        {content}
      </p>
    </div>
  </div>
)

const Shop = () => {
  return (
    <section id="shop" className={`pb-60 ${layout.section}`}>
      <div className={layout.sectionInfo}>
        <h2 className={`text-dark ${styles.heading2} mb-11`}>
          Get your hands on some of our quality <br className="sm:block hidden"/> <span className="text-secondary text-[80px]">pet accessories</span>
        </h2>
      </div>

      <div className={`${layout.sectionImg} md:grid grid-cols-3 gap-4 hiddden flex-col `}>
        {products.map((product, index) => (
          <ProductCard key={product.id} {...product} index={index} />
        ))}
      </div>

      <Button styles="mt-12 sm:w-[300px] sm:h-[60px] ml-[30%]">
        Shop Now
      </Button>
    </section>
  )
}

export default Shop