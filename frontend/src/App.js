import React from "react";
import MatrixTransform from "./components/MatrixTransform";
import { HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <MatrixTransform />
      </div>
    </Router>
  );
}

export default App;
