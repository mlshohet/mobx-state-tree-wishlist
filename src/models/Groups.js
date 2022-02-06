import { types, flow, applySnapshot } from "mobx-state-tree";

import { WishList } from "./WishList";

export const User = types
  .model({
    id: types.identifier,
    name: types.string,
    gender: types.enumeration("gender", ["m", "f"]),
    wishList: types.optional(WishList, {}),
    recipient: types.maybe(types.reference(types.late(() => User))),
  })
  .actions((self) => ({
    getSuggestions: flow(function* () {
      let suggestions;
      try {
        const response = yield window.fetch(
          `http://localhost:3001/suggestions_${self.gender}`
        );

        if (!response.ok) {
          throw new Error("can't find suggestions");
        }
        suggestions = yield response.json();
      } catch (error) {
        console.log(error);
      }
      self.wishList.items.push(...suggestions);
    }),
  }));

export const Group = types
  .model({
    users: types.map(User),
  })
  .actions((self) => ({
    afterCreate() {
      self.load()
    },
    load: flow(function* load() {
      const response = yield window.fetch(`http://localhost:3001/users`);
      applySnapshot(self.users, yield response.json());
      // const data = yield response.json();

      // return data;
    }),
    assignUsers(users) {
      self.users = users;
    },
    reload() {
      self.load();
    },
    drawLots() {
      const allUsers = Array.from(self.users);
      allUsers.forEach((user) => console.log(user));

      if (allUsers.length <= 1) return;

      let remaining = allUsers.slice();

      allUsers.forEach((user) => {
        if (remaining.size === 1 && remaining[0][1].id === user[1].id) {
          const swapWith =
            allUsers[Math.floor(Math.random() * allUsers.length)];
          swapWith[1].recipient = self;
        } else {
          let recipientIndex = Math.floor(Math.random() * remaining.length);

          if (remaining[recipientIndex][1].id !== user[1].id) {
            user[1].recipient = remaining[recipientIndex][1];
            remaining.splice(recipientIndex, 1);
          }
        }
      });
    },
  }));
