import { useEffect } from "react"
import { useState } from "react"
import Breed from "../breed/Breed"

const Search = (props)=> {
    const [breeds, setBreeds] = useState([])

    useEffect(()=>{
          try{
            fetch(`https://api.thecatapi.com/v1/breeds`)
            .then(response=>response.json())
            .then(data=>setBreeds(data))
          }
          catch(msg){
            console.log("nera!: " + msg)
          }
        
      },[])
    
    //   console.log(breeds)

    return (
      <>
        <input onChange={props.handleSearch} type="text" name="" list="breeds" />
        <datalist id="breeds">
          {breeds.map((breed)=>
            <Breed key={breed.id} breed={breed}></Breed>
          )}
        </datalist>
      </>
     
    );
  }
  
  export default Search;
  