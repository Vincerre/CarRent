import styles from './NavBar.module.scss';

import logo from '../../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className={styles.root + ' px-3 py-2'}>
    <div className={styles.box + ' d-flex justify-content-between'}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className={styles.links}>
        <a href="/login">
          {' '}
          <FontAwesomeIcon className={styles.icon} icon={faUser} />
          <span className={styles.text}>Login</span>
        </a>
        <a href="/register">
          <FontAwesomeIcon className={styles.icon} icon={faLock} />
          <span className={styles.text}>Register</span>
        </a>
        <a href="#">
          <FontAwesomeIcon className={styles.icon} icon={faBars} />
        </a>
      </div>
    </div>
  </div>
);

export default NavBar;
