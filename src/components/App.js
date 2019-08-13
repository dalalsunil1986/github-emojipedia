import React from "react";
import EmojiContainer from "./EmojiContainer";

import "../stylesheets/App.css";

function App() {
  console.log("Todo", 
  "1. add filter buttons on home 2. add search button with modal on home 3. postgres database store? check database for api updates on render? or optional invoke from admin to update database")
  return (
    <div className="App">
      <EmojiContainer key={Math.floor(Math.random() * 100000000)}/>
    </div>
  );
}

export default App;
