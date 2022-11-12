import React from 'react';

function InlineEditRow({editForm, item, onEditItem, setEdit, handleChange, categories}) {

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
  );
}

export default InlineEditRow;
