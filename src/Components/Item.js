//Components
import Button from "./Button";

function Item(props){
    const item = props.item;
    

    // function handleAddToCartClick(e){
    //     //create object to add to shopping cart database
    //     const itemAddedToCart = {
    //         id:
    //     };
        
    //     //add to shopping cart database

    // }
    
    return (
      <div className="item">
        <div>
          <div className="item-image">
            <img src={item.image} alt={item.title} />
          </div>
          {/* //TODO-remove "ITEM" from title */}
          <p className="item-title">ITEM{item.title}</p>
          <p className="item-price">${item.price.toFixed(2)}</p>
        </div>
        {/* if inventory amount>0 then show add to cart button
                else show sold out button and disable */}
        <Button label="Add to Cart" />
      </div>
    );
}

export default Item;