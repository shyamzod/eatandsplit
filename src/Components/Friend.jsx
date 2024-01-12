import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
function Friend({ FriendsList, ChangeBillFriend, ModifyFriends }) {
  function handleOnClick(id) {
    const SplitFriend = FriendsList.filter((friend) => friend.id === id);
    const UpdatedArray = FriendsList.map((friend) => ({
      ...friend,
      isSelected: friend.id === id ? !friend.isSelected : false,
    }));
    ModifyFriends(UpdatedArray);
    SplitFriend[0].isSelected = !SplitFriend[0].isSelected;
    ChangeBillFriend(SplitFriend[0]);
  }
  return (
    <>
      <div className="ListStart">
        {FriendsList.map((friend) => (
          <div className="Friend" key={friend.id}>
            <div>
              <img src={friend.imageurl} alt={friend.name} />
            </div>
            <div className="FriendNameandBalance">
              <h4>{friend.name}</h4>
              <p className={friend.balance > 0 ? "pGreen" : "pRed"}>
                {friend.balance > 0
                  ? `${friend.name} Owes me ${Math.abs(friend.balance)}`
                  : `I Owe ${friend.name} ${Math.abs(friend.balance)}`}
              </p>
            </div>
            <div>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => handleOnClick(friend.id)}
              >
                {friend.isSelected ? "Close" : "Select"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Friend;
