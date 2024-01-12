import { useState } from "react";
import Friend from "./Friend";
import AddFriendForm from "./AddFriendForm";
const DefaultFriendsList = [
  { name: "Ramdas", imageurl: "", balance: "Rahul owes 50$" },
  { name: "Kalpana", imageurl: "", balance: "I owe Shyam 10$" },
  { name: "Rahul", imageurl: "", balance: "Shyam owes 400$" },
  { name: "Shyam", imageurl: "", balance: "I owe Ramdas 40$" },
  { name: "Ramdas", imageurl: "", balance: "Rahul owes 50$" },
  { name: "Kalpana", imageurl: "", balance: "I owe Shyam 10$" },
  { name: "Rahul", imageurl: "", balance: "Shyam owes 400$" },
  { name: "Shyam", imageurl: "", balance: "I owe Ramdas 40$" },
];
function FriendsListComponent() {
  const [Friends, ModifyFriends] = useState(DefaultFriendsList);
  function handleOnAddFriend() {}
  return (
    <>
      <h1>Friends List</h1>
      <div className="FriendsList">
        <Friend FriendsList={Friends}></Friend>
      </div>
      <div className="AddFriendForm">
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleOnAddFriend}
        >
          Add Friend
        </button>
      </div>
      <div className="AddFriendForm">
        <AddFriendForm></AddFriendForm>
      </div>
    </>
  );
}

export default FriendsListComponent;
