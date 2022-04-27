//Components
import Button from "./Button";

function Item(props){
    const imageUrl = props.imageUrl;
    const imageAlt = props.imageAlt
    const title = props.title;
    const price = props.price;
    
    return(
        <>
            <img src={imageUrl} alt={imageAlt}/>
            <p>{title}</p>
            <p>${price}</p>
            <Button label="Add to Cart"/>
        </>
    )
}

export default Item;