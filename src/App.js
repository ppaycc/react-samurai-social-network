import logo from './logo.svg';
import './App.css';
import './reboot.css'
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Dialog from './Components/Dialog/Dialog';
import { BrowserRouter, Route } from 'react-router-dom';
import AllProfile from './Components/Profile/AllProfile';
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import React from "react";
import UsersContainer from "./Components/Users/UsersContainer";



function App(props) {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <div className="wrapper-two">
      <Navbar />
      <div>
          {/*<Route path="/" render={ () => <AllProfile state={props.state.profilePage} dispatch={props.dispatch}/> }/>*/}
         <Route path="/profile" render={ () => <AllProfile /> }/>
         <Route path="/dialog" render={ () => <Dialog /> }/>
         <Route path="/users" render={ () => <UsersContainer/> } />
         <Route path="/news" render={() => <News />}/>
         <Route path="/music" render={() => <Music />}/>
         <Route path="/settings" render={() => <Settings />}/>
      </div>
      </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
