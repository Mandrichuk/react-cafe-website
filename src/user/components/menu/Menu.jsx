import React, {useRef, useEffect} from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import styles from "./menu.module.css";
import MenuItem from "./materials/MenuItem";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import AnimatedLine from "../../../animations/AnimatedLine";
import images from "../../../constants/index";
import { menuData } from "../../../constants/index";
import { ImSpoonKnife } from "react-icons/im";
import TabTitle from "../../../common/TabTitle";


export default function CreateMenu(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) mainControls.start("visible");
  }, [isInView, mainControls]);


  return (
    <>
      <TabTitle title={"Меню"} />
      <Header />
      <header id="top" className={`${styles.header} w-full`}>
        <div className={`${styles.headerSection} w-full`}>
          <div
            className={`${styles.headerTaglineContainer} w-[100%] h-[250px]`}
          >
            <div className="flex flex-row items-center">
              <div className={`${styles.menuText}`}>Меню</div>
              <ImSpoonKnife className="text-[2rem] mb-[14px] ml-[10px]" />
            </div>
            <div className={`${styles.menuTaglineText}`}>
              Починайте свій день з наших вишуканих кавових напоїв. Підкріпіться
              нашими неповторними бургерами. Завершіть свій візит коктейлем.
            </div>
          </div>
        </div>
      </header>
      <main className={`${styles.main}`}>
        <div className={`${styles.coverContainer}`}>
          <ul className={`${styles.accordion}`}>
            {MenuItems(menuData, props.cart, props.handleCartChange)}
          </ul>

          <section className={`${styles.sectionContainer}`}>
            <div className={`${styles.sectionDetails} text-black`}>
              <AnimatedLine />
              <div className={`titleText`}> Якість продуктів</div>
              <div className={`${styles.textContainer} ${styles.articleText}`}>
                На кожному етапі готування ми ретельно відбираємо найвищу якість
                продуктів, щоб створити для вас неповторні смакові враження.
              </div>
            </div>

            <div className={`${styles.imageContainer}`}>
              <img
                className={`${styles.productImage}`}
                src={images.unitedCoffeeBurger}
                alt="product-quality"
              />

              <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0},
                  visible: { opacity: 1},
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.3, delay: 0.3 }}
                className={`${styles.imageDetailsContainer} ${styles.iconFirst}`}
              >
                <img
                  className={`${styles.imageDetails} ${styles.imageDetailsFirst}`}
                  src={images.coffeeBeans}
                  alt="coffee-beans"
                />
              </motion.div>

              <motion.div
                ref={ref}
                variants={{
                  hidden: { opacity: 0},
                  visible: { opacity: 1},
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.3, delay: 0.5 }}
                className={`${styles.imageDetailsContainer} ${styles.iconSecond}`}
              >
                <img
                  className={`${styles.imageDetails} ${styles.imageDetailsSecond}`}
                  src={images.saladLeaves}
                  alt="salad-leaves"
                />
              </motion.div>


            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

const MenuItems = (data, cart, handleCartChange) => {
  const menuItems = data.map((item) => {
    return (
      <MenuItem
        key={item.id}
        cart={cart}
        handleCartChange={handleCartChange}
        {...item}
      />
    );
  });
  return menuItems;
};
