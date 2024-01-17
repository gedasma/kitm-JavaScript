import AddImage from '../addImage/AddImage';
import { useEffect, useState } from "react";
import * as service from "../../services/ImageCrudSerivces"
import { auth } from "../../services/AuthServices"
import { useAuthState } from "react-firebase-hooks/auth"
import GalleryImage from '../galleryImage/GalleryImage';
import './gallery.scss'
import ChooseDisplay from '../chooseDisplay/ChooseDisplay';

const Gallery = ()=>{
    const [showAddForm, setShowAddForm] = useState(false);

    const handleShowAddForm = () => {
        setShowAddForm(true);
    };

    const handleCloseAddForm = () => {
        setShowAddForm(false);
    };

    const [displayType, setDisplayType] = useState(1);

    const [showDisplayForm, setShowDisplayForm] = useState(false);

    const handleShowDisplayForm = () => {
        setShowDisplayForm(true);
    };

    const handleCloseDisplayForm = () => {
        setShowDisplayForm(false);
    };


    const [images, setImages] = useState([]);
    const [user, loadng, error] = useAuthState(auth);

    useEffect(()=>{
        if(loadng) return;
        if(user){
            service.getAllImages(images=>
            setImages(images), user)
        }
    }, [user, loadng])

    console.log(images)
    console.log("displayType: "+displayType)

    return(
        <div className='container mb-3 mt-3'>
            <div className='buttons mt-1 mb-1'>
                <button className='buttons__add btn btn-primary' onClick={handleShowAddForm}>+</button>
                <button className='buttons__display btn btn-primary' onClick={handleShowDisplayForm}>Display Type</button>
            </div>
            <ChooseDisplay show={showDisplayForm} handleClose={handleCloseDisplayForm} setDisplayType={setDisplayType}/>
            <AddImage show={showAddForm} handleClose={handleCloseAddForm}/>
            <div className='imageGallery'>
                {images.map((image)=>
                    <GalleryImage key={image.id} image={image} displayType={displayType}/>
                )}
            </div>
        </div>
    )
}

export default Gallery