import { useState } from "react"

const Menu = (props)=>{
    
    const [selectedState, setSelectedState] = useState('')

    const handleChange = (event) =>{
        setSelectedState(event.target.value)
        // console.log("display:" + selectedState)
        props.setDisplayOption(selectedState)
    }

    return (
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" value="show" onChange = {handleChange} />
            <label className="btn btn-outline-primary" htmlFor="btnradio1">Rodyti</label>
        
            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" value="add" onChange = {handleChange}/>
            <label className="btn btn-outline-primary" htmlFor="btnradio2">Prideti</label>
        </div>
        
    );
  }
  
  export default Menu;
  