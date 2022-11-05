import React, { useState } from "react";

function InventoryItem({ item, onDeleteItem, onEditItem, categories }) {

  const { category, name, vendor, description,
    status, flagAmount, onHand, uom, flagged } = item

  const [edit, setEdit] = useState(false)
  const [editForm, setEditForm] = useState({
    category: category,
    name: name,
    vendor: vendor,
    description: description,
    status: status,
    flagAmount: flagAmount,
    onHand: onHand,
    uom: uom,
    flagged: flagged
  })

  function handleChange(e) {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    })
  }

  function deleteItem() {
    fetch(`http://localhost:3003/items/${item.id}`, {
      method: 'DELETE'
    })
      .then(r => r.json())
      .then(() => onDeleteItem(item))
  }

  function handleEdit() {
    setEdit(true)
  }

  function editItem() {
    const updatedFormItem = {
      category: editForm.category,
      name: editForm.name,
      vendor: editForm.vendor,
      description: editForm.description,
      status: editForm.status,
      flagAmount: parseInt(editForm.flagAmount),
      onHand: parseInt(editForm.onHand),
      uom: editForm.uom,
      flagged: parseInt(editForm.onHand) <= parseInt(editForm.flagAmount) ? true : false
    }

    fetch(`http://localhost:3003/items/${item.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedFormItem)
    })
      .then(r => r.json())
      .then(updatedItem => onEditItem(updatedItem))

    setEdit(false)
  }

  if (edit) {
    return (
      <tr>
        <td></td>
        <td className="table-data">
          <select type="text"
            id="category"
            name="category"
            value={editForm.category}
            onChange={handleChange}
          >
            {categories}
          </select>
        </td>
        <td className="table-data">
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            value={editForm.name}
            onChange={handleChange}
          />
        </td>
        <td className="table-data">
          <input
            className="form-input"
            type="text"
            id="vendor"
            name="vendor"
            value={editForm.vendor}
            onChange={handleChange}
          />
        </td>
        <td className="table-data">
          <input
            className="form-input"
            type="text"
            id="description"
            name="description"
            value={editForm.description}
            onChange={handleChange} />
        </td>
        <td className="table-data">
          <input
            className="form-input"
            type="text"
            id="status"
            name="status"
            value={editForm.status}
            onChange={handleChange}
          />
        </td>
        <td className="table-data">
          <input
            className="form-input"
            type="text"
            id="flagAmount"
            name="flagAmount"
            value={editForm.flagAmount}
            onChange={handleChange}
          />
        </td>
        <td className="table-data">
          <input
            className="form-input"
            type="text"
            id="onHand"
            name="onHand"
            value={editForm.onHand}
            onChange={handleChange}
          />
        </td>
        <td className="table-data">
          <input
            className="form-input"
            type="text"
            id="uom"
            name="uom"
            value={editForm.uom}
            onChange={handleChange}
          />
        </td>
        <td className="table-icons">
          <button className="button" onClick={editItem}>Save</button>
        </td>
      </tr>
    )
  } else {
    return (
      <tr>
        <td></td>
        <td className="table-data">{category}</td>
        <td className="table-data">{name}</td>
        <td className="table-data">{vendor}</td>
        <td className="table-data">{description}</td>
        <td className="table-data">{status}</td>
        <td className="table-data">{flagAmount}</td>
        <td className="table-data">{onHand}</td>
        <td className="table-data">{uom}</td>
        <td className="table-icons">
          <table>
            <tbody>
              <tr>
                <td><button className="edit-button" onClick={handleEdit} >✏️</button></td>
                <td>{flagged ? "🚩" : null}</td>
              </tr>
              <tr>
                <td><button className="edit-button" onClick={deleteItem}>🗑️</button></td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    )
  }

}

export default InventoryItem;