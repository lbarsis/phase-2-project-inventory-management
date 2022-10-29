import React from "react";
import AddItemForm from "./AddItemForm";

function AddItem({ categories, onNewItem }) {
  return (
    <div>
      <h1 className="header">Add Item Page</h1>
      <AddItemForm categories={categories} onNewItem={onNewItem}/>
    </div>
  )

}

export default AddItem;