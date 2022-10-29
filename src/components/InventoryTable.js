import React from "react";
import AddItemForm from "./AddItemForm";
import InventoryItem from "./InventoryItem";

function InventoryTable({ items, onNewItem, categories, onDeleteItem, onEditItem }) {

  const displayItems = items.map(item => {
    return (
      <InventoryItem key={item.id} item={item} onDeleteItem={onDeleteItem} categories={categories} onEditItem={onEditItem}/>
    )
  })

  return (
    <>
    <AddItemForm onNewItem={onNewItem} categories={categories}/><br/>
      <table>
        <tbody>
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
        </tbody>
      </table>
    </>

  )

}

export default InventoryTable;