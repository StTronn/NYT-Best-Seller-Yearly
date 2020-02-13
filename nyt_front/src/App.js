import React from 'react';
import './App.css';
import YearlyList from './components/YearlyList';
import NavBar from "./components/NavBar";
import BookPage from "./components/BookPage";
import {
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {
    	
  render() {
    return (
      <Switch>
        <Route path="/:id">
          <BookPage />
        </Route>
        <Route path="/">
          <div>
            <NavBar />
            <YearlyList></YearlyList>
          </div>
        </Route>

      </Switch>
   );
  }
}
export default App;
