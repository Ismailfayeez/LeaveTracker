import React, { Component, Fragment } from 'react';
import "./App.css"
import {Route, Routes} from "react-router-dom";
import configureStore from './store/configureStore';
import LeaveTracker from './Routes/LeaveTracker';
import Auth from './components/Auth/Auth';
import { Provider } from 'react-redux';


const store=configureStore()
class App extends Component {
  state={
    displaySideBar:false
  }
  handleDisplaySideBar=()=>{
    let displaySideBar=this.state.displaySideBar
    this.setState({displaySideBar:!displaySideBar})
  }
  
  render() { 
    return (
      <Fragment>
        <Provider store={store}>
        <Routes>
          <Route path='/auth/*' element={<Auth/>}/>
          <Route path='/lt/*' element={<LeaveTracker handleDisplaySideBar={this.handleDisplaySideBar} displaySideBar={this.state.displaySideBar}/>}/>
        </Routes>
        </Provider>
      </Fragment>
    );
  }
}
 
export default App;