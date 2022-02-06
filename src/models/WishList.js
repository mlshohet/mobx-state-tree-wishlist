import { types, getParent, destroy } from "mobx-state-tree";

export const WishListItem = types
  .model({
    name: types.string,
    price: types.number,
    image: "",
  })
  .actions((self) => ({
    changeName(newName) {
      self.name = newName;
    },
    changePrice(newPrice) {
      self.price = newPrice;
    },
    remove(){
      // go up 2 steps to item array, then to Wish list itself
      // this calls the remove method that has to be implemented
      // on the Wish List
      getParent(self, 2).remove(self);
    },
  }));

export const WishList = types
  .model({
    items: types.optional(types.array(WishListItem), []),
  })
  .actions((self) => ({
    add(item) {
      self.items.push(item);
    },
    remove(item) {
      destroy(item);
    }
  }))
  .views((self) => ({
    get totalPrice() {
      return self.items.reduce((sum, entry) => sum + entry.price, 0);
    },
  }));
