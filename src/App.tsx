import React from "react";
import ReactModal from "react-modal";
import GameScreen from "./screens/GameScreen";
import "./App.css";

ReactModal.setAppElement("#root");

function App() {
  return (
    <div>
      <GameScreen />
    </div>
  );
}

export default App;
