import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./styles/pagination.css";

import {
  BrowserRouter as Router,

} from "react-router-dom";
import RouteComponent from "./route/RouteComponent";
import "./styles/App.css"

import React, { Component } from 'react'
import ManagerRepo from './repositories/managerRepo';
import { copyWith } from './logic/nisys_slice';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.onAppStart();
}

  render() {
    return <Router>
      <div className="App">
        <RouteComponent />
      </div>
    </Router>
  }


  onAppStart() {
    try {
      const managerRepo = new ManagerRepo();
      var settings = managerRepo.loadAppSettings();
      console.log("Initial settings", settings);
      this.props.dispatch(copyWith({
        currentLanguage: settings.currentLanguage,
      }));
    } catch (e) {
      console.log(e);
    }
  }
}

const mapStateToProps = (StoreOf) => ({});

export default connect(mapStateToProps)(App);

