import '../App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from './NavBar';
import AddItem from './AddItem';
import OnOrder from './OnOrder';
import Inventory from './Inventory';
import Home from './Home';
import inventory from '../db.json';
import React, { useEffect, useState } from 'react';

function App() {
  const {categories, items} = inventory
  const [inventoryItems, setInventoryItems] = useState([])

  useEffect(() =>{
    fetch('http://localhost:3003/items')
    .then(r => r.json())
    .then(items => setInventoryItems(items))
  },
  [])

  function handleAddNewItem(newItem) {
    setInventoryItems([
      ...inventoryItems,
      newItem
    ])
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/inventory' element={<Inventory items={inventoryItems} onNewItem={handleAddNewItem}/>}/>
        <Route path='/add-item' element={<AddItem onNewItem={handleAddNewItem}/>}/>
        <Route path='/on-order' element={<OnOrder />}/>
      </Routes>
    </>
  );
}

export default App;