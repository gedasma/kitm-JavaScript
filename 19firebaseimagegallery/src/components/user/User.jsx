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
    }, [user,loading])

    return(
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li> */}
          {user &&
          <>
            <li className="nav-item">
              
              <a className="nav-link" aria-current="page">{userData.name}</a>
            </li>
            <li className="nav-item" onClick={logout}>
              <a  className="nav-link active text-decoration-underline" aria-current="page">Atsijungti</a>
            </li>
          </>
          }
        </ul>
    )
}

export default User