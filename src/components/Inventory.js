import React from "react";
import InventoryTable from "./InventoryTable";

function Inventory({ items, categories, onNewItem, onDeleteItem, onEditItem, searchedItems, onSortItems }) {

  return (
    <div>
      <h1 className="header">Inventory Page</h1>
      <InventoryTable
        items={items}
        categories={categories}
        onDeleteItem={onDeleteItem}
        onNewItem={onNewItem}
        onEditItem={onEditItem}
        searchedItems={searchedItems}
        onSortItems={onSortItems}
      />
    </div>
  )

}

export default Inventory;