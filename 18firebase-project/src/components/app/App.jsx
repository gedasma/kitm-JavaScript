import AddWork from '../addWork/AddWork';
import Header from '../header/Header';
import Works from '../works/Works';
import Register from '../register/Register';
import Reset from '../reset/Reset';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Login from '../login/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/works' element={<Works/>}/>
          <Route path='/add' element={<AddWork/>}/>
          <Route path='/update-work/:id' element={<AddWork/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/password-reset' element={<Reset/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
