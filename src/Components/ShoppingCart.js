//components
import Button from "./Button";
import ShoppingCartItem from "./ShoppingCartItem";

//modules
import {
  getDatabase,
  ref,
  set,
  onValue,
  query,
  orderByChild,
  equalTo,
  update,
  push,
  remove,
  get,
} from "firebase/database";

//config
import firebase from "../firebase";


function getShoppingCartItems(){
     const database = getDatabase(firebase);

}

function ShoppingCart(){
    return (
        <div className="shopping-cart">
            <ul>
                <li>
                    <ShoppingCartItem />
                </li>
                <li>
                    <ShoppingCartItem />
                </li>
            </ul>
            <div>
                <p>Subtotal</p>
                <p>CA$XXXXX</p>
            </div>
            <Button label="proceed to checkout" />

        </div>
    );
}

export default ShoppingCart;