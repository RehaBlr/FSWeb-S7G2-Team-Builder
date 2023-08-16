import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [memberList, setmemberList] = useState([
    { name: "Ali", favTime: "Gece", focus: "Frontend" },
    { name: "Veli", favTime: "Gündüz", focus: "Backend" },
    { name: "Deli", favTime: "Gece", focus: "Backend" },
  ]);

  const [editOrder, setEditOrder] = useState(null);

  function addMember(newMember) {
    if (editOrder !== null) {
      console.log("editorder", editOrder);
      const newMemberList = [...memberList];
      newMemberList[editOrder] = newMember;
      setmemberList(newMemberList);
      setEditOrder(null);
    } else {
      const newMemberList = [...memberList, newMember];
      setmemberList(newMemberList);
    }
  }

  const editHandler = (order) => {
    console.log("edithandler çalıştı.", order);
    setEditOrder(order);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {memberList.map((member, ind) => (
          <span key={ind}>
            <strong>{member.name}</strong>:{member.favTime}-{member.focus}
            <button onClick={() => editHandler(ind)}>Düzenle</button>
          </span>
        ))}

        <Form addMember={addMember} editingMember={memberList[editOrder]} />
      </header>
    </div>
  );
}

export default App;
