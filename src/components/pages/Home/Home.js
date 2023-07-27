import React from 'react'
import styles from './Home.module.css';
import Navbar from '../../generics/Navbar/Navbar';
import logoImage from '../../../assests/images/eagle.png'
import logoEagle from '../../../assests/images/tattoo.png'

export default function home() {

  return (
    <div className={styles.homePage}>

      {/* Navbar start here */}
      <Navbar />
      {/* Navbar end here */}

      {/* Company banner section start here */}
      <div className={styles.companyBanner}>
        <h2 className={styles.companyBannerHeading}>Company</h2>
        <label className={styles.companyBannerLabel}>We specialize in blablabla</label>
        <div className={styles.emailControlsContainer}>
          <input type='text' placeholder='Email Address' className={styles.emailControl} />
          <button className={styles.subscribeButton}>Subscribe</button>
        </div>
      </div>
      {/* Company banner section end here */}

      {/* Company ABout Section Start here */}
      <div className={styles.companyAbout}>
        <div>
          <h2 className={styles.companyAboutHeading}>ABOUT COMPANY PAGE</h2>
          <label className={styles.companyBannerLabel}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</label>

          <p className={styles.companyAboutLabel - 2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

          <button className={styles.TouchButton}>Get In Touch</button>
        </div>
        <div className={styles.logoDisney}>
          <img src={logoImage} alt='application-logo' className={styles.logoImage} />
        </div>
      </div>
      {/* Company ABout Section end here */}

      {/* company values section start here */}
      <div className={styles.TheValues}>
        <div>
          <h2 className={styles.TheValuesHeading}>OUR VALUES</h2>
          <label className={styles.TheValuesHeadingMission}>
            MISSION: Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </label>
          <p className={styles.TheValuesHeadingMission - 1}>VISION: Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className={styles.logoEagle}>
          <img src={logoEagle} alt='application-logo' className={styles.logoEagle} />
        </div>
      </div>
      {/* company values section end here  */}

      {/* services start here */}

      <div className={styles.Services}>
        <div>
          <h2 className={styles.ServicesTopicHeading}>SERVICES</h2>
          <label className={styles.ServicesTopicLine}>What we offer</label>

          <div className={styles.ServicesPower}>

            Helkllo
          </div>
        </div>
      </div>
      {/* services end here */}

      {/* portfolio start here */}

      <div className={styles.portfolio}>
        <div>
          <div className={styles.portfoliolabel}>PORTFOLIO
          </div>
          <label className={styles.portfoliolabelbrief}> What we have here </label>

        </div>
      </div>
      {/* portfolio end here */}
    </div>
  );

}
