import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard"
import Login from "./pages/login"
import Register from "./pages/register"
import "./reset.css"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/"> <Login /> </Route>
        <Route exact path="/register"> <Register /> </Route>
        <Route exact path="/dashboard"> <Dashboard /> </Route>
      </Switch>
    </div>
  );
}

export default App;
