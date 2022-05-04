import { useEffect, useState } from "react";
import Item from "./Item";

function Category(props) {
    const name = props.name;
    const id = props.id;
    const itemsInCategory=props.items;
    const applyFilter = props.filter;
    let uniqueSubCategories=[];
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedSubCategory, setSelectedSubcategory] = useState("All");
    
    useEffect(()=>{
        setFilteredItems(props.items);
    },[props.items])

    function getSubCategories(){
        //get list of categories
        const subCategories = itemsInCategory.map((item) => item.category);

        //get list of unique subcategories
        uniqueSubCategories = [...new Set(subCategories)];
    }

    function handleFilterChange(e){
        const subCategory = e.target.value;
        const allItemsInCategory = [...props.items];

        if (subCategory === "all"){
            setFilteredItems(allItemsInCategory);
        } else {
            const itemsInSubCategory = allItemsInCategory.filter(item => {
                return item.category === subCategory
            })
            setFilteredItems(itemsInSubCategory);
        }
        setSelectedSubcategory(subCategory);
    }

    function CategoryFilter() {
        getSubCategories();
        return(
            <form>
                <label htmlFor="category-filter">Filter</label>
                <select
                    name="category-filter"
                    id="category-filter"
                    onChange={(e) => {
                        handleFilterChange(e);
                    }}
                    value={selectedSubCategory}
                >
                    <option value="all">All</option>            
                    {uniqueSubCategories.map((category) => {
                        return (<option key={category} value={category}>{category}</option>);
                    })}
                </select>
            </form>
        )    
    }

    return (
        <div className="category wrapper" id={id}>
            <h2>{name}</h2>
            {
                applyFilter? 
                    <CategoryFilter />
                :
                    null
            }
            <ul className="items-container">
                {
                filteredItems.map(item=>{
                    return (
                        <li key={item.id}>
                            <Item item={item} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Category;
