import "./App.css";
import { Register } from "./Register";
import { Switch, Route, Router } from "react-router-dom";
import Success from "./Sucess";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <AnimatePresence>
          <Switch>
            <Route exact path="/">
              <Register />
            </Route>
            <Route exact path="/success/:name">
              <Success />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
