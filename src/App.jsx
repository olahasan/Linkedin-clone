import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Header from "./Components/Header";
import { getUserAuth } from "./redux/actions/index";
import { connect } from "react-redux";
import RequireAuth from "./Components/RequireAuth";

const App = (props) => {
  useEffect(() => {
    props.getUserAuth();
  }, []);
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Header />
                <Home />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (disptach) => {
  return {
    getUserAuth: () => disptach(getUserAuth()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
