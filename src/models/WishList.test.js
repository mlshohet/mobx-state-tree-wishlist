import { WishListItem, WishList } from "./WishList";

it("can create an instance of a model", () => {
  const item = WishListItem.create({
    name: "Chronicles of narnia Box Set - C.S. Lewis",
    price: 28.73,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51K6iSgqUqL._SX329_BO1,204,203,200_.jpg",
  });

  expect(item.price).toBe(28.73);
  item.changeName("Narnia");
  expect(item.name).toBe("Narnia");
});

it("can create a wishlist", () => {
  const list = WishList.create({
    items: [
      {
        name: "Chronicles of narnia Box Set - C.S. Lewis",
        price: 28.73,
        image:
          "https://images-na.ssl-images-amazon.com/images/I/51K6iSgqUqL._SX329_BO1,204,203,200_.jpg",
      },
    ],
    totalPrice: 0,
  });

  expect(list.items.length).toBe(1);
});
