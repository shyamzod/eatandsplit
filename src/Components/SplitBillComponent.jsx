function SplitBillComponent({ SplitBillFriend }) {
  function handleOnSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      {SplitBillFriend.isSelected && (
        <div className="SplitBillCompoForm">
          <form onSubmit={handleOnSubmit}>
            <h2>Split a Bill With {SplitBillFriend.name}</h2>
            <div class="mb-3">
              <label for="billvalueinput" class="form-label">
                Bill Value
              </label>
              <input type="number" class="form-control" id="billvalueinput" />
            </div>
            <div class="mb-3">
              <label for="yourvalueinput" class="form-label">
                Your Expense
              </label>
              <input type="number" class="form-control" id="yourvalueinput" />
            </div>
            <div class="mb-3">
              <label for="friendsvalueinput" class="form-label">
                {SplitBillFriend.name}'s Expense
              </label>
              <input
                type="number"
                class="form-control"
                id="friendsvalueinput"
              />
            </div>
            <div>
              <label for="billpayerdrop" class="form-label">
                Who is Paying the bill?
              </label>
              <select
                className="form-select form-select-lg mb-3 billPayerDropdown"
                id="billpayerdrop"
              >
                <option selected>Select</option>
                <option value="1">You</option>
                <option value="2">{SplitBillFriend.name}</option>
              </select>
            </div>
            <button type="submit" class="btn btn-warning">
              Split Bill
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default SplitBillComponent;
