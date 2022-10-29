import React, { useState } from "react";
import AddItemForm from "./AddItemForm";
import InventoryItem from "./InventoryItem";

function InventoryTable({ items, onNewItem, categories, onDeleteItem, onEditItem, onSortItems }) {
  const [itemIndex, setItemIndex] = useState([0, 4])

  function handlePage(e) {
    if (e.target.textContent === 'Next Page') {
      if (itemIndex[1] >= items.length) {
        setItemIndex([0, 4])
      } else {
        setItemIndex(itemIndex => [itemIndex[0] + 5, itemIndex[1] + 5])
      }
    } else if (e.target.textContent === 'Previous Page') {
      if (itemIndex[0] <= 0) {
        setItemIndex([items.length - 5, items.length])
      } else {
        setItemIndex(itemIndex => [itemIndex[0] - 5, itemIndex[1] - 5])
      }
    }
  }

  const displayItems = items.filter(item => (items.indexOf(item) >= itemIndex[0]) && (items.indexOf(item) <= itemIndex[1]))
    .map(item => {
      return (
        <InventoryItem key={item.id} item={item} onDeleteItem={onDeleteItem} categories={categories} onEditItem={onEditItem} />
      )
    })

  return (
    <>
      {/* <AddItemForm onNewItem={onNewItem} categories={categories} /><br /> */}
      <table>
        <tbody>
          <tr>
            <th>
              <button className="add-item-button">➕</button>
            </th>
            <th className="table-header">
              Category
              <button className="edit-button" onClick={onSortItems}> ∇</button>
            </th>
            <th className="table-header">
              Name
              <button className="edit-button" onClick={onSortItems}> ∇</button>
            </th>
            <th className="table-header">
              Vendor
              <button className="edit-button" onClick={onSortItems}> ∇</button>
            </th>
            <th className="table-header">
              description
              <button className="edit-button" onClick={onSortItems}> ∇</button>
            </th>
            <th className="table-header">
              status
              <button className="edit-button" onClick={onSortItems}> ∇</button>
            </th>
            <th className="table-header">
              flagAmount
              <button className="edit-button" onClick={onSortItems}> ∇</button>
            </th>
            <th className="table-header">
              onHand
              <button className="edit-button" onClick={onSortItems}> ∇</button>
            </th>
            <th className="table-header">
              uom
              <button className="edit-button" onClick={onSortItems}> ∇</button>
            </th>
          </tr>
          {displayItems}
        </tbody>
      </table>
      <div id="page-select">
        <button className="button" id="previous-page" onClick={handlePage}>Previous Page</button>
        <button className="button" id="next-page" onClick={handlePage}>Next Page</button>
      </div>
    </>

  )

}

export default InventoryTable;