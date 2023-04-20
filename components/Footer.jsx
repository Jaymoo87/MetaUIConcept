'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, footerVariants } from '../utils/motion';
import { socials } from '../constants';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    intial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-wrap items-center justify-between gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">Code your way to Beauty</h4>
        <motion.div
          variants={fadeIn('down', 'spring', 0.4, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px] cursor-pointer "
        >
          <img src="/headset.svg" alt="headset" className="w-[24px] h-[24px] object-contain" />
          <span className="font-normal text-white text-[16px]">Develop It All</span>
        </motion.div>
      </div>
      <div className="flex flex-col">
        <div className=" h-[2px] bg-white opacity-10" />
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h4 className="font-extrabold text-[24px] text-white">Libraries are Fun</h4>
          <p className="font-normal text-white opacity-50 text-[14px]">
            Copyright 2022 - 2023 Justin Murrah. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                src={social.url}
                alt={social.name}
                key={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
