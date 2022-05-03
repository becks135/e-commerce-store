//components
import Button from "./Button";

//Modules
import { getDatabase, ref, remove, get } from "firebase/database";
import { addItemsToInventory } from "../modules/manageInventory";

//config
import firebase from "../firebase";

function ShoppingCartItem(props){
    const item = props.item;

    function removeItemFromCart(itemId){
        const database = getDatabase(firebase);
        const shoppingCartItemRef = ref(database, `/shopping-cart/${itemId}`);

        //search shopping cart for item
        get(shoppingCartItemRef)
            .then((snapshot) => {
                //check number of items in shopping cart and add back to inventory
                const numberToAddToInventory = snapshot.val().numberInCart;
                addItemsToInventory(item.id,numberToAddToInventory);
                //remove item from shopping cart database
                remove(shoppingCartItemRef);
            })
            .catch((err) =>
                //TODO: update error message
                console.log("something went wrong. please try again", err)
            );
    }

    function handleRemoveButton(){
        removeItemFromCart(item.id)
        //TODO: update inventory amount in inventory db
    }



    return (
      <div className="shopping-cart-item">
        <div className="cart-item-image">
          <img src={item.image} alt={item.title} />
        </div>
        <p>{item.title}</p>
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
          <p>Qty:{item.numberInCart}</p>
          <p>CA${(item.price * item.numberInCart).toFixed(2)}</p>
          <Button label="Remove" handleFunction={handleRemoveButton} />
        </div>
      </div>
    );
}

export default ShoppingCartItem;