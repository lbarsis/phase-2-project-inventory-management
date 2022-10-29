import React from "react";
import InventoryItem from "./InventoryItem";

function InventoryTable({ items }) {

  const displayItems = items.map(item => {
    return (
      <InventoryItem key={item.id} item={item} />
    )
  })

  return (
    <>
      <table>
        <tr>
          <th>
          <button className="add-item-button">➕</button>
          </th>
          <th className="table-header">Category</th>
          <th className="table-header">Name</th>
          <th className="table-header">Vendor</th>
          <th className="table-header">description</th>
          <th className="table-header">status</th>
          <th className="table-header">flagAmount</th>
          <th className="table-header">onHand</th>
          <th className="table-header">uom</th>
        </tr>
        {displayItems}
      </table>
    </>

  )

}

export default InventoryTable;