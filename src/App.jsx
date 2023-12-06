import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <div className="app-body">
        <Sidebar />
        <Feed />
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
