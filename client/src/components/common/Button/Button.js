import React from 'react';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

// import PropTypes from 'prop-types';

const Button = ({ children, to, onClick }) => {
  let Comp = Link;
  if (onClick) {
    Comp = 'button';
  }
  return (
    <Comp className={styles.button} to={to} onClick={onClick}>
      {children}
    </Comp>
  );
};

export default Button;
