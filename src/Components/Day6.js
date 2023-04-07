import React from "react";
import Entry from "./Entry";
import List from "./List";

function createEntry(items) {
  return (
    <Entry
      key={items.id}
      imgUrl={items.imgUrl}
      name={items.name}
      price={items.price}
    />
  );
}

function Day6() {
  return (
    <div>
      <h1 style={{ textAlign:"center"}}>
         Products
      </h1>
      <dl >{List.map(createEntry)}</dl>
    </div>
  );
}

export default Day6;