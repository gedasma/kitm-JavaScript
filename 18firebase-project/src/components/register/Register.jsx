
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, registerWithEmailAndPassword } from "../../services/AuthServices"
import { inputValidation } from "../../utilities/validate"

const Register = ()=>{

    const [userData, setUserData] = useState({
        userName:'',
        email:'',
        password:''
    })

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const handleChange = (event) =>{
        const { value } = event.target;
        setUserData({
            ...userData,
            [event.target.name]:value
        })
        
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(userData)
        registerWithEmailAndPassword(userData.userName, userData.email, userData.password)
    }

    useEffect(()=>{
        if(loading) return;
        if(user) navigate('/works')
    },[user,loading])

    let [isInputInvalid, invalidFieldKey, invalidInputMessage] = inputValidation(userData, true)

    return(
        <div className="container">
            <h2 className="mt-3 text-center">Registruokis</h2>
            <form className="form" onSubmit={submitHandler}>
                <div className="mb-3">
                    <input onChange={handleChange} type="text" name="userName" className="form-control" placeholder="Jusu vardas"/>
                </div>
                <div className="mb-3">
                    <input onChange={handleChange} type="email" name="email" className="form-control" placeholder="Jusu el. pastas"/>
                </div>
                <div className="mb-3">
                    <input onChange={handleChange} type="password" name="password" className="form-control" placeholder="Slaptazodis"/>
                </div>
                <div className="mb-3">
                    <p className="text-danger">{isInputInvalid? invalidInputMessage : ""}</p>
                    <button type="submit" className={"btn btn-primary" + (isInputInvalid ? " disabled" : "")}>Registruotis</button>
                </div>
                <div className="mb-3">
                    <p>Turite paskyra? <Link to="/">Galite prisijungti</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Register