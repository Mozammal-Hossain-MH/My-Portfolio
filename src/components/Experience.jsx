import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { experiences } from "../constants";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className={`flex justify-center items-center w-full h-full`}>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className={`w-[60%] h-[60%] object-contain`}
          />
        </div>
      }
    >
      <div className={`text-white text-[24px] font-bold`}>
        <h3>{experience.title}</h3>
        <p
          className={`text-secondary text-[16px] font-semibold`}
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className={`mt-5 list-disc ml-5 space-y-2 `}>
        {experience?.points?.map((point, i) => (
          <li
            key={`experience-point-${i}`}
            className={`text-white-100 text-[14px] pl-1 tracking-wider`}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I Have Done So Far</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences?.map((experience, i) => (
            <ExperienceCard key={i} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
