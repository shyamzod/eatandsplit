import { useState } from "react";
import defaultimage from "../utility/Images/profileimage.jpeg";
let masterId = 0;
function AddFriendForm({ Friends, ModifyFriends, ToggleAddFriendForm }) {
  const [imageurlinput, ChangeImageUrl] = useState("");
  const [nameInput, ChangeNameInput] = useState("");

  function handleImageUrlInput(event) {
    ChangeImageUrl(event.target.value);
  }
  function handleFriendNameInput(event) {
    ChangeNameInput(event.target.value);
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    const newFriend = {
      id: ++masterId,
      name: nameInput,
      imageurl: imageurlinput === "" ? defaultimage : imageurlinput,
      balance: 0,
      isSelected: false,
    };
    ModifyFriends([...Friends, newFriend]);
    ChangeImageUrl("");
    ChangeNameInput("");
  }
  return (
    <>
      {ToggleAddFriendForm && (
        <div>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">ImageUrl</label>
              <input
                type="text"
                className="form-control"
                id="imageurlinput"
                placeholder="Enter Image Url"
                value={imageurlinput}
                onChange={handleImageUrlInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Friend Name</label>
              <input
                type="text"
                className="form-control"
                id="imageurlinput"
                placeholder="Enter Friend"
                value={nameInput}
                onChange={handleFriendNameInput}
              />
            </div>
            <div>
              {" "}
              <button type="submit" className="btn btn-warning">
                Add Friend
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
export default AddFriendForm;
