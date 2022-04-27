import CartIcon from "./CartIcon";


function Nav(){
    return(
        <nav>
            <a href="#home">Sahara</a>
            <ul>
                <li><a href="#clothing">Clothing</a></li>
                <li><a href="#jewelry">Jewelry</a></li>
                <li><a href="#electronics">Electronics</a></li>
            </ul>

            <CartIcon />
        </nav>
    )
}

export default Nav;