import { Link, useLocation } from "react-router-dom";
import WorksTable from "../worksTable/WorksTable"
import { useEffect, useState } from "react";
import * as service from "../../services/TimesCrudSerivces"
import { auth } from "../../services/AuthServices"
import { useAuthState } from "react-firebase-hooks/auth"

const Works = ()=>{
    const [works, setWorks] = useState([]);
    const [user, loadng, error] = useAuthState(auth);

    useEffect(()=>{
        if(loadng) return;
        if(user){
            service.getAllWorks(works=>
            setWorks(works), user)
        }
    }, [user, loadng])

    console.log(works)

    return(
        <div className="container">
            <Link to="/add"><button>Prideti darba</button></Link>
            <h2>Works</h2>
            <WorksTable works={works}/>
            
        </div>
        
    )
}

export default Works