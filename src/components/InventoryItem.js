import React, { useState } from "react";
import AddItemInlineForm from "./AddItemInlineForm";
import InlineEditRow from "./InlineEditRow";

function InventoryItem({ item, onDeleteItem, onEditItem, categories, formData, onChange, submitItem }) {

  const { category, name, vendor, description,
    status, flagAmount, onHand, uom, flagged } = item
  const [edit, setEdit] = useState(false)
  const [addItem, setAddItem] = useState(false)
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

  function handleAddItem() {
    setAddItem(addItem => !addItem)
  }

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

  if (addItem) {
    return <AddItemInlineForm formData={formData} categories={categories} submitItem={submitItem} onChange={onChange} handleAddItem={handleAddItem}/>
  } else if (edit) {
    return (
      <InlineEditRow editForm={editForm} item={item} onEditItem={onEditItem} setEdit={setEdit} handleChange={handleChange} categories={categories} />
    )
  } else {
    return (
      <tr>
        <td><button className="add-item-button" onClick={handleAddItem}>➕</button></td>
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