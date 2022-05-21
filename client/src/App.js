
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import printJS from 'print-js'

function App() {
  const [teams, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/teams/")
      .then((res) => res.json())
      .then(console.log(teams))
      .then((teams) => setData(res.teams[0].id))
      .then((teams) => printJS(teams) );
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!teams ? "Loading..." : teams}</p>
      </header>
    </div>
  );
}

export default App;