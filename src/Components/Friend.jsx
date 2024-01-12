import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
function Friend({ FriendsList, ChangeBillFriend, ModifyFriends }) {
  function handleOnClick(id) {
    const SplitFriend = FriendsList.filter((friend) => friend.id === id);
    const UpdatedArray = FriendsList.map((friend) =>
      friend.id === id ? { ...friend, isSelected: !friend.isSelected } : friend
    );
    ModifyFriends(UpdatedArray);
    SplitFriend[0].isSelected = !SplitFriend[0].isSelected;
    ChangeBillFriend(SplitFriend[0]);
  }
  return (
    <>
      <div>
        {FriendsList.map((friend) => (
          <div className="Friend">
            <div>
              <img src={friend.imageurl} />
            </div>
            <div>
              <h4>{friend.name}</h4>
              <p>{friend.balance}</p>
            </div>
            <div>
              <button
                type="button"
                class="btn btn-warning"
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