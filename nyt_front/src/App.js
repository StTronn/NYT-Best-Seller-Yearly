import React from "react";
import "./App.css";
import YearlyList from "./components/YearlyList";
import NavBar from "./components/NavBar";
import BookPage from "./components/BookPage";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/:id">
            <NavBar />
            <BookPage />
          </Route>
          <Route path="/">
            <div>
              <NavBar />
              <YearlyList></YearlyList>
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;
