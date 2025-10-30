import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Navbar from './components/Navbar';
import {Home} from './components/Home';
import About from './components/About';
import Notestate from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';



function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
        setAlert(null);
    }, 1500);
 
  }
  return (
<>
<Notestate>
  <Router>
    <Navbar/>
    <Alert alert={alert}/>
  <div className="container">
      <Routes>

          <Route path="/" element={<Home showAlert = {showAlert}/>}/>
          <Route path="/about" element={<About />}/>
          <Route path="/login" element={<Login showAlert = {showAlert}/>} />
          <Route path="/signup" element={<Signup showAlert = {showAlert}/>} /> 

      </Routes>
  </div>
  </Router>
</Notestate>
</>
  );
}

export default App;

//Notestate wraps the hole app so now any component inside, can access state and update using useContext.
//Notestate means the provider




















// import './App.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import  Home  from './components/Home';
// import About from './components/About';

// function App() {
//   return (
//     <>
//   <Router>
//     <Navbar/>
//       <Routes>
//         <Route path= "/">
//         <Home/>
//         </Route>
//         <Route exact path = "/about">
//         <About/>
//         </Route>
//       </Routes> 
//   </Router>
//     </>
//   );
// }

// export default App;
