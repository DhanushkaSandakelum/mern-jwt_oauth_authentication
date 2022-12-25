import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
