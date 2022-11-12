import '../App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from './NavBar';
import AddItem from './AddItem';
import OnOrder from './OnOrder';
import Inventory from './Inventory';
import Home from './Home';
import React, { useEffect, useState } from 'react';
import Categories from './Categories';

function App() {
  const [inventoryItems, setInventoryItems] = useState([])
  const [search, setSearch] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [categories, setCategories] = useState([])

  const [formData, setFormData] = useState({
    category: 'Bracket',
    newCategory: '',
    name: '',
    vendor: '',
    description: '',
    status: '',
    flagAmount: 0,
    onHand: 0,
    uom: '',
    flagged: false
  })

  useEffect(() => {
    fetch('http://localhost:3003/items')
      .then(r => r.json())
      .then(items => setInventoryItems(items))
  },
    [])

  useEffect(() => {
    fetch('http://localhost:3003/categories')
      .then(r => r.json())
      .then(categories => setCategories(categories))
  }, [])

  function handleNewCategory(newCategory) {
    const displayCategories = [...categories, newCategory]
    setCategories(displayCategories)
  }

  function deleteCategory(deletedCategory) {
    const displayCategories = categories.filter(category => category.id !== deletedCategory.id)
    setCategories(displayCategories)
    }

  function submitItem(e) {
    e.preventDefault()

    const newFormItem = {
      category: formData.category === 'other' ? formData.newCategory : formData.category,
      name: formData.name,
      vendor: formData.vendor,
      description: formData.description,
      status: formData.status,
      flagAmount: parseInt(formData.flagAmount),
      onHand: parseInt(formData.onHand),
      uom: formData.uom,
      flagged: parseInt(formData.onHand) <= parseInt(formData.flagAmount) ? true : false
    }

    if (formData.category === 'other') {
      fetch('http://localhost:3003/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category: formData.newCategory })
      })
      .then(r => r.json())
      .then(newCategory => handleNewCategory(newCategory))
    }

    fetch('http://localhost:3003/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFormItem)
    })
      .then(r => r.json())
      .then(newItem => handleAddNewItem(newItem))

    setFormData({
      category: 'Bracket',
      newCategory: '',
      name: '',
      vendor: '',
      description: '',
      status: '',
      flagAmount: 0,
      onHand: 0,
      uom: '',
      flagged: false
    })


  }

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

  const filteredItems = inventoryItems.filter(item => {
    if (categoryFilter === 'all') {
      return item
    } else {
      return item.category === categoryFilter
    }
  })

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const searchedItems = filteredItems.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))

  const displayCategories = categories.map(category => {
    return <option key={category.id} value={category.category}>{category.category}</option>
  })

  function sortItems(e) {
    const sortCategory = e.target.parentNode.textContent.toLowerCase().replace(' ∇', "")

    if (sortCategory === 'flag amount') {
      const displayItems = [...inventoryItems].sort((a, b) => a.flagAmount - b.flagAmount)
      setInventoryItems(displayItems)
    } else if (sortCategory === 'on hand') {
      const displayItems = [...inventoryItems].sort((a, b) => a.onHand - b.onHand)
      setInventoryItems(displayItems)
    } else {
      const displayItems = [...inventoryItems].sort((a, b) => {
        const sortA = a[sortCategory]
        const sortB = b[sortCategory]

        if (sortA < sortB) {
          return -1;
        }

        if (sortA > sortB) {
          return 1;
        }

        return 0;
      })
      setInventoryItems(displayItems)
    }
  }


  return (
    <>
      <NavBar
        search={search}
        setSearch={setSearch}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        categories={displayCategories}
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/inventory'
          element=
          {<Inventory
            items={searchedItems}
            onNewItem={handleAddNewItem}
            onEditItem={handleUpdateItem}
            categories={displayCategories}
            onDeleteItem={handleDeleteItem}
            onSortItems={sortItems}
            formData={formData}
            onChange={handleChange}
            submitItem={submitItem}
          />}
        />
        <Route path='/add-item' element={<AddItem
          categories={displayCategories}
          formData={formData}
          onChange={handleChange}
          submitItem={submitItem}
        />} />
        <Route path='/on-order' element={<OnOrder
          items={searchedItems}
          onNewItem={handleAddNewItem}
          onEditItem={handleUpdateItem}
          categories={displayCategories}
          onDeleteItem={handleDeleteItem}
          onSortItems={sortItems}
        />} />
        <Route path='/categories' element={<Categories categories={categories} onDeleteCategory={deleteCategory} onNewCategory={handleNewCategory}/>} />
      </Routes>

    </>
  );
}

export default App;