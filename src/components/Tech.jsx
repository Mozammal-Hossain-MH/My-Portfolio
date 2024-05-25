import React from "react";
import { technologies } from "../constants";
import Ball from "./canvas/Ball";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <div className={`flex flex-row flex-wrap justify-center gap-10`}>
      {technologies?.map((tech) => (
        <div key={tech.name} className={`h-28 w-28`}>
          <Ball icon={tech?.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
