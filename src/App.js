import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./styles/pagination.css";

import {
  BrowserRouter as Router,
  
} from "react-router-dom";
import RouteComponent from "./route/RouteComponent";
import "./styles/App.css"


function App() {
  
  return (
    <Router>
      <div className="App">
        <RouteComponent/>
      </div>
    </Router>
  );
}

export default App;
