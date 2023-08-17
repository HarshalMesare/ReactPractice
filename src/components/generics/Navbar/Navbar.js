import React from 'react';
import styles from "../../generics/Navbar/Navbar.module.css";
import { Link, useNavigate } from 'react-router-dom';

import LogoImage from '../../../assests/images/logo.webp';

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  const handleSignOut = () => {
    localStorage.removeItem('USER_SESSION');
    navigate('/');
  };


  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={LogoImage} alt='application-logo' className={styles.logoImage} />
      </div>
      <div className={styles.navbarLinksContainer}>
        <Link to={'/home'} className={styles.navbarLink}>Home</Link>
        <Link to={'/todo'} className={styles.navbarLink}>Todo</Link>
        <Link to={'/about'} className={styles.navbarLink}>About</Link>
        <Link to={'/table'} className={styles.navbarLink}>Table</Link>
        <Link to={'/quotes'} className={styles.navbarLink}>Quotes</Link>
        <Link to={'/posts'} className={styles.navbarLink}>Posts</Link>

      </div>
      <ul>
        <li>
          <button className={styles.Hm}>HM</button>
          <label className={styles.HmName}>  Harshal Mesare</label>
          <button className={styles.signoutbutton} onClick={handleSignOut}>Sign-Out</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
