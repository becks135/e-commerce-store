//Modules
import { getDatabase, ref, onValue, push, remove } from "firebase/database";
import { useEffect, useState } from "react";

//config
import firebase from "./firebase";

//styles
import "./App.css";

//Components
import PromotionBanner from "./Components/PromotionBanner";
import Nav from "./Components/Nav";
import Category from "./Components/Category";
import Header from "./Components/Header";

function App() {
  const [inventory, setInventory] = useState([]);
  // const [numOfItemsInCart, setNumOfItemsInCart] = useState(0);
  // const [filteredInventory, setFilteredInventory] = useState([]);

  function getInventoryFromDB(){
    const database = getDatabase(firebase);
    const dbRef = ref(database,"/story-inventory");
    onValue(dbRef,response=>setInventory(response.val()));
  }

  function getFilteredResults(categoryName){
    const filteredResult = inventory.filter(item=>item.category===categoryName);
    console.log(inventory);
    return filteredResult;
  }


  useEffect(() => {
    getInventoryFromDB();
    // setFilteredInventory(getFilteredResults("electronics"));
  }, []);

  return (
    <div className="App">
      <PromotionBanner announcement="Free shipping on orders over $35" />
      <Nav />
      <Header 
        imageSrc=""
        imageAlt=""
        buttonLabel="Shop Now"
      />



      {/* database has separate category for men and women's clothing.
          need to combine the two categories to get one array for clothing */}
      <Category name="Clothing" id="clothing" items={getFilteredResults("women's clothing").concat(getFilteredResults("men's clothing"))}/>
      <Category name="Jewellery" id="jewellery" items={getFilteredResults("jewelery")}/>
      <Category name="Electronics" id="electronics" items={getFilteredResults("electronics")} />
    </div>
  );
}

export default App;
