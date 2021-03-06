import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/layout";
// import './styles/app.less';
import "antd/dist/antd.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <Layout />
        </Router>
      </div>
    );
  }
}

export default App;
