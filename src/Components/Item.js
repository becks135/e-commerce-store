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
                <div>
                    <img src={imageUrl} alt={imageAlt}/>
                </div>
                <p>ITEM{title}</p>
                <p>${price}</p>
            </div>
            <Button label="Add to Cart"/>
        </div>
    )
}

export default Item;