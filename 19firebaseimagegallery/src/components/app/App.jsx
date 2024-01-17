import Gallery from "../gallery/Gallery";
import Header from "../header/Header";
import Login from "../login/Login";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Register from "../register/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
