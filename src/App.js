//styles
import './App.css';


//Components
import Button from './Components/Button';
import Item from './Components/Item';

//Modules


function App() {
  return (
    <div className="App">
      <Button label="Add to Cart" classList="main jsss" />
      <Button label="Checkout" classList="pop rock" />
      <Item imageUrl="https://www.nicolebeckles.dev/assets/NicoleBeckles.jpg" />

    </div>
  );
}

export default App;
