"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col `}
    >
      <div className="relative z-10 flex flex-col items-center justify-center ">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          My Favorite Tools
        </motion.h1>
        <motion.div variants={textVariant(1.2)} className="flex flex-row items-center justify-center">
          <img src="/ampersand.png" className=" h-[150px] w-[100px] sm:h-[150px] sm:w-[100px]"></img>
        </motion.div>
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Libraries
        </motion.h1>
      </div>

      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="relative w-full md:-mt-[220px] -mt-[40px]">
        <div className="absolute w-full h-[350px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <img
          src="/laptop-background.jpg"
          alt="cover"
          className="w-full sm:h-[500px] h-[300px] object-cover rounded-tl-[140px] z-10 relative"
        />
        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/CircleIcon.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain opacity-80 rounded-full"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
