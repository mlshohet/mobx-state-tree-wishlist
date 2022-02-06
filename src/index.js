import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { Group } from "./models/Groups";

// const wishList = WishList.create({
//   items: [
//     {
//       name: "Chronicles of narnia Box Set - C.S. Lewis",
//       price: 28.73,
//       image:
//         "https://images-na.ssl-images-amazon.com/images/I/51K6iSgqUqL._SX329_BO1,204,203,200_.jpg",
//     },
//     {
//       name: "LEGO Mindstorm eV3",
//       price: 349.97,
//       image:
//         "https://images-na.ssl-images-amazon.com/images/I/51K6iSgqUqL._SX329_BO1,204,203,200_.jpg",
//     },
//     {
//       name: "Die Hard",
//       price: 12.99,
//       image:
//         "https://images-na.ssl-images-amazon.com/images/I/51K6iSgqUqL._SX329_BO1,204,203,200_.jpg",
//     },
//   ],
// });

const group = Group.create({ users: {} });

function renderApp() { 
  ReactDOM.render(
    <React.StrictMode>
      <App group={group} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

renderApp();
