"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn, slideIn } from "../utils/motion";
import { TypingText, TitleText } from "../components";
import { useState } from "react";

const World = () => {
  const [active, setActive] = useState(false);
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex  flex-col `}
      >
        <TypingText title="| A little more about Git" textStyles="text-center" />
        <TitleText title={<>Collaborate with colleagues using Github around the globe </>} textStyles="text-center" />
        <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="relative mt-[68px] flex w-full h-[550px]">
          <motion.div
            variants={slideIn("left", "spring", 0.3, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="z-10 mapcard absolute w-[150px] h-[100px] rounded-lg left-[44%] top-[8%] cursor-pointer "
          >
            <p className="absolute h-full font-bold flex justify-center text-[12px] pt-5 bg-[#201b1e59] bg-contain text-center text-[#bdd9f4] ">
              Send and recieve repositories from all around the world
            </p>

            <img src="/github.png" alt="github background 1" className="w-full h-full rounded-lg" />
          </motion.div>

          <motion.div
            variants={slideIn("right", "spring", 0.3, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className=" z-10 mapcard absolute w-[150px] h-[100px] rounded-lg bottom-[1px] left-[13%] cursor-pointer"
          >
            <p className="absolute h-full font-bold flex justify-center text-[12px] pt-5 bg-[#201b1e59] text-center text-[#bdd9f4] ">
              Review your colleagues' code and give them feedback to help
            </p>

            <img src="/githubBackground.png" alt="github background 2" className="w-full h-full rounded-lg" />
          </motion.div>

          <motion.div
            variants={slideIn("left", "spring", 0.3, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="z-9 mapcard absolute w-[150px] h-[100px] rounded-lg right-[27%]  top-[62%] cursor-pointer "
          >
            <p className="absolute h-full font-bold flex justify-center text-[12px] pt-5 bg-[#201b1e59] bg-contain text-center text-[#bdd9f4] ">
              Make a Pull Request and offer solutions to identified problems
            </p>

            <img src="/githubBackground3.png" alt="github background 3" className="w-full h-full rounded-lg" />
          </motion.div>

          <img src="/map.png" alt="map" className="object-cover w-full h-full " />
          <div className="absolute bottom-[12%] right-[100px] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img src="people-01.png" alt="people" className="w-full h-full" />
          </div>
          <div className="absolute top-7 left-[147px] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img src="people-02.png" alt="people" className="w-full h-full" />
          </div>
          <div className="absolute top-[210px] left-[46%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <img src="people-03.png" alt="people" className="w-full h-full" />
          </div>

          <div className="absolute left-[250px] rotate-45  w-[250px] h-[200px] p-[6px]  } ">
            <img src="/pcurveArrow.png" alt="Purple Arrow" className="w-full h-full" />
          </div>
          <div className="absolute right-[55%] rotate-180 bottom-[20%]  w-[350px] h-[200px]  } ">
            <img src="/pinkcurveArrow.png" alt="Pink Arrow" className="w-full h-full" />
          </div>
          <div className="absolute left-[55%] -rotate-[165deg] top-[32%]   w-[450px] h-[175px]  } ">
            <img src="/bcurveArrow.png" alt="Blue Arrow" className="w-full h-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
