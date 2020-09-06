import React from "react";
import Table from "./components/table";
import "./App.css";
import SearchBar from "./components/searchBar";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Table />
    </div>
  );
}

export default App;
