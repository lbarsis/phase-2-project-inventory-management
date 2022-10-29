import React from "react";

function InventoryItem({ item }) {
  const { id, category, name, vendor, description,
    status, flagAmount, onHand, uom, flagged } = item
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
        <button className="edit-button">✏️</button>
        <button className="edit-button">🗑️</button>
        {flagged ? "🚩" : null}
      </td>
    </tr>
  )

}

export default InventoryItem;