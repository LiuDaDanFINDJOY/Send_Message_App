import "./App.css";
import React from "react";
import SendMessage from "./feature/view.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <SendMessage />
      </>
    );
  }
}

export default App;
