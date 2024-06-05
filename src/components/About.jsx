import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";
import ServiceCard from "./ServiceCard";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]`}
      >
        I am a passionate full stack React website developer with extensive
        experience in building dynamic and responsive web applications.
        Leveraging a robust stack of modern technologies, I specialize in
        creating seamless and user-friendly digital experiences. My technical
        expertise includes{" "}
        <span className={`font-bold`}>
          React JS, Node JS, MongoDB, Tailwindcss, Bootstrap, Firebase
        </span>{" "}
        etc.
      </motion.p>
      <div className={`mt-20 flex flex-wrap gap-10`}>
        {services?.map((service, i) => (
          <ServiceCard key={service.title} i={i} {...service} />
        ))}
      </div>
    </>
  );
};
export default SectionWrapper(About, "about");
