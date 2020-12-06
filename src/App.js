import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Favourite from "./Component/Favourite/Favourite";
import Home from "./Component/Home/Home";
import { createContext, useState } from "react";

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    email: "",
    name: "",
  });
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="bodyBg">
              <Home></Home>
            </div>
          </Route>

          <Route path="*">
            <p>page not found</p>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
