import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import profileimage from "../utility/Images/profile.jpeg";
function Friend({ FriendsList }) {
  return (
    <>
      <div>
        {FriendsList.map((friend) => (
          <div className="Friend">
            <div>
              <img src={profileimage} />
            </div>
            <div>
              <h4>{friend.name}</h4>
              <p>{friend.balance}</p>
            </div>
            <div>
              <button type="button" class="btn btn-warning">
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Friend;
