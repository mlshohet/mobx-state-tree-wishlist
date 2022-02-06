import React, { useState } from "react";
import { observer } from "mobx-react";
import { clone, getSnapshot, applySnapshot } from "mobx-state-tree";

import WishListItemEdit from "./WishListItemEdit";

const WishListItemView = ({ item, readonly }) => {
  const [editMode, setEditMode] = useState(false);
  const itemClone = clone(item);

  const onSaveEdit = () => {
    applySnapshot(item, getSnapshot(itemClone));
    setEditMode(false);
  };

  const onCancelEdit = () => {
    setEditMode(false);
  };

  return (
    <li className="item">
      {item.image && <img src={item.image} alt={item.name} />}
      <h3>{item.name}</h3>
      <span>{item.price}</span>
      {!readonly && (
        <span>
          <button onClick={() => setEditMode((prevState) => !prevState)}>
            Edit Mode
          </button>
          <button onClick={item.remove}>Remove Item</button>
        </span>
      )}
      {editMode && (
        <div>
          <WishListItemEdit item={itemClone} />
          <button onClick={onSaveEdit}>Save</button>
          <button onClick={onCancelEdit}>Cancel</button>
        </div>
      )}
    </li>
  );
};

export default observer(WishListItemView);
