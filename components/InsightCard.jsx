'use client';

import { motion } from 'framer-motion';

import { fadeIn, planetVariants } from '../utils/motion';

const InsightCard = ({ index, imgUrl, title, subtitle }) => (
  <motion.div variants={fadeIn('up', 'spring', index * 0.5, 1)} className="flex flex-col gap-4 md:flex-row sm:flex-row">
    <motion.div
      variants={fadeIn('right', 'spring', 0.7, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="lg:w-[450px] md:w-[50px] sm:w-[45px]  "
    >
      <img
        src={imgUrl}
        alt="vscode"
        className="lg:w-[450px] md:w-[270px] sm:w-[70px]  h-full w-full rounded-b-3xl rounded-tl-3xl"
      />
    </motion.div>
    <div className="flex items-center justify-between w-full">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white z-10 ">{title}</h4>
        <p className="mt-[16px] font-normal z-[2] lg:text-[20px] text-[14px] text-secondary-white">{subtitle}</p>
      </div>
      <motion.div
        variants={planetVariants('left', 2)}
        initial="hidden"
        whileInView="show"
        className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white"
      >
        <img src="arrow.svg" alt="arrow" className="w-[40%] h-[40%] object-contain " />
      </motion.div>
    </div>
  </motion.div>
);

export default InsightCard;
