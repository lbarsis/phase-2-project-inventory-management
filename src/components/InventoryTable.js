import React, { useState } from "react";
import InventoryItem from "./InventoryItem";

function InventoryTable({ items, categories, onDeleteItem, onEditItem, onSortItems }) {
  const [itemIndex, setItemIndex] = useState([0, 4])

  function handlePage(e) {
    const nextPage = document.querySelector('#next-page')
    const previousPage = document.querySelector('#previous-page')

    if (e.target.textContent === 'Next Page') {
      setItemIndex(itemIndex => [itemIndex[0] + 5, itemIndex[1] + 5])
      previousPage.disabled = false
      if (itemIndex[1] + 5 >= items.length) {
        return nextPage.disabled = true
      }

    } else if (e.target.textContent === 'Previous Page') {
      setItemIndex(itemIndex => [itemIndex[0] - 5, itemIndex[1] - 5])
      nextPage.disabled = false
      if (itemIndex[0] - 5 <= 0) {
        return previousPage.disabled = true
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
      <table>
        <tbody>
          <tr>
            <th>
              <button className="add-item-button"></button>
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
              Description
              <button className="edit-button" onClick={onSortItems}> ∇</button>
            </th>
            <th className="table-header">
              Status
              <button className="edit-button" onClick={onSortItems}> ∇</button>
            </th>
            <th className="table-header">
              Flag Amount
              <button className="edit-button" onClick={onSortItems}> ∇</button>
            </th>
            <th className="table-header">
              On Hand
              <button className="edit-button" onClick={onSortItems}> ∇</button>
            </th>
            <th className="table-header">
              UOM
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