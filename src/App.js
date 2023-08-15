import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [memberList, setmemberList] = useState([
    "member1",
    "member2",
    "member3",
  ]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {memberList.map((member) => (
          <p>{member}</p>
        ))}
      </header>
    </div>
  );
}

export default App;
