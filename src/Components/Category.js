import { useState } from "react";
import Item from "./Item";

function Category(props) {
    const name = props.name;
    const id = props.id;
    // const [filteredInventory, setFilteredInventory] = useState([]);
    // setFilteredInventory(props.items);
    const filteredInventory=props.items;

    //use props name to get items from database and url?
    //or pass filtered array as props?

    return (
        <div className="category" id={id}>
        <h2>{name}</h2>
        <div className="items-container">
            {
            filteredInventory.map(item=>{
                return(
                    <Item imageUrl={item.image} title={item.title} price={item.price.toFixed(2)}/>
                )
            })}
        </div>
        </div>
    );
}

export default Category;
