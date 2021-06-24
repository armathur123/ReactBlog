import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/> {/*self closing tag*/}
        <div className="content">
          <Switch>
            <Route path = "/">
              <Home></Home> {/*route to home component when path is "/"*/}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
