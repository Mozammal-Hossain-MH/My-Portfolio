import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import github from "../assets/github.png";
import { fadeIn } from "../utils/motion";
const ProjectCard = ({ index, project }) => {
  const { name, description, tags, image, source_code_link } = project;
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className={`bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full`}
      >
        <div className={`relative w-full h-[230px]`}>
          <img
            src={image}
            alt={name}
            className={`w-full h-full object-cover rounded-2xl`}
          />
          <div
            className={`absolute inset-0 flex justify-end m-3 card-img_hover`}
            title={
              project?.source_code_link &&
              "Click for live link and github repository"
            }
          >
            {project?.source_code_link && (
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className={`black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer`}
              >
                <img
                  src={github}
                  alt="github"
                  className={`w-1/2 h-1/2 object-contain`}
                />
              </div>
            )}
          </div>
        </div>
        <div className={`space-y-2 text-[14px]`}>
          <h3 className={`text-white font-bold text-24px`}>{name}</h3>
          <a
            href={project?.live_link}
            className={`hover:underline text-secondary mt-2`}
            target="_blank"
          >
            {project?.live_link}
          </a>
          <p className={` text-secondary`}>{description}</p>
          {project?.credential && (
            <div>
              <p>Email: {project?.credential?.email}</p>
              <p>Password: {project?.credential?.password}</p>
            </div>
          )}
        </div>
        <div className={`mt-4 flex flex-wrap gap-2`}>
          {tags?.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
