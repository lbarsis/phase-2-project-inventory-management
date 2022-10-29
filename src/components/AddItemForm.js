import React, { useState } from "react";

function AddItemForm() {
  const [formData, setFormData] = useState({
    category: '',
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
  }

  return (
    <form className="item-form">
      <label htmlFor="category">Category:</label>
      <input className="form-input" type="text"
        id="category"
        name="category"
        value={formData.category}
        onChange={handleChange}
      />
      <label htmlFor="name">Name:</label>
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
      <input className="form-submit" type="submit" />
    </form>
  )

}

export default AddItemForm;