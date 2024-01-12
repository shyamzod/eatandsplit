import { useState } from "react";
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
      name: nameInput,
      imageurl: imageurlinput,
      balance: "Rahul owes 50$",
    };
    ModifyFriends([...Friends, newFriend]);
  }
  return (
    <>
      {ToggleAddFriendForm && (
        <div>
          <form onSubmit={handleFormSubmit}>
            <div class="form-group">
              <label for="exampleInputEmail1">ImageUrl</label>
              <input
                type="text"
                class="form-control"
                id="imageurlinput"
                placeholder="Enter Image Url"
                value={imageurlinput}
                onChange={handleImageUrlInput}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Friend Name</label>
              <input
                type="text"
                class="form-control"
                id="imageurlinput"
                placeholder="Enter Friend"
                value={nameInput}
                onChange={handleFriendNameInput}
              />
            </div>
            <div>
              {" "}
              <button type="submit" class="btn btn-warning">
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
