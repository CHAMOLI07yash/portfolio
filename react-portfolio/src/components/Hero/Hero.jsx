import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Yash Chamoli</h1>
        <p className={styles.description}>
          I'm a full-stack developer learning  MERN stack.
          I have done more than 1000+ questions in Leetcode DSA. My rating is 1800.
          Reach out if you'd like to learn more!
        </p>
        <a href="mailto:yashchamoli1234@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <br></br>
        <a href="https://drive.google.com/file/d/1NfTGDVtPrm60BHyJ3JiK22_E-J48aFWI/view?usp=sharing" className={styles.contactBtn}>
          My Resume
        </a>
        <br></br>

        <a href="https://leetcode.com/u/giovanni_giorgio/" className={styles.contactBtn}>
          Leetcode Profile
        </a>
        <br></br>

        <a href="https://www.geeksforgeeks.org/user/yashchamoli/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user" className={styles.contactBtn}>
          GeekForGeeks Profile
        </a>
      </div>
      <img
        src={getImageUrl("hero/MERI.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};