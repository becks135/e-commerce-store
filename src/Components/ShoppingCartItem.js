import Button from "./Button";

function ShoppingCartItem(props){
    return(
        <div className="shopping-cart-item">
            <div className="cart-item-image">
                <img src={props.imgSrc} alt={props.imgAlt} />
            </div>
            <p>{props.title}</p>
            <div>
                <label htmlFor="quantity">Qty:</label>
                <input type="number" name="quantity" id="quantity" value={props.quantity} />
                {/* <p>Qty:{props.quantity}</p> */}
                <p>CA${props.price.toFixed(2)}</p>
                <Button label="Remove" />
            </div>
        </div>
    )
}

export default ShoppingCartItem;