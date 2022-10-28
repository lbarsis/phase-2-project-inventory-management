import React from "react";
import InventoryTable from "./InventoryTable";

function Inventory({ items }) {
  return (
    <div>
      <h1 className="header">Inventory Page</h1>
      <InventoryTable items={items}/>
    </div>
  )

}

export default Inventory;