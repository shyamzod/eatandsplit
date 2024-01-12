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
            <div className="mb-3">
              <label htmlFor="billvalueinput" className="form-label">
                Bill Value
              </label>
              <input
                type="number"
                className="form-control"
                id="billvalueinput"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="yourvalueinput" className="form-label">
                Your Expense
              </label>
              <input
                type="number"
                className="form-control"
                id="yourvalueinput"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="friendsvalueinput" className="form-label">
                {SplitBillFriend.name}'s Expense
              </label>
              <input
                type="number"
                className="form-control"
                id="friendsvalueinput"
              />
            </div>
            <div>
              <label htmlFor="billpayerdrop" className="form-label">
                Who is Paying the bill?
              </label>
              <select
                className="form-select form-select-lg mb-3 billPayerDropdown"
                id="billpayerdrop"
              >
                <option value="0">Select</option>
                <option value="1">You</option>
                <option value="2">{SplitBillFriend.name}</option>
              </select>
            </div>
            <button type="submit" className="btn btn-warning">
              Split Bill
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default SplitBillComponent;
