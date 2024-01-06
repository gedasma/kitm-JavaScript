import Menu from "../menu/Menu";
import ImageInputForm from "../imageInputForm/ImageInputForm";
import Gallery from "../gallery/Gallery";
import { useState } from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { useEffect } from "react";
import Cat from "../cat/Cat";
import Search from "../search/Search";

const App = () => {
  const [catImage, setCatImage] = useState([])
  const [cat, setCat] = useState(
    {
      name:"",
    imageUrl:""
    })
  const [imageObjectList, setImageObjectList] = useState([])
  const [search, setSearch] = useState("")

  const handleSearch = (e)=>{
    setSearch(e.target.value)
  }

  useEffect(()=>{
    if(search){
      try{
        fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${search}`)
        .then(response=>response.json())
        .then(data=>setCatImage(data))
        
      }
      catch(msg){
        console.log("nera!: " + msg)
      }
    }
  },[search])

  // console.log(breeds[0].url)

  const addImageToList = (imageLink) =>{
    setImageObjectList((prevList) =>{
      return [imageLink, ...prevList]
    })
    // console.log(imageObjectList)
    
  }

  return (
    <Router>
    <main className="container">
      
        <Menu/>
      
        <Routes>
          <Route path="/" element={
            <>
              
              <Search handleSearch={handleSearch}/>
              
              <div className="row">
                {catImage.map((cat)=>
                  <Cat key={Math.random().toString(36).substr(2, 9)} id={cat.id} url={cat.url}/>
                )}
            </div>
            </>
          }/>
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
