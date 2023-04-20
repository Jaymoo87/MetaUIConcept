"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { planetVariants, staggerContainer } from "../utils/motion";
import { TypingText, TitleText, InsightCard } from "../components";
import { insights } from "../constants";

const VSCode = () => (
  <section className={`${styles.paddings} relative z-10 p-10`}>
    <motion.img
      src="/VSCodeLogo.png"
      variants={planetVariants(["up", "left"], 5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="h-[400px] w-[400px] z-0 absolute right-[420px] top-[600px] opacity-70"
    ></motion.img>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col `}
    >
      <TypingText title="| VSCode" textStyles="text-center" />
      <TitleText title="Visual Studio Code and IDE's" textStyles="text-center" />
      <div className="flex flex-col mt-[50px] gap-[30px]">
        {insights.map((insight, index) => (
          <InsightCard key={`insight-${index}`} {...insight} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default VSCode;
