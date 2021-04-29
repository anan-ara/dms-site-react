import './App.css';
import Navbar from './Navbar.js'
import Main from './Main.js';
import Portfolio from './Portfolio.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
