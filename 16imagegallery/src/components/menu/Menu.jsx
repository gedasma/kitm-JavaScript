import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./menu.scss"

const Menu = ()=>{
    
    const [lastClickedLink, setLastClickedLink] = useState(useLocation().pathname.slice(1));

    const handleLinkClick = (linkName) => {
        setLastClickedLink(linkName)
        console.log(lastClickedLink)
    }
    console.log(useLocation())
    return (
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
            <Link
            to="/show"
            onClick={() => handleLinkClick("show")}
            className={"btn btn-outline-primary menuButton" + (lastClickedLink === "show" ? "--lastClicked" : "")} >
                Galerija
            </Link>

            <Link
            to="/add"
            onClick={() => handleLinkClick("add")}
            className={"btn btn-outline-primary menuButton" + (lastClickedLink === "add" ? "--lastClicked" : "")} >
                Prideti
            </Link>
        </div>
    );
  }
  
  export default Menu;
  