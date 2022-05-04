//components
import Button from "./Button";
import ShoppingCartItem from "./ShoppingCartItem";


//modules
import {
    getDatabase,
    ref,
    onValue
} from "firebase/database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

//config
import firebase from "../firebase";
import { useEffect, useState } from "react";
import toggleCart from "../modules/toggleCart";


function ShoppingCart(){

    const [shoppingCartItems, setShoppingCartItems] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    function getShoppingCartItems() {
        const database = getDatabase(firebase);
        const shoppingCartDBRef = ref(database, "/shopping-cart");
        onValue(shoppingCartDBRef,response=>{
            //shopping cart db ref returns an object.
            //need to convert the object to an array
            const cartItems = response.val() 
            const cartArray = [];

            for(let key in cartItems){
                cartArray.push(cartItems[key]);
            }

            //set shoppingCartItems state variables to newly created array containing shopping cart items from database
            setShoppingCartItems(cartArray);
        })
    }

    function calculateSubtotal(cart){
        return cart.reduce((total, item) => {
          return total + item.price * item.numberInCart;
        },0);
    }


    useEffect(()=>{
        getShoppingCartItems();

    },[])

    useEffect(()=>{
        setSubtotal(calculateSubtotal(shoppingCartItems))
    },[shoppingCartItems]);

    

    return (
        <div className="shopping-cart">
            <div>
                <h2>Shopping Cart</h2>
                <button onClick={(toggleCart)}>
                    <FontAwesomeIcon icon={faCircleXmark} className="close-cart-icon" />
                </button>
            </div>
            <ul>
            {
                //if no items in shopping cart, display message indicating empty shopping cart
                shoppingCartItems.length === 0 ? 
                (<li>No items in cart</li>) : 
                (shoppingCartItems.map((item) => {
                    return (
                    <li key={item.id}>
                        <ShoppingCartItem item={item} />
                    </li>
                    )})
                )
            }
            </ul>
            <div className="subtotal">
                <p>Subtotal</p>
                <p>CA$ {subtotal.toFixed(2)}</p>
            </div>
            <Button label="Submit Order" />
        </div>
    );
}

export default ShoppingCart;