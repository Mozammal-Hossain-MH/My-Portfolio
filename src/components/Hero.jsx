import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import Computers from "./canvas/Computers";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[80px] max-w-7xl mx-auto flex flex-row item-start gap-5`}
      >
        <div className={`flex flex-col items-center mt-5`}>
          <div className={`w-5 h-5 rounded-full bg-[#915eff]`}></div>
          <div className={`w-1 sm:h-80 h-40 violet-gradient`}></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className={`text-[#915eff]`}>Mozammal</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 flex md:block gap-1`}
          >
            I am a full stack{" "}
            <div className={`flex`}>
              <span className="hidden md:block mr-2">react website</span>{" "}
              developer
            </div>
          </p>
        </div>
      </div>
      <Computers />
      <div
        className={`absolute bottom-4 w-full flex justify-center items-center`}
      >
        <a href="#about">
          <div
            className={`w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2`}
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className={`w-3 h-3 rounded-full bg-secondary mb-1`}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
