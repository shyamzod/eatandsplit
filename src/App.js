import FriendsListComponent from "./Components/FriendsListComponent";
import SplitBillComponent from "./Components/SplitBillComponent";
import url from "./utility/Images/profileimage.jpeg";
import { useState } from "react";
const DefaultFriendsList = [
  {
    id: 1,
    name: "Ramdas",
    imageurl: url,
    balance: 300,
    isSelected: false,
  },
  {
    id: 2,
    name: "Kalpana",
    imageurl: url,
    balance: -200,
    isSelected: false,
  },
  {
    id: 3,
    name: "Rahul",
    imageurl: url,
    balance: 200,
    isSelected: false,
  },
  {
    id: 4,
    name: "Shyam",
    imageurl: url,
    balance: -400,
    isSelected: false,
  },
];

function App() {
  const [Friends, ModifyFriends] = useState([]);
  const [buttonAddFriend, ChangeButtonToggle] = useState(false);
  const [SplitBillFriend, ChangeBillFriend] = useState({
    name: "Ramdas",
    imageurl: url,
    balance: "Rahul owes 50$",
    isSelected: false,
  });
  return (
    <>
      <div className="MainDiv">
        <div>
          <FriendsListComponent
            buttonAddFriend={buttonAddFriend}
            Friends={Friends}
            ChangeButtonToggle={ChangeButtonToggle}
            ModifyFriends={ModifyFriends}
            ChangeBillFriend={ChangeBillFriend}
          ></FriendsListComponent>
        </div>
        <div>
          <SplitBillComponent
            SplitBillFriend={SplitBillFriend}
            Friends={Friends}
            ModifyFriends={ModifyFriends}
          ></SplitBillComponent>
        </div>
      </div>
    </>
  );
}

export default App;
