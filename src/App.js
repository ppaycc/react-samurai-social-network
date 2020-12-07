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



function App(props) {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header/>
      <div className="wrapper-two">
      <Navbar/>
      <div>

         <Route path="/profile" render={ () => <AllProfile state={props.state.profilePage}/> }/>
         <Route path="/dialog" render={ () => <Dialog state={props.state.dialogPage} /> }/>
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
