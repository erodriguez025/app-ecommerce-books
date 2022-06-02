import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemList from './components/Shop/Item/ItemList/ItemList/ItemList';

function App() {
  return (
    <div className="App">
      <NavBar/>
      {/* <Item/> */}
      <ItemList/>
    </div>
  );
}

export default App;
