import { Button, Modal } from 'react-bootstrap';
import { useState } from "react"
import * as service from "../../services/ImageCrudSerivces"
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";
import { inputValidation } from "../../utilities/validate";

const AddImage = ({ show, handleClose }) => {
    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate();
    const [image, setImage] = useState({
        url:'',
        uid:''
    })

    const handleChange = (event) =>{
        const { name, value } = event.target;
        
        setImage({
            ...image,
            [event.target.name]:value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        service.addImage({
            ...image,
            uid:user.uid
        })
        navigate("/");
    }

    let [isInputInvalid, invalidFieldKey, invalidInputMessage] = inputValidation(image, false)

    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add image to your gallery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='form' onSubmit={submitHandler}>
            <div className="mb-3">
                <input name="url" id="url" className="form-control" placeholder="Image URL" value={image.url} onChange={handleChange}></input>
            </div>
            <div className="mb-3">
                <p className="text-danger">{isInputInvalid? invalidInputMessage : ""}</p>
                <button className={"btn btn-primary" + (isInputInvalid ? " disabled" : "")} type="submit">Add Image</button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    );
  };

export default AddImage