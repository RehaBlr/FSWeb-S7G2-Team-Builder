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

  function addMember(newMember) {
    const newMemberList = [
      ...memberList,
      {
        name: newMember.isim,
        favTime: newMember.zaman,
        focus: newMember.uzmanlik,
      },
    ];
    setmemberList(newMemberList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {memberList.map((member, ind) => (
          <span key={ind}>
            <strong>{member.name}</strong>:{member.favTime}-{member.focus}
          </span>
        ))}

        <Form addMember={addMember} />
      </header>
    </div>
  );
}

export default App;
