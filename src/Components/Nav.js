import CartIcon from "./CartIcon";


function Nav(props){
    return(
        <nav>
            <a href="#home">Sahara</a>
            <ul>
                <li><a href="#clothing">Clothing</a></li>
                <li><a href="#jewellery">Jewellery</a></li>
                <li><a href="#electronics">Electronics</a></li>
            </ul>

            <CartIcon cartCount={props.cartCount}/>
        </nav>
    )
}

export default Nav;