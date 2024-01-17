import { Link, useLocation } from "react-router-dom";
import * as service from "../../services/ImageCrudSerivces"
import { useNavigate } from "react-router-dom";
import DisplayImage from "../displayImage/DisplayImage";
import { useState } from "react"
import trashIcon from '../../resources/rubbish-bin-svgrepo-com.svg'

const GalleryImage = (props)=>{
    const navigate = useNavigate();
    const deleteHandler = () =>{
        service.deleteImage(props.image.id)
    }

    const [displayFullImage, setDisplayFullImage] = useState(false);

    const handleShowFullImage = () => {
        setDisplayFullImage(true);
    };

    const handleCloseFullImage = () => {
        setDisplayFullImage(false);
    };

    return(
        // <tr>
        //     <td>{props.work.date}</td>
        //     <td>{props.work.company}</td>
        //     <td>{props.work.service}</td>
        //     <td>{props.work.description}</td>
        //     <td>{props.work.from}</td>
        //     <td>{props.work.to}</td>
        //     <td><Link to={"/update-work/" + props.work.id}><button className="btn btn-primary">Keisti</button></Link></td>
        //     <td><a onClick={deleteHandler} className="btn btn-primary">Trinti</a></td>          
        // </tr>
        <div className={"imageGallery__image" + " imageGallery__image--displayType" + props.displayType}>
            <div className="imageGallery__image__container" onClick={handleShowFullImage}><img src={props.image.url} alt="Borken Image Link"/></div>
            <button className="imageGallery__image__delete" onClick={deleteHandler}><img src={trashIcon} alt="trashIcon" /></button>
            <DisplayImage show = {displayFullImage} handleClose = {handleCloseFullImage} imageURL = {props.image.url}/>
        </div>
    )
}

export default GalleryImage