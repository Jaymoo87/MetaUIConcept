"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    {" "}
    <div className="z-0 gradient-02" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About the this Site" textStyles="text-center" />
      <motion.p
        variants={fadeIn("up", "tween", 0, 2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] test-center text-secondary-white"
      >
        Welcome to my website! As a web developer, I'm always on the lookout for new and better tools and libraries to
        help me create awesome websites and web applications. I've tried out many different tools and frameworks, and
        I've narrowed down my favorites to a select few that I use on a regular basis. On this site, I'll be sharing my
        top picks for web development tools and libraries, along with my thoughts and opinions on why they're so great.
        Whether you're a beginner just starting out in web development or an experienced pro looking to improve your
        workflow, I hope you'll find some useful insights and recommendations here. So let's dive in and explore some of
        the best web development tools and libraries out there!
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 1.2, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      ></motion.img>
    </motion.div>
  </section>
);

export default About;
