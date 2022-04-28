//Modules
import { getDatabase, ref, onValue, push, remove } from "firebase/database"; //grab functions from firebase database

//config
import firebase from "./firebase";

//styles
import "./App.css";

//Components
import Nav from "./Components/Nav";
import Category from "./Components/Category";
import { useEffect, useState } from "react";


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
      <Nav />
      <Category name="Clothing" id="clothing" items={getFilteredResults("men's clothing").concat(getFilteredResults("women's clothing"))}/>
      <Category name="Jewellery" id="jewellery" items={getFilteredResults("jewelery")}/>
      <Category name="Electronics" id="electronics" items={getFilteredResults("electronics")} />
    </div>
  );
}

export default App;
