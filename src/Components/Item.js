//Components
import Button from "./Button";

//Modules
import { getDatabase, ref, set, onValue, query, orderByChild, equalTo, update, push, remove, get } from "firebase/database";

//config
import firebase from "../firebase";

function Item(props){
    const item = props.item;
    

    function handleAddToCartClick(){
        //create object to add to shopping cart database
        const {id, image, title, price} = item;
        const itemAddedToCart = { id, image, title, price};
        itemAddedToCart.numberInCart = 1;

        const database = getDatabase(firebase);
        const shoppingCartRef = ref(database,`/shopping-cart`);
        const shoppingCartItemRef = ref(database,`/shopping-cart/${item.id}`);

        

        // shoppingCartRef.orderByChild("id").equalTo(16).on("value",snapshot=>console.log("item16",snapshot.val()));
        // const cartItems = query(
        //     shoppingCartRef,
        //     orderByChild("id"),
        //     equalTo(item.id)
        // );


        //search shopping cart
        get(shoppingCartItemRef)
        .then((snapshot) => {
            //if item already exists in the shopping cart, add one to the number of items
            if(snapshot.exists()){
                const numberInCart = snapshot.val().numberInCart;
                update(shoppingCartItemRef, { "numberInCart": numberInCart+1 });
            }
            //if item does not exist, add item object to the database
            else{
                console.log("item not in cart.adding now");
                set(shoppingCartItemRef, itemAddedToCart);
            }
        })
        .catch(err=>console.log("something went wrong. please try again", err));

        // update(shoppingCartItemRef, {"numberInCart": 10 });

        // // //?!need to set wait????
        // onValue(cartItems, (snapshot) => {
        //   if (snapshot.exists()) {
        //     const numberInCart = shoppingCartItemRef.numberInCart;
        //     console.log(`updating number of item ${item.id} in cart`)
        //     update(shoppingCartItemRef, { numberInCart: 10 });
        //   } else {
        //     console.log("adding item", item.id);
        //     set(shoppingCartItemRef, itemAddedToCart);
        //   }
        // });

        // onValue(shoppingCartRef,snapshot=>console.log("shopping cart",snapshot.val()));
        // console.log("cart-items",cartItems);


        
        // onValue(shoppingCartRef, (response) => console.log("cart",response.val()));
        

        //add to shopping cart database

        //**stretch goal - if item already in cart, update number of entries in cart */
    }
    
    return (
        <div className="item">
            <div>
            <div className="item-image">
                <img src={item.image} alt={item.title} />
            </div>
            {/* //TODO-remove "ITEM" from title */}
            <p className="item-title">{item.title}</p>
            <p className="item-price">${item.price.toFixed(2)}</p>
            </div>
            {/* if inventory amount>0 then show add to cart button
                    else show sold out button and disable */}
            <Button label="Add to Cart" handleFunction={handleAddToCartClick}/>
        </div>
    );
}

export default Item;