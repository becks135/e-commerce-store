import CartIcon from "./CartIcon";

function Nav(props){
    const menuButton = document.querySelector(".menu-button");
    const navMenu = document.querySelector(".navigation-menu");

    const toggleMenu = () => {
        menuButton.classList.toggle("active");
        navMenu.classList.toggle("open-menu");
    }

    const hideMenu = () => {
        menuButton.classList.remove("active");
        navMenu.classList.remove("open-menu");
    }

    return (
      <nav>
        <div className="outer-wrapper">
          <a href="#home">
            <h1>Sahara</h1>
          </a>
          <div className="navigation-menu">
            <button className="menu-button" aria-hidden="true" onClick={toggleMenu}>
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