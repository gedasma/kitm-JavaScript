import { useState } from "react"

const ImageInputForm = (props) => {

    const [imageObject, setImageObject] = useState({
        link:'',
        name:''
    })

    const handleChange = (event) =>{
        setImageObject(
            {
                ...imageObject,
                [event.target.name]:event.target.value
            }
        )
        console.log(imageObject)
    }

    const submitImage = (event) =>{
        event.preventDefault()
        props.addImageToList(imageObject)
    }

    return (
        <form className="form" onSubmit={submitImage}>
            <div>
                <input className="form-control" type="text" name="link" id="link" placeholder="Image Link" onChange={handleChange}/>
            </div>
            <div>
                <input className="form-control" type="text" name="name" id="name" placeholder="Image Name" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Pridėti</button>
            </div>
        </form>
    );
  }
  
  export default ImageInputForm;
  