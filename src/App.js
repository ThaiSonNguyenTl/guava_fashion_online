import "./App.css";
import React ,{Component} from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import routes from './routes';
import Header from "./components/Header";
class App extends Component {
  
  
  render() {
    return (
      <BrowserRouter>
        {/* <div className="App"> */}
        <Header/>
          <div className="maincontainer">
            <Switch>
              {this.showContent(routes)}
          </Switch>
        </div>
      {/* </div> */}
      </BrowserRouter>
    );
  }

  showContent = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route,index) => 
        (<Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />)     
      )
    }
    return result
  }

}

export default App;
