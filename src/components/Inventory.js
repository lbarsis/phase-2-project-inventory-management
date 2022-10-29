import React from "react";
import InventoryTable from "./InventoryTable";

function Inventory({ items, categories, onNewItem, onDeleteItem, onEditItem }) {

  return (
    <div>
      <h1 className="header">Inventory Page</h1>
      <InventoryTable items={items} categories={categories} onDeleteItem={onDeleteItem} onNewItem={onNewItem} onEditItem={onEditItem}/>
    </div>
  )

}

export default Inventory;