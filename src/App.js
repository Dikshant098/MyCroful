import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from "./routing/AppRoute";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Router>
        <AppRoute></AppRoute>
      </Router>
      <Footer />
    </React.Fragment>
  );
};

export default App;
