import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/founder.webp";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={240} width={240} />
        <h3>ARVIND SUTHAR</h3>

        <p>
          Hey, Everyone I am Arvind Suthar, the founder of Burger Mart.
          <br />
          Our aim is to create the most tasty burger for the people of India.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
