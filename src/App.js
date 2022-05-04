//Modules
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

//config
import firebase from "./firebase";

//styles
import "./App.css";

//Components
import PromotionBanner from "./Components/PromotionBanner";
import Nav from "./Components/Nav";
import Category from "./Components/Category";
import Header from "./Components/Header";
import ShoppingCart from "./Components/ShoppingCart";

function App() {
  const [inventory, setInventory] = useState([]);
  const [numOfItemsInCart, setNumOfItemsInCart] = useState(0);

  function getInventoryFromDB(){
    const database = getDatabase(firebase);
    const dbRef = ref(database,"/story-inventory");
    onValue(dbRef,response=>setInventory(response.val()));
  }

  function getNumOfItemsInCart(){
    const database = getDatabase(firebase);
    const dbRef = ref(database, "/shopping-cart");
    onValue(dbRef,response => {
      const shoppingCart = response.val()
      let cartCounter=0
      for (let item in shoppingCart){
        const itemCount = shoppingCart[item].numberInCart;
        cartCounter += itemCount;
      }
      setNumOfItemsInCart(cartCounter);
    })
  }

  function getFilteredResults(categoryName){
    const filteredResult = inventory.filter(item=>item.category===categoryName);
    return filteredResult;
  }

  useEffect(() => {
    getInventoryFromDB();
    getNumOfItemsInCart();
  }, []);

  return (
    <div className="App">
      <PromotionBanner announcement="Free shipping on orders over $35" />
      <Nav cartCount={numOfItemsInCart} />
      <ShoppingCart />
      <Header headerText="New Arrivals Just Dropped" buttonLabel="Shop Now" />
      <div id="top"></div>
      {/* database has separate category for men and women's clothing.
          need to combine the two categories to get one array for clothing */}
      <Category
        name="Clothing"
        id="clothing"
        filter={true}
        items={getFilteredResults("women's clothing").concat(
          getFilteredResults("men's clothing")
        )}
      />

      <Category
        name="Jewellery"
        id="jewellery"
        filter={false}
        items={getFilteredResults("jewelery")}
      />
      <Category
        name="Electronics"
        id="electronics"
        filter={false}
        items={getFilteredResults("electronics")}
      />

      <footer>
        <p>
          Created by{" "}
          <a
            href="https://www.nicolebeckles.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nicole Beckles
          </a>{" "}
          at{" "}
          <a
            href="https://junocollege.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Juno College
          </a>
        </p>
        <p>
          API data source:
          <a
            href="https://fakestoreapi.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            fakeStoreAPI.com
          </a>
        </p>
      </footer>

      <a href="#top" className="back-to-top">
        <FontAwesomeIcon icon={faAngleUp} className="close-cart-icon" />
      </a>
    </div>
  );
}

export default App;
