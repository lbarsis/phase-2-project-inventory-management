import React, { useState } from "react";

function AddItemForm({ onNewItem, categories }) {
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

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
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
    }

    fetch('http://localhost:3003/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFormItem)
    })
      .then(r => r.json())
      .then(newItem => onNewItem(newItem))


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

  return (
    <form className="item-form" onSubmit={submitItem}>
      <label htmlFor="category">Category:</label><br />
      {formData.category === 'other' ? (
        <input
          className="form-input"
          type="text"
          id="newCategory"
          name="newCategory"
          value={formData.newCategory}
          onChange={handleChange}
        />
      ) : (
        <select className="form-input" type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          {categories}
          <option value='other'>Other</option>
        </select>
      )}
      <br />
      <label htmlFor="name">Name: </label><br />
      <input
        className="form-input"
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="vendor">Vendor:</label><br />
      <input
        className="form-input"
        type="text"
        id="vendor"
        name="vendor"
        value={formData.vendor}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="description">Description:</label> <br />
      <input
        className="form-input"
        type="text"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange} /> <br />
      <label htmlFor="status">Status:</label><br />
      <input
        className="form-input"
        type="text"
        id="status"
        name="status"
        value={formData.status}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="flagAmount">Flag Amount:</label> <br />
      <input
        className="form-input"
        type="text"
        id="flagAmount"
        name="flagAmount"
        value={formData.flagAmount}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="onHand">Quantity on Hand:</label> <br />
      <input
        className="form-input"
        type="text"
        id="onHand"
        name="onHand"
        value={formData.onHand}
        onChange={handleChange}
      />
      <br />
      <label htmlFor="uom">Unit of Measure:</label><br />
      <input
        className="form-input"
        type="text"
        id="uom"
        name="uom"
        value={formData.uom}
        onChange={handleChange}
      />
      <br />
      <input className="button" type="submit" />
    </form>
  )

}

export default AddItemForm;