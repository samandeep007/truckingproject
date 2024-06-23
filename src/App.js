import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Services from './components/Services';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Router>
        <Route exact path='/' component={Hero}/>
        <Route exact path='/services' component={Services}/>
      </Router>
    
    </div>
  );
}

export default App;
