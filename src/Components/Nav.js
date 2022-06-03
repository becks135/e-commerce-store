import { useState } from "react";
import CartIcon from "./CartIcon";

function Nav(props){
    const [showMenu, setShowMenu] = useState(false);
    
    const toggleMenu = () => {
        const newMenuStatus = !showMenu;
        setShowMenu(newMenuStatus);
    }

    const hideMenu = () => {
        setShowMenu(false);
    }

    return (
      <nav>
        <div className="outer-wrapper">
          <a href="#home">
            <h1>Sahara</h1>
          </a>
          <div 
            className={showMenu?"navigation-menu open-menu":"navigation-menu"}
          >
            <button 
              className={showMenu?"menu-button active":"menu-button"}
              aria-hidden="true" 
              onClick={toggleMenu}
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
            <ul>
              <li>
                <a
                  href="#clothing"
                  className="top-nav-links"
                  onClick={hideMenu}
                >
                  Clothing
                </a>
              </li>
              <li>
                <a
                  href="#jewellery"
                  className="top-nav-links"
                  onClick={hideMenu}
                >
                  Jewellery
                </a>
              </li>
              <li>
                <a
                  href="#electronics"
                  className="top-nav-links"
                  onClick={hideMenu}
                >
                  Electronics
                </a>
              </li>
            </ul>
          </div>

          <CartIcon cartCount={props.cartCount} />
        </div>
      </nav>
    );
}

export default Nav;