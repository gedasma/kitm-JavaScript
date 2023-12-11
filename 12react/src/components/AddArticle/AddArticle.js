import { useState } from "react"
let articleId = 0

const AddArticle = (props)=>{
    
    const [formData, setFormData] = useState({
        'id':'',
        'title':'',
        'description':''
    })

    const handleChange = (event)=>{
        
        setFormData(
            {
                ...formData,
                [event.target.name]:event.target.value
            }
        )
    }

    const submitHandler = (event) =>{
        articleId += 1
        formData.id = articleId
        event.preventDefault();
        props.onSave(formData)
        props.hideForm()
    }
    console.log(formData);
    return(
        <form className="form" onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text" name="title" placeholder="naujienos pavadinimas" className="m-1 form-control" onChange={handleChange} value={formData.title}/>
            </div>
            <div className="form-group">
                <textarea type="text" name="description" placeholder="naujienos tekstas" className="m-1 form-control" onChange={handleChange} value={formData.description}/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Saugoti</button>
            </div>
        </form>
    )
}

export default AddArticle