function AddFriendForm() {
  return (
    <>
      <div>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">ImageUrl</label>
            <input
              type="text"
              class="form-control"
              id="imageurlinput"
              placeholder="Enter Image Url"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Friend Name</label>
            <input
              type="text"
              class="form-control"
              id="imageurlinput"
              placeholder="Enter Friend"
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
    </>
  );
}
export default AddFriendForm;
