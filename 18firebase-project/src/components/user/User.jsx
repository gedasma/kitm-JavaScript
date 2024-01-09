import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import * as UserServices from "../../services/UserServices"
import { auth, logout } from "../../services/AuthServices"

const User = ()=>{
    const [userData, setUserData] = useState({})
    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate();

    useEffect(()=>{
        if(loading) return;
        if (!user) navigate("/");
        UserServices.getUserData(user,setUserData)
    }, [user,loading,userData])

    return(
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Pradinis</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li> */}
          {user &&
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              {userData.name}
            </a>
            <ul className="dropdown-menu">
              <li className="dropdown-item">{userData.email}</li>
              <li onClick={logout}>Atsijungti</li>
            </ul>
          </li>
          }
        </ul>
    )
}

export default User