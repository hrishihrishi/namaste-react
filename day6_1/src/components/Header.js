import { useState } from 'react';
import { LOGO_URL } from '../utils/constants';

const Header = () => {
  const [isLogged, setLogged] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} className="logo" alt="images" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button
            onClick={() => {
              if (isLogged) {
                setLogged(false);
              } else {
                setLogged(true);
              }
            }}
          >
            {isLogged ? 'logout' : 'login'}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
