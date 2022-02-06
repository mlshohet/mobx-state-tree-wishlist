import React from "react";
import { observer } from 'mobx-react';
import WishListItemView from "./WishListItemView";
import WishListItemEntry from "./WishListItemEntry";

const WishListView = ({ wishList, readonly }) => {
  return (
    <div className="list">
      <ul>
        {wishList?.items?.map((item, i) => {
          return <WishListItemView key={i} item={item} readonly={readonly} />;
        })}
      </ul>
      Total: ${wishList?.totalPrice}
      {!readonly && <WishListItemEntry wishList={wishList} />}
    </div>
  );
};

export default observer(WishListView);
