'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, fadeIn, slideIn, planetVariants } from '../utils/motion';
import { TypingText, TitleText } from '../components';

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: 'false', amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex  flex-col `}
      >
        <TypingText title="| A little more about Git" textStyles="text-center" />
        <TitleText title={<>Collaborate with colleagues using Github around the globe </>} textStyles="text-center" />
        <motion.div variants={fadeIn('up', 'tween', 0.5, 1)} className=" relative mt-[68px] flex w-full h-[550px]">
          <motion.div
            variants={slideIn('left', 'spring', 0.3, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className=" z-10 mapcard absolute  lg:w-[150px] lg:h-[100px]  w-[175px] h-[125px]  rounded-2xl lg:left-[44%] lg:top-[8%] cursor-pointer "
          >
            <p className="absolute h-full font-bold flex justify-center px-3  text-[12px] pt-5 bg-[#201b1e59] bg-cover  text-center text-[#bdd9f4] ">
              Send and recieve repositories from all around the world
            </p>

            <img src="/github.png" alt="github background 1" className="w-full h-full rounded-2xl" />
          </motion.div>

          <motion.div
            variants={slideIn('left', 'spring', 0.3, 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className=" z-10 mapcard opacity-90  w-[175px] h-[125px] absolute top-[210px] left-[190px] lg:w-[150px] lg:h-[100px]  rounded-lg lg:top-[450px] lg:left-[13%] cursor-pointer "
          >
            <p className="absolute h-full font-bold flex justify-center px-3 text-[12px] pt-5 bg-[#201b1e59] text-center text-[#bdd9f4] ">
              Review your colleagues' code and give them feedback to help
            </p>

            <img src="/githubBackground.png" alt="github background 2" className="w-full h-full rounded-2xl" />
          </motion.div>

          <motion.div
            variants={slideIn('right', 'tween', 0.3, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className=" z-9 mapcard absolute opacity-90 top-[400px] w-[175px] h-[125px] lg:w-[150px] lg:h-[100px] rounded-lg lg:right-[27%]  lg:top-[62%] cursor-pointer "
          >
            <p className="absolute h-full font-bold flex justify-center text-[12px] px-3 pt-5 bg-[#201b1e59] bg-contain text-center text-[#bdd9f4] ">
              Make a Pull Request and offer solutions to identified problems
            </p>

            <img src="/githubBackground3.png" alt="github background 3" className="w-full h-full rounded-2xl" />
          </motion.div>

          <img src="/map.png" alt="map" className="object-contain w-full h-full lg:object-cover " />
          <div className="absolute top-[225px] left-[55px] lg:top-3 lg:left-[160px] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]  ">
            <img src="people-01.png" alt="people" className="w-full h-full " />
          </div>
          <div className="absolute right-[60px] top-[25px] lg:top-[410px] lg:right-[100px] w-[70px] h-[70px]  p-[6px] rounded-full bg-[#5d6680] ">
            <img src="people-02.png" alt="people" className="w-full h-full " />
          </div>
          <div className="absolute right-[60px] top-[425px] lg:top-[210px] lg:left-[46%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]  ">
            <img src="people-03.png" alt="people" className="w-full h-full " />
          </div>

          <div className=" absolute w-[130px] h-[130px] left-[90px] bottom-[115px] rotate-90 z-0 opacity-90 lg:bottom-[350px] lg:left-[250px] lg:rotate-45 lg:z-10  lg:w-[250px] lg:h-[200px] p-[6px]   ">
            <img src="/pcurveArrow.png" alt="Purple Arrow" className="w-full h-full lg:block" />
          </div>
          <div className="absolute -right-[55px] bottom-[175px] w-[230px] h-[230px] -rotate-[45deg] lg:right-[55%] lg:rotate-180 lg:bottom-[20%]  lg:w-[350px] lg:h-[200px]   ">
            <img src="/pinkcurveArrow.png" alt="Pink Arrow" className="w-full h-full lg:block" />
          </div>
          <div className="absolute w-[150px] h-[100px] left-[110px]  top-[115px] -rotate-[263deg] z-5  lg:left-[55%] lg:-rotate-[165deg] lg:top-[32%]  lg:w-[450px] lg:h-[175px]    ">
            <img src="/bcurveArrow.png" alt="Blue Arrow" className="block w-full h-full md:hidden lg:block" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
