import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from "./routing/AppRoute";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
          <AppRoute></AppRoute>
        </Router>
      </Provider>
    </React.Fragment>
  );
};

export default App;
