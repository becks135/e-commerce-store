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
import { useEffect, useState } from "react";


function ShoppingCart(){

    const [shoppingCartItems, setShoppingCartItems] = useState([]);

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

    //TODO: only get shopping cart items when shopping cart displayed
    useEffect(()=>{
        getShoppingCartItems();
    },[])

    return (
        <div className="shopping-cart">
            <ul>
                {shoppingCartItems.map(item=>{
                    return (
                        <li key={item.id}>
                            <ShoppingCartItem
                                item = {item}
                                imgSrc={item.image}
                                imgAlt={item.title}
                                title={item.title}
                                quantity={item.numberInCart}
                                price={item.price * item.numberInCart}
                            />
                        </li>
                    );
                })}
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