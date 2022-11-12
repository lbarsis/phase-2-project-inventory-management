import React from "react";
import AddItemForm from "./AddItemForm";

function AddItem({ categories, onNewItem, formData, onChange, submitItem }) {
  return (
    <div>
      <h1 className="header">Add Item Page</h1>
      <AddItemForm
        categories={categories}
        onNewItem={onNewItem}
        formData={formData}
        onChange={onChange}
        submitItem={submitItem}
      />
    </div>
  )

}

export default AddItem;