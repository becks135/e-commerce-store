//Components
import Button from "./Button";

function Item(props){
    const imageUrl = props.imageUrl;
    const imageAlt = props.imageAlt;
    const title = props.title;
    const price = props.price;
    
    return(
        <div className="item">
            <div>
                <div className="item-image">
                    <img src={imageUrl} alt={imageAlt}/>
                </div>
                {/* //TODO-remove "ITEM" from title */}
                <p className="item-title">ITEM{title}</p>
                <p className="item-price">${price}</p>
            </div>
            {/* if inventory amount>0 then show add to cart button
                else show sold out button and disable */}
            <Button label="Add to Cart"/>
        </div>
    )
}

export default Item;