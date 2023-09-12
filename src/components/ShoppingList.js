import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [newItems, setNewItems] = useState(items)
  const [search,setSearch] = useState("")

  function handleSearch(event){
    const newSearch = event.target.value
    setSearch(newSearch)
  }
  const itemsToDisplay = newItems.filter((item) => 
    item.name.toLowerCase().includes(search.toLowerCase()))
  
  function handleFormSubmit(newItem){
    const updatedItems = [...newItems,newItem]
    console.log(updatedItems)
    setNewItems(updatedItems)
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleFormSubmit}/>
      <Filter  search= {search} onSearchChange={handleSearch} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
