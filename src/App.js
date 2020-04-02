import React from 'react';
import MainPage from './components/MainPage'
import PageFooter from './components/PageFooter'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom"

function App() {
  return (
    <div className="App">
        <Router forceRefresh={false} basename={process.env.PUBLIC_URL}>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/main" component={PageFooter} />
        </Router> 
    </div>
    );
}

export default App;

