import React from 'react';
import './App.css';
import YearlyList from './components/YearlyList';
import NavBar from "./components/NavBar";
class App extends React.Component {
    	
  render() {
    return (
    <div>
		  <NavBar/>
      <YearlyList></YearlyList>
    </div>
    );
  }
}
export default App;
