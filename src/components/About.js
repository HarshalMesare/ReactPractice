import React, { useState } from 'react'
import Navbar from './generics/Navbar/Navbar'
import styles from './About.module.css';
export const About = () => {
  const [] = useState("Enable Dark Mode")
  return (
    <div className={styles.homePage}>
      {/* navbar start here */}
      <Navbar />
      {/* navbar ends here */}

      {/* About section-1 start here  */}
      <div className={styles.About}>
        <div>
          <h2 className={styles.AboutHeading}>ABOUT TODO</h2>
          <label className={styles.AboutLabel}>A to-do list comprising the things one wants to experience in life,
            also considered a bucket list or a vision board. These should inspire motivation and help assist in completing
            overachieving life goals. These tend to be longer and can exceed 80 items.</label>

          <p className={styles.AboutMore}>The most important or crucial tasks for a specific day of the week make up this list,
            which should be created first thing in the morning. Tasks on this list, which stands for tools, time, and trust,
            should be aligned with weekly and quarterly goals and help maintain momentum and motivation towards a significant goal.
            Generally, these lists are short and contain three to five items.</p>
        </div>
      </div>
      {/* about section-1  end here */}


    </div>
  )
}  
