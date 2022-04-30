import Button from "./Button";

function ShoppingCartItem(){
    return(
        <div className="shopping-cart-item">
            <div>
                <img src="" alt="" />
            </div>
            <p>Title</p>
            <p>Qty:1</p>
            <p>CA$xxx.xx</p>
            <Button label="Remove" />
        </div>
    )
}

export default ShoppingCartItem;