import Friend from "./Friend";
import AddFriendForm from "./AddFriendForm";

function FriendsListComponent({
  buttonAddFriend,
  Friends,
  ChangeButtonToggle,
  ModifyFriends,
  ChangeBillFriend,
}) {
  function handleOnAddFriend() {
    ChangeButtonToggle(!buttonAddFriend);
  }
  return (
    <>
      <h1 className="heading">Split and Eat</h1>
      <div className="FriendsList">
        <Friend
          FriendsList={Friends}
          ChangeBillFriend={ChangeBillFriend}
          ModifyFriends={ModifyFriends}
        ></Friend>
      </div>
      <div className="AddFriendForm">
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleOnAddFriend}
        >
          {!buttonAddFriend ? "Add Friend" : "Close"}
        </button>
      </div>
      <div className="AddFriendForm">
        <AddFriendForm
          Friends={Friends}
          ModifyFriends={ModifyFriends}
          ToggleAddFriendForm={buttonAddFriend}
        ></AddFriendForm>
      </div>
    </>
  );
}

export default FriendsListComponent;
