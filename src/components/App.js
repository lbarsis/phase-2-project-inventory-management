import '../App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from './NavBar';
import AddItem from './AddItem';
import OnOrder from './OnOrder';
import Inventory from './Inventory';
import Home from './Home';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/inventory' element={<Inventory />}/>
        <Route path='/add-item' element={<AddItem />}/>
        <Route path='/on-order' element={<OnOrder />}/>
      </Routes>
    </>
  );
}

export default App;