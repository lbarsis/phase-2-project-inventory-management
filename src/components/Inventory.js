import React from "react";
import InventoryTable from "./InventoryTable";

function Inventory({ items, categories, onNewItem, onDeleteItem, onEditItem, searchedItems,
  onSortItems, formData, onChange, submitItem }) {

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
        formData={formData}
        onChange={onChange}
        submitItem={submitItem}
      />
    </div>
  )

}

export default Inventory;