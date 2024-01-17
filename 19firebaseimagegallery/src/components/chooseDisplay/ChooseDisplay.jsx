import { Button, Modal } from 'react-bootstrap';
import { useState } from "react"
import * as service from "../../services/ImageCrudSerivces"
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";
import { inputValidation } from "../../utilities/validate";
import displayImage1 from '../../resources/DisplayType1.png'
import displayImage2 from '../../resources/DisplayType2.png'
import displayImage3 from '../../resources/DisplayType3.png'
import displayImage4 from '../../resources/DisplayType4.png'
// import './chooseDisplay.scss'

const ChooseDisplay = ({ show, handleClose, setDisplayType }) => {

    const handleDisplayChoice = (displayType) => {
        setDisplayType(displayType)
        handleClose()
    };

    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='overflow-auto'>Choose Display Type</Modal.Title>
        </Modal.Header>
        <Modal.Body className='mx-auto'>
            <div className="row mb-3">
                <div className='col align-self-start'><button onClick={()=>{handleDisplayChoice(1)}}><img src={displayImage1} alt="displaytype1"/></button></div>
                <div className='col align-self-end'><button onClick={()=>{handleDisplayChoice(2)}}><img src={displayImage2} alt="displaytype2"/></button></div>
                
            </div>
            <div className='row mb-3'>
            <div className='col align-self-start'><button onClick={()=>{handleDisplayChoice(3)}}><img src={displayImage3} alt="displaytype3"/></button></div>
                <div className='col align-self-end'><button onClick={()=>{handleDisplayChoice(4)}}><img src={displayImage4} alt="displaytype4"/></button></div>
            </div>
            
        </Modal.Body>
      </Modal>
    );
  };

export default ChooseDisplay