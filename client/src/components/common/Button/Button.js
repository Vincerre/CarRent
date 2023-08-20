import React from 'react';
import styles from './Button.module.scss';
// import PropTypes from 'prop-types';

const Button = ({ children, href, onClick }) => {
  let Comp = 'a';
  if (onClick) {
    Comp = 'button';
  }
  return (
    <Comp className={styles.button} href={href} onClick={onClick}>
      {children}
    </Comp>
  );
};

export default Button;
