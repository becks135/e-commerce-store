//components
import Button from "./Button";
import ShoppingCartItem from "./ShoppingCartItem";

//modules
import {
    getDatabase,
    ref,
    onValue
} from "firebase/database";

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
            console.log(cartArray);
        })
    }

    function calculateSubtotal(cart){
        return cart.reduce((total, item) => {
          return total + item.price * item.numberInCart;
        },0);
    }


    //TODO: only get shopping cart items when shopping cart displayed
    useEffect(()=>{
        getShoppingCartItems();
        console.log({ shoppingCartItems });

        // calculateSubtotal();
    },[])

    

    return (
        <div className="shopping-cart">
            <div>
                <h2>Shopping Cart</h2>
                <Button label="X" handleFunction={toggleCart} />
            </div>
            {/* <p>shopping cart</p> */}
            <ul>
            {
                //if no items in shopping cart, display message indicating empty shopping cart
                shoppingCartItems.length === 0?
                    <li>No items in cart</li>
                : 
                    shoppingCartItems.map((item) => {
                        return (
                            <li key={item.id}>
                                <ShoppingCartItem item={item}/>
                            </li>
                        )
                    })
            }
            </ul>
            <div>
                <p>
                    Subtotal {calculateSubtotal(shoppingCartItems)}
                </p>
                <p>CA$XXXXX</p>
            </div>
            <Button label="Submit Order" />
        </div>
    );
}

export default ShoppingCart;