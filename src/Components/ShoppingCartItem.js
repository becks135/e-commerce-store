//components
import Button from "./Button";

//Modules
import { getDatabase, ref, remove, get } from "firebase/database";

//config
import firebase from "../firebase";

function ShoppingCartItem(props){

    function removeItemFromCart(itemId){
        const database = getDatabase(firebase);
        const shoppingCartItemRef = ref(database, `/shopping-cart/${itemId}`);

        //search shopping cart for item
        get(shoppingCartItemRef)
            .then((snapshot) => {
                //remove item from shopping cart database
                remove(shoppingCartItemRef);
                console.log("item removed?")
            })
            .catch((err) =>
                //TODO: update error message
                console.log("something went wrong. please try again", err)
            );
    }

    function handleRemoveButton(){
        removeItemFromCart(props.item.id)
        //TODO: update inventory amount in inventory db
    }



    return(
        <div className="shopping-cart-item">
            <div className="cart-item-image">
                <img src={props.imgSrc} alt={props.imgAlt} />
            </div>
            <p>{props.title}</p>
            <div>
                {/* <label htmlFor="quantity">Qty:</label> 
                 <input 
                    type="number" 
                    name="quantity" 
                    id="quantity" 
                    value={props.quantity}
                    onChange={()=>{
                        console.log("changed!")
                    }} /> */}
                <p>Qty:{props.quantity}</p>
                <p>CA${props.price.toFixed(2)}</p>
                <Button label="Remove" handleFunction={handleRemoveButton}/>
            </div>
        </div>
    )
}

export default ShoppingCartItem;