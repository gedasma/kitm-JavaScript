import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import RecipePage from "../recipePage/RecipePage";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

const App = ()=> {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path={'/recipe/:id'} element={<RecipePage/>}/>
          <Route path='/category/:id' element={<Main/>}/>

        </Routes>
      </Router>
      <Footer/>
      
    </div>
  );
}

export default App;
