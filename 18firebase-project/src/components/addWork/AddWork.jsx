import { Link, Navigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import * as service from "../../services/TimesCrudSerivces"
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/AuthServices";
import { inputValidation } from "../../utilities/validate";

const AddWork = ()=>{

    const [user, loading, error] = useAuthState(auth)
    const {id} = useParams();
    const navigate = useNavigate();
    const [items, setItems] = useState({
        date:'',
        company:'',
        service:'',
        description:'',
        from:'',
        to:'',
        uid:''
    })

    useEffect(()=>{
        id && service.showById(item=>setItems(item), id)
    }, [id])

    const handleChange = (event) =>{
        const { name, value } = event.target;
        
        setItems({
            ...items,
            [event.target.name]:value
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        if(id)
        {
            service.updateWork(id, items)
        }
        else
        {
            service.addWork({
                ...items,
                uid:user.uid
            })
        }
        navigate("/");
    }

    let [isInputInvalid, invalidFieldKey, invalidInputMessage] = inputValidation(items, false)

    return(
        <div className="card">
            <div className="card-header">
                <h2>Prideti atlikta darba</h2>
            </div>
            <div className="card-body">
                <form className="form" onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label htmlFor="date">Pasirinkite data:</label>
                        <input className="form-control" id="date" type="date" name="date" value={items.date} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <select name="company" id="company" className="form-control" value={items.company} onChange={handleChange}>
                            <option value="kb">Kilobaitas</option>
                            <option value="it">IT sfera</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <select name="service" id="service" className="form-control" value={items.service} onChange={handleChange}>
                            <option value="dev">Development</option>
                            <option value="ux">UX design</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <textarea name="description" id="description" className="form-control" placeholder="Darbo aprasymas" value={items.description} onChange={handleChange}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="from">Nuo:</label>
                        <input type="time" id="from" name="from" value={items.timeFrom} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="to">Iki:</label>
                        <input type="time" id="to" name="to" value={items.timeTo} onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <p className="text-danger">{isInputInvalid? invalidInputMessage : ""}</p>
                        <button className={"btn btn-primary" + (isInputInvalid ? " disabled" : "")} type="submit">{ id? "Atnaujinti": "Saugoti"}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddWork