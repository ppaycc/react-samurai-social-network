import logo from './logo.svg';
import './App.css';
import './reboot.css'
import Navbar from './Components/Navbar/Navbar';
import Dialog from './Components/Dialog/Dialog';
import { Route } from 'react-router-dom';
import AllProfile from './Components/Profile/AllProfile';
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import React from "react";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";



function App(props) {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <div className="wrapper-two">
      <Navbar />
      <div>
          {/*<Route path="/" render={ () => <AllProfile state={props.state.profilePage} dispatch={props.dispatch}/> }/>*/}
         <Route path="/profile/:userId?" render={ () => <AllProfile /> }/>
         <Route path="/dialog" render={ () => <Dialog /> }/>
         <Route path="/users" render={ () => <UsersContainer/> } />
         <Route path="/news" render={() => <News />}/>
         <Route path="/music" render={() => <Music />}/>
         <Route path="/settings" render={() => <Settings />}/>
      </div>
      </div>
      
    </div>
  );
}

export default App;
