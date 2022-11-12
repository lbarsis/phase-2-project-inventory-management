import React from "react";

function Home() {
  return (
    <div>
      <h1 className="header">Home Page</h1>
      <div className="instructions-container">
        <h2 className="subheader">Instructions: </h2>
        <p>This application was designed to manage custom inventory items.
          You are able to add, modify, and delete invnetory items that are specific to your business.</p>
        <h2 className="subheader">Adding New Items</h2>
        <p>Navigate to the Add Item page and fillout the form for a new item. New categories can be created by selecting the
          'Other' option which will prompt an new category to be input. The new category will be added to the dropdown options
          for future new items.</p>
        <p>Name, Vendor, Description, Status, and Unit of measure can all be added in any format. The Flag amount is the minimnum allowable
           quantity for inventory. When the On Hand amount drops to or below that number, the item will be flagged on the inventory page.
        </p>
        <h2 className="subheader">Checking Inventory</h2>
        <p>To check the current status of inventory items, navigate to the Inventory page. Here a table will be displayed that shows all the information for
           each item. The inventory can be updated in real time by selecting the pencil icon on the far right of the table. Any field can be modified at any time.
           If the On hand quantity drops below the flagged amount, a flag will appear in the icon section inline with the item that was updated.
        </p>
        <h2 className="subheader">Order List</h2>
        <p>Any time an item is flagged for low stock, it is added to the On Order Page. The On Order page displays all the items that need to be restocked. 
          As the quantity is updated, the items will be removed from the On Order table.
        </p>
      </div>
    </div>
  )
}

export default Home;