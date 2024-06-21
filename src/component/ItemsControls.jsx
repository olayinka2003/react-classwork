import React from "react";

function ItemsControls({ add, remove }) {
  return (
    <div>
      <button onClick={() => add()}>Add Item</button>
      <button onClick={() => remove()}>Remove Item</button>

    </div>
  );
}

export default ItemsControls;
