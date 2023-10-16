import React from 'react';

const HamburgerButton = () => {
  return (
    <button className="hamburger-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M21 12l-18 0 18 0zm-6 3l-12 0 12 0zm0-6l-12 0 12 0zm0-6l-12 0 12 0z" />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </button>
  );
};

export default HamburgerButton;
