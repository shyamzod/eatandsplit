import { useState } from "react";
function SplitBillComponent({ SplitBillFriend, Friends, ModifyFriends }) {
  function handleOnSubmit(event, id) {
    event.preventDefault();

    const friends = Friends.map((friend) => {
      if (friend.id === id) {
        const result =
          billvalue - (billpayer === "1" ? myExpense : friendExpense);
        return {
          ...friend,
          balance: friend.balance + (billpayer === "1" ? result : -result),
        };
      }
      return friend;
    });
    ModifyFriends(friends);
    ChangeBillValue(0);
    ChangeMyExpense(0);
    ChangeFriendExpense(0);
    ChangeBillPayer("0");
  }
  const [billvalue, ChangeBillValue] = useState(0);
  const [myExpense, ChangeMyExpense] = useState(0);
  const [friendExpense, ChangeFriendExpense] = useState(0);
  const [billpayer, ChangeBillPayer] = useState(0);
  function BillChangeHandler(event) {
    ChangeBillValue(event.target.value);
  }
  function MyExpenseHandler(event) {
    ChangeMyExpense(event.target.value);
  }
  function FriendExpenseHandler(event) {
    ChangeFriendExpense(event.target.value);
  }
  function HandleBillPayerChange(event) {
    ChangeBillPayer(event.target.value);
  }
  return (
    <>
      {SplitBillFriend.isSelected && (
        <div className="SplitBillCompoForm">
          <form onSubmit={(event) => handleOnSubmit(event, SplitBillFriend.id)}>
            <h2>Split a Bill With {SplitBillFriend.name}</h2>
            <div className="mb-3">
              <label htmlFor="billvalueinput" className="form-label">
                Bill Value
              </label>
              <input
                type="number"
                className="form-control"
                id="billvalueinput"
                onChange={BillChangeHandler}
                value={billvalue}
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
                onChange={MyExpenseHandler}
                value={myExpense}
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
                onChange={FriendExpenseHandler}
                value={friendExpense}
              />
            </div>
            <div>
              <label htmlFor="billpayerdrop" className="form-label">
                Who is Paying the bill?
              </label>
              <select
                className="form-select form-select-lg mb-3 billPayerDropdown"
                id="billpayerdrop"
                onChange={HandleBillPayerChange}
                value={billpayer}
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
