import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DateRangeSelector from "./components/molecules/DateRangeSelector/DateRangeSelector";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Habit tracker</h1>
        <DateRangeSelector />
      </header>
    </div>
  );
}

export default App;
