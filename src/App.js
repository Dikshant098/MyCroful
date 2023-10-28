import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from "./routing/AppRoute";


const App = () => {
  return (
    <React.Fragment>
      <Router>
        <AppRoute></AppRoute>
      </Router>
    </React.Fragment>
  );
};

export default App;
