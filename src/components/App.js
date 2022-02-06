import React, { useState } from "react";
import logo from "../assets/santa2.jpg";
import WishListView from "./WishListView";
//import { Group } from "../models/Groups";
import { observer } from "mobx-react";

//const group = Group.create({ users: {} });

function App({ group }) {
  const [currentUser, setCurrentUser] = useState();

  const usersArr = [...group.users.values()];

  const onSelectUserHandler = (event) => {
    const fetchedUser = group.users.get(event.target.value);
    setCurrentUser(fetchedUser);
  };

  return (
    <div className="App" style={{ margin: 50 }}>
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          style={{ height: 200 }}
        />
        <h1>MobX State Tree Wish List</h1>
      </header>
      <button onClick={group.reload}>Reload</button>
      <select onChange={onSelectUserHandler}>
        <option>-- Select User --</option>
        {usersArr.map((user) => {
          console.log("user: ", user);
          return (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          );
        })}
      </select>
      <button onClick={group.drawLots}>Draw Lots</button>
      {currentUser && <WishListView wishList={currentUser.wishList} />}
      {currentUser && (
        <button onClick={() => currentUser.getSuggestions()}>
          Suggestions
        </button>
      )}
      <hr />
      <h2>{currentUser?.recipient ? currentUser.recipient.name : ""}</h2>
      {console.log("wishList: ", currentUser?.recipient?.wishList)}
      {console.log("wishList: ", currentUser)}
      {currentUser?.recipient && (
        <WishListView wishList={currentUser?.recipient?.wishList} readonly />
      )}
    </div>
  );
}

export default observer(App);
