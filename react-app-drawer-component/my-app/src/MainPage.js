import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

export default function MainPage({ headings }) {
  const [pageHeader, setPageHeader] = useState('');

  const handlePageClick = (header) => {
    setPageHeader(header);
  };

  return (
    <div className="home-page">
      <AppDrawer headings={headings} onPageClick={handlePageClick} />
      <h2>{pageHeader}</h2>
    </div>
  );
}

function AppDrawer({ headings, onPageClick }) {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToggle = () => {
    setMenuToggle((prevState) => !prevState);
  };

  const handleMenuSelect = (text) => {
    setMenuToggle(false);
    onPageClick(text);
  };

  return (
    <div>
      <HamburgerMenu onMenuOpen={handleMenuToggle} />
      {menuToggle && <Overlay onMenuClose={handleMenuToggle} />}
      <FullMenu
        headings={headings}
        translateX={`translateX(${menuToggle ? '0' : '-283px'})`}
        onMenuClose={handleMenuSelect}
      />
    </div>
  );
}

function HamburgerMenu({ onMenuOpen }) {
  return (
    <div className="menu-icon" onClick={onMenuOpen}>
      <FaBars />
    </div>
  );
}

function Overlay({ onMenuClose }) {
  return <div className="overlay" onClick={onMenuClose}></div>;
}

function FullMenu({ headings, translateX, onMenuClose }) {
  const headingMenu = headings.map((heading) => (
    <p key={heading}>
      <span onClick={() => onMenuClose(heading)}>{heading}</span>
    </p>
  ));

  return (
    <div className="menu" style={{ transform: translateX }}>
      <h1>Menu</h1>
      {headingMenu}
    </div>
  );
}
