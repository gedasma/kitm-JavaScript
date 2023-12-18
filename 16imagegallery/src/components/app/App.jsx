import Menu from "../menu/Menu";
import ImageInputForm from "../imageInputForm/ImageInputForm";
import Gallery from "../gallery/Gallery";
import { useState } from "react"

const App = () => {
  const [imageObjectList, setImageObjectList] = useState([])
  const [displayOption, setDisplayOption] = useState('')



  const addImageToList = (imageLink) =>{
    setImageObjectList((prevList) =>{
      return [imageLink, ...prevList]
    })
    console.log(imageObjectList)
    console.log(displayOption + "display")
  }

  return (
    <main className="container">
      <Menu setDisplayOption={setDisplayOption}/>
      {displayOption === "show" && <Gallery imageObjectList={imageObjectList}/>}
      {displayOption === "add" && <ImageInputForm addImageToList={addImageToList}/>}
      
      
    </main>
  );
}

export default App;
