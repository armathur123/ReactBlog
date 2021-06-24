import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/> {/*self closing tag*/}
        <div className="content">
          <Switch>
            <Route exact path = "/">
              <Home></Home> {/* route to home component when path is "/" */}
            </Route>
            <Route path = "/create">
              <Create></Create> {/*route to home component when path is "/"*/}
            </Route>
            {/*Route Parameter example */}
            <Route path = "/blogs/:id">
              <BlogDetails></BlogDetails> {/*route to home component when path is "/"*/}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
