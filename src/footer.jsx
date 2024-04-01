// Footer.js
import React from 'react';
import useMyContext from './useMyContext';

const Footer = () => {
  const { value, setValue } = useMyContext();
  return (
    <div>
      <h3>Total Quantity: ${value.totalqt}</h3>
      <h3>Total Price: ${value.totalprice}</h3>
    </div>
  );
};

export default Footer;
