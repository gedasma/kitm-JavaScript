import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { auth, signInWithEmailAndPassword } from "../../services/AuthServices"
import { useAuthState } from "react-firebase-hooks/auth"
import { inputValidation } from "../../utilities/validate"

const Login = ()=>{

    const [credentials, setCredentials] = useState({
        email:'',
        password:''
    })

    const [user, loadng, error] = useAuthState(auth);
    const navigate = useNavigate();

    const handleChange = (event) =>{
        const { value } = event.target;
        setCredentials({
            ...credentials,
            [event.target.name]:value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(credentials.email, credentials.password)

    }

    useEffect(()=>{
        if(loadng) return;
        if(user) navigate('/works')
    },[user,loadng])

    let [isInputInvalid, invalidFieldKey, invalidInputMessage] = inputValidation(credentials, false)

    return(
        <div className="container">
            <h2 className="mt-3 text-center">Prisijungimas</h2>
            <form className="form" onSubmit={submitHandler}>
                <div className="mb-3">
                    <input onChange={handleChange} type="email" name="email" className="form-control" placeholder="Jusu el. pastas"/>
                </div>
                <div className="mb-3">
                    <input onChange={handleChange} type="password" name="password" className="form-control" placeholder="Slaptazodis"/>
                </div>
                <div className="mb-3">
                    <p className="text-danger">{isInputInvalid? invalidInputMessage : ""}</p>
                    <button typeof="button" className={"btn btn-primary" + (isInputInvalid ? " disabled" : "")} type="submit">Prisijungti</button>
                </div>
                <div className="mb-3">
                    <p>Neturite paskyros? <Link to="/register">Registruokites</Link></p>
                </div>
                <div className="mb-3">
                    <p>Nepavyksta prisijungti? <Link to="/password-reset">Atstatykite slaptazodi</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Login