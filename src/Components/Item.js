//Components
import Button from "./Button";

//Modules
import { getDatabase, ref, set, update, get } from "firebase/database";

//config
import firebase from "../firebase";

function Item(props){
    const item = props.item;
    
    function addItemToShoppingCart(itemId){
        const database = getDatabase(firebase);
        const shoppingCartItemRef = ref(database, `/shopping-cart/${itemId}`);

        //search shopping cart for item
        get(shoppingCartItemRef)
        .then((snapshot) => {
            //if item already exists in the shopping cart, add one to the number of items
            if (snapshot.exists()) {
                const numberInCart = snapshot.val().numberInCart;
                update(shoppingCartItemRef, {"numberInCart": numberInCart + 1 });
            }
            //if item does not exist, add item object to the database
            else {
                console.log("item not in cart.adding now");
                //create object to add to shopping cart database
                //TODO: move this to it's own function
                const { id, image, title, price } = item;
                const itemToAddToCart = { id, image, title, price };
                itemToAddToCart.numberInCart = 1;
                set(shoppingCartItemRef, itemToAddToCart);
            }
        })
        .catch((err) =>
            console.log("something went wrong. please try again", err)
        );
    }

    function handleAddToCartClick(){
        addItemToShoppingCart(item.id);
        //TODO: update inventory amount in inventory db
    }
    
    return (
        <div className="item">
            <div>
            <div className="item-image">
                <img src={item.image} alt={item.title} />
            </div>
            <p className="item-title">{item.title}</p>
            <p className="item-price">${item.price.toFixed(2)}</p>
            </div>
            {/* //TODO:if inventory amount>0 then show add to cart button
                    else show sold out button and disable */}
            <Button label="Add to Cart" handleFunction={handleAddToCartClick}/>
        </div>
    );
}

export default Item;