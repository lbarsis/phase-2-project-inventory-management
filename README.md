# Inventory Management Summary
This Inventory Management application is designed to allow users to create their own database of material that can be managed entirely through this system. 

## Description
There are four tabs in the navigational tool bar: Home, Inventory, Add Item, and On Order. Home offers brief directions on how the application can be used. Inventory is the bulk of the application that shows the user the full stock of items in inventory and items that need to be reordered. Add Item page is used to add new items to the database. The On Order page shows a consilidated list of all the items that are low in stock.

Additionally, there is also a search bar and a filter category bar. These two utilities can be used to search for a name or category of an item.

## Installation
1. **Copy the repository:** 
```
git@github.com:lbarsis/phase-2-project-inventory-management.git
```
2. **Open up the terminal and clone the repository into the desired directory using:**
```
git clone git@github.com:lbarsis/phase-1-project-joke-generator.git
```

3. **Install npm** 
```
npm install
```

4. **Start db.json Server** 
```
npm run server
```

5. **Run application using:** 
```
npm start
```

## Usage
1. **Navigate to the hompage**
Here will be a brief description on how the application can be used. It is recommended this page is reviewed prior to starting. The descriptions of each page here will give a summary of how they can be used together.

2. **Navigate to the Add Item page**
Going directly to the Inventory page will only show you a header because no items have been added at the start of the application. The Add Item page allows users to add items and get their inventory started. This page consists of a single form with eight input fields: Category, Name, Vendor, Description, Status, Flag Amount, On Hand, Unit of Measure.

### Category
The Category input is the set or group that an item can belong to. For example, if you were inventorying cars and wanted to group them by manufacturer, you could select Ford for all ford models or Toyota for all Toyota models. When the application is initially opened there will not be any categories to choose from. This is because the user is responsible for creating their own categories based on specific needs. 

To add a category to the list, simply select 'Other' from the drop down menu. A new field will appear that will allow an input to be typed. Type any string into this field and continue to the 'Name' field.

After all the fields are input and the item is submitted, this category will be available from the drop down menu.

### Name
The name of the item.

### Vendor
Vendor is the location or manufacturer that the item is purchased from.

### Description
Description is used to explain what the item is and how it is used in specific applications.

### Status
Status is used to denote the current state the item is in. Example: if an item is fully stocked, the user could write 'In Stock' in the field. If the item is low or out, 'Out of Stock' could be input, or 'On Order' if the item has already been ordered. 

### Flag Amount


    "category": "Bracket",
    "name": "c",
    "vendor": "b",
    "description": "a",
    "status": "c",
    "flagAmount": 1,
    "onHand": 3,
    "uom": "b",
    "flagged": false,
    "id": 1