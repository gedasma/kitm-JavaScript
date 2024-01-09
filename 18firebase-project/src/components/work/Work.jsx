import { Link, useLocation } from "react-router-dom";
import * as service from "../../services/TimesCrudSerivces"
import { useNavigate } from "react-router-dom";

const Work = (props)=>{
    const navigate = useNavigate();
    const deleteHandler = () =>{
        service.deleteWork(props.work.id)
        navigate('/')
    }

    return(
        <tr>
            <td>{props.work.date}</td>
            <td>{props.work.company}</td>
            <td>{props.work.service}</td>
            <td>{props.work.description}</td>
            <td>{props.work.from}</td>
            <td>{props.work.to}</td>
            <td><Link to={"/update-work/" + props.work.id}><button className="btn btn-primary">Keisti</button></Link></td>
            <td><a onClick={deleteHandler} className="btn btn-primary">Trinti</a></td>          
        </tr>
    )
}

export default Work