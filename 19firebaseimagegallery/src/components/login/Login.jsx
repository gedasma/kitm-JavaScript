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
        if(user) navigate('/gallery')
    },[user,loadng])

    let [isInputInvalid, invalidFieldKey, invalidInputMessage] = inputValidation(credentials, false)

    return(
        <div className="container">
            <h2 className="mt-3 text-center">Login</h2>
            <form className="form" onSubmit={submitHandler}>
                <div className="mb-3">
                    <input onChange={handleChange} type="email" name="email" className="form-control" placeholder="Your email"/>
                </div>
                <div className="mb-3">
                    <input onChange={handleChange} type="password" name="password" className="form-control" placeholder="Password"/>
                </div>
                <div className="mb-3">
                    <p className="text-danger">{isInputInvalid? invalidInputMessage : ""}</p>
                    <button typeof="button" className={"btn btn-primary" + (isInputInvalid ? " disabled" : "")} type="submit">Login</button>
                </div>
                <div className="mb-3">
                    <p>Dont have an account? <Link to="/register">Register</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Login