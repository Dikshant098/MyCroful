// // Header.jsx

import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


//IoMdContact
import styles from './header.module.scss';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleContact = () => {
    setContactOpen(!isContactOpen);
  };

  return (
    <header className={styles.header}>
      <button className={styles.menuButton} onClick={toggleMenu}>
        <FaBars />
      </button>
      <div className={styles.title}>MyCroful</div>
      <div className={styles.addressBar}>
          <span className={styles.locationText}>Select Your Location</span>
      </div>
      
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search..." />
      </div>
      <button className={styles.contactButton} onClick={toggleContact}>
        <FaUser />
      </button>
      

      {isMenuOpen && (
        <div className={styles.menu}>
          {/* Add your menu items here */}
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      )}

      {isContactOpen && (
        <div className={styles.contact}>
          {/* Add your contact information here */}
        <ul>
          <li>List-1</li>
          <li>List-2</li>
          <li>List-3</li>
        </ul>
        </div>
      )}
    </header>
  );
};

export default Header;


// import React, { useState } from 'react';
// import styles from './header.module.scss';
// import HamburgerButton from '../svg/HamburgerButton';
// import ContactButton from '../svg/ContactButton';

// const Header = () => {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const [isContactListOpen, setContactListOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//     setContactListOpen(false); // Close the contact list when toggling the hamburger list
//   };

//   const toggleContactList = () => {
//     setContactListOpen(!isContactListOpen);
//     setDropdownOpen(false); // Close the hamburger list when toggling the contact list
//   };

//   return (
//     <nav className={styles.navBar}>
//       <div className={styles.leftSection}>
//         <button className={styles.button} onClick={toggleDropdown}>
//           <HamburgerButton />
//         </button>
//         {isDropdownOpen && (
//           <ul className={styles.dropdown}>
//             <li>Item 1</li>
//             <li>Item 2</li>
//           </ul>
//         )}
//       </div>
//       <div className={styles.addressBar} onClick={toggleContactList}>
//         <span className={styles.locationText}>Select Your Location</span>
//         {isContactListOpen && (
//           <ul className={styles.options}>
//             <li>Option 1</li>
//             <li>Option 2</li>
//           </ul>
//         )}
//       </div>
//       <div className={styles.searchBar}>
//         <input type="text" placeholder="Search..." />
//         <button className={styles.searchButton}>
//           <ContactButton />
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Header;
