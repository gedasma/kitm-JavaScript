import { Link, useLocation } from "react-router-dom";
import WorksTable from "../worksTable/WorksTable"
import { useEffect, useState } from "react";
import * as service from "../../services/services"


const Works = ()=>{
    const [works, setWorks] = useState([]);

    useEffect(()=>{
        service.getAllWorks(works=>{
            setWorks(works)
        })
    }, [])

    console.log(works)

    return(
        <div className="container">
            <Link to="add"><button>Prideti darba</button></Link>
            <h2>Works</h2>
            <WorksTable works={works}/>
            
        </div>
        
    )
}

export default Works