import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [memberList, setmemberList] = useState([
    { name: "Ali", favTime: "Gece", focus: "Frontend" },
    { name: "Veli", favTime: "Gündüz", focus: "Backend" },
    { name: "Deli", favTime: "Gece", focus: "Backend" },
  ]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {memberList.map((member, ind) => (
          <p key={ind}>
            <strong>{member.name}</strong>:{member.favTime}-{member.focus}
          </p>
        ))}
      </header>
    </div>
  );
}

export default App;
