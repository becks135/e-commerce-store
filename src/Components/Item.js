//Components
import Button from "./Button";

function Item(props){
    const imageUrl = props.imageUrl;
    const imageAlt = props.imageAlt
    const title = props.title;
    const price = props.price;
    
    return(
        <div class="item">
            <div>
                <div class="item-image">
                    <img src={imageUrl} alt={imageAlt}/>
                </div>
                <p class="item-title">ITEM{title}</p>
                <p class="item-price">${price}</p>
            </div>
            <Button label="Add to Cart"/>
        </div>
    )
}

export default Item;