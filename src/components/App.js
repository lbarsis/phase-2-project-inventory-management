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
  const { categories, items } = inventory
  const [inventoryItems, setInventoryItems] = useState([])

  useEffect(() => {
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

  function handleDeleteItem(deletedItem) {
    const displayItems = inventoryItems.filter(item => item.id !== deletedItem.id)
    setInventoryItems(displayItems)
  }

  function handleUpdateItem(updatedItem) {
    const displayItems = inventoryItems.map(item => item.id === updatedItem.id ? updatedItem : item)
    setInventoryItems(displayItems)
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/inventory' element={<Inventory
          items={inventoryItems}
          onNewItem={handleAddNewItem}
          onEditItem={handleUpdateItem}
          categories={categories}
          onDeleteItem={handleDeleteItem}
        />}
        />
        <Route path='/add-item' element={<AddItem onNewItem={handleAddNewItem} categories={categories} />} />
        <Route path='/on-order' element={<OnOrder />} />
      </Routes>
    </>
  );
}

export default App;