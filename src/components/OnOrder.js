import React from "react";
import InventoryTable from "./InventoryTable";

function OnOrder({ items, categories, onNewItem, onDeleteItem, onEditItem, searchedItems, onSortItems }) {

  const onOrderItems = items.filter(item => item.flagged)

  return (
    <div>
      <h1 className="header">On Order Page</h1>
      <InventoryTable
        items={onOrderItems}
        categories={categories}
        onDeleteItem={onDeleteItem}
        onNewItem={onNewItem}
        onEditItem={onEditItem}
        searchedItems={searchedItems}
        onSortItems={onSortItems} />
    </div>
  )

}

export default OnOrder;