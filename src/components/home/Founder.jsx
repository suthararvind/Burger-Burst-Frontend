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
        <h3>ARVIND, ABHISHEK, MAYANK, HARSH</h3>

        <p>
          {/* Hey, Everyone I am Arvind, the founder of Burger Mart. */}
          At Burger Mart, we're not just serving burgers — we're delivering sizzling satisfaction in every bite,
          crafted with passion, fresh ingredients, and a love for flavor.
          <br />
          Our aim is to create the most tasty burger for the people of India.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
