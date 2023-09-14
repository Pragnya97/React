/**import logo from './logo.svg';**/

import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './components/Navbar.css'
import './components/Main.css'

function App() {
  return (
    <>
    <Navbar />
    <Main />
    </>
    // <div className="app">
    //   <nav className="nav">
        
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>ReactFacts</p>
    //     <p>React Course - Project 1</p>
    //     </nav>
    //     <h1>Fun facts about React</h1>
    //     <ul className="facts">
    //     <li>Was released in 2013</li>
    //     <li>Was originally created by Jordan Walke</li>
    //     <li>Has well over 100k stars on GitHub</li>
    //     <li>Maintained by Facebook</li>
    //     <li>Powers thousands of enterprise apps, including mobile apps</li>
    //     </ul>
      
    // </div>
  );
}

export default App;
