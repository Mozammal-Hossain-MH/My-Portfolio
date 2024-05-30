import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import Earth from "./canvas/Earth";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className={`xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className={`flex-[0.75] bg-black-100 p-8 rounded-2xl`}
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <p className={`${styles.sectionHeadText}`}>Contact.</p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={`mt-12 flex flex-col gap-8`}
        >
          <label className={`flex flex-col`}>
            <span className={`text-white font-medium mb-4`}> Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium`}
            />
          </label>
          <label className={`flex flex-col`}>
            <span className={`text-white font-medium mb-4`}> Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium`}
            />
          </label>
          <label className={`flex flex-col`}>
            <span className={`text-white font-medium mb-4`}> Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Please enter your message"
              className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium`}
            />
          </label>
          <button
            className={`bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary `}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className={`xl:flex-1 xl:h-auto md:h-[550px] h-[350px]`}
      >
        <Earth />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
