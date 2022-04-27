//styles
import './App.css';


//Components
import Button from './Components/Button';
import Category from './Components/Category';
import Nav from './Components/Nav';


//Modules


function App() {
  return (
    <div className="App">
      <Nav />
      <Category name="Clothing" id="clothing"/>
      <Category name="Jewelry" id="jewelry"/>
      <Category name="Electronics" id="electronics"/>
    </div>
  );
}

export default App;
