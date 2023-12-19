import Menu from "../menu/Menu";
import ImageInputForm from "../imageInputForm/ImageInputForm";
import Gallery from "../gallery/Gallery";
import { useState } from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

const App = () => {
  const [imageObjectList, setImageObjectList] = useState([])

  const addImageToList = (imageLink) =>{
    setImageObjectList((prevList) =>{
      return [imageLink, ...prevList]
    })
    console.log(imageObjectList)
    
  }

  return (
    <Router>
    <main className="container">
      
        <Menu/>
      
        <Routes>
          <Route path="/" element={<p>pradzia</p>}/>
          <Route path="/show" element={<Gallery imageObjectList={imageObjectList}/>}/>
          <Route path="/add" element={<ImageInputForm addImageToList={addImageToList}/>}/>
        </Routes>
      
      {/* {console.log("state before if:" + displayOption)} */}
      {/* {displayOption === "show" ? (<Gallery imageObjectList={imageObjectList}/>) : (<ImageInputForm addImageToList={addImageToList}/>)} */}

      {/* {displayOption === "show" && <Gallery imageObjectList={imageObjectList}/>}
      {displayOption === "add" && <ImageInputForm addImageToList={addImageToList}/>} */}
      
      
    </main>
    </Router>
  );
}

export default App;
