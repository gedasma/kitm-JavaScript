import { Button, Modal } from 'react-bootstrap';
import { useState } from "react"
import * as service from "../../services/ImageCrudSerivces"
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";
import { inputValidation } from "../../utilities/validate";

const DisplayImage = ({ show, handleClose, imageURL }) => {

    return (
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title className='overflow-auto'>{imageURL}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='mx-auto'>
            <div><img className='img-fluid' src={imageURL} alt="" /></div>
        </Modal.Body>
      </Modal>
    );
  };

export default DisplayImage