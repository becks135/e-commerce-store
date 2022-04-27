//styles
import './App.css';


//Components
import Button from './Components/Button';
import Category from './Components/Category';


//Modules


function App() {
  return (
    <div className="App">
      <Category name="Clothing" />
      <Category name="Jewelry" />
      <Category name="Electronics" />
    </div>
  );
}

export default App;
