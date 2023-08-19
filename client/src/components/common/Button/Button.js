import React from 'react';
import styles from './Button.module.scss';
// import PropTypes from 'prop-types';

const Button = ({ children, href }) => {
  return (
    <a className={styles.button} href={href}>
      {children}
    </a>
  );
};

export default Button;
