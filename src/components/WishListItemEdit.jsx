import React from "react";
import { observer } from "mobx-react";

const WishListItemEdit = ({ item }) => {
  const onNameChangeHandler = (event) => {
    item.changeName(event.target.value);
  };

  const onPriceChangeHandler = (event) => {
    const price = parseFloat(event.target.value);
    if (!isNaN(price)) {
      item.changePrice(price);
    } else {
      item.changePrice(0);
    }
  };

  const onImageChangeHandler = (event) => {
    item.changeImage(event.target.value);
  };

  return (
    <div className="item-edit">
      Thing: <input value={item.name} onChange={onNameChangeHandler} />
      <br />
      Price: <input value={item.price} onChange={onPriceChangeHandler} />
      <br />
      Image: <input value={item.image} onChange={onImageChangeHandler} />
      <br />
    </div>
  );
};

export default observer(WishListItemEdit);
