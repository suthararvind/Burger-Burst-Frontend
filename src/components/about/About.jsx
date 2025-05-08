import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/burger1.png";


const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About </h1>

        <article>
          <h4>Burger Mart</h4>
          <p  >
            We are from the team of Burger Mart. The place for most tasty burgers in India.
          </p>

          <p>
            Explore the various type of food and burgers. Click below to see the
            menu
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Arvind Abhishek Harsh Mayank</h3>
            </div>

            <p>
              Burger Mart is where cravings meet craftsmanship — 
              serving mouthwatering burgers made fresh, fast, and full of flavor to satisfy every appetite.
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
