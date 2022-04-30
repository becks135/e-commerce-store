import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons"

function CartIcon(props){
    return (
      <button className="shopping-cart-button">
        <FontAwesomeIcon icon={faBagShopping} className="shopping-cart-icon" />
        <div className="shopping-cart-counter">{props.cartCount}</div>
      </button>
    );
}

export default CartIcon;