import User from "../user/User"

const Header = ()=>{
    return(
        // <nav className="navbar bg-blody-tertiary">
        //     <div className="container-fluid">
        //         <a className="navbar-brand" href="/">Time Table App</a>
        //         <div className="navbar-collapse justify-content-end">
        //             <a className="nav-link" href="/">Pradinis</a>
        //             <div className="nav-item dropdown">
        //               <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                 Dropdown button
        //               </button>
        //               <ul className="dropdown-menu">
        //                 <li><a className="dropdown-item" href="/register">Registruotis</a></li>
        //               </ul>
        //             </div>
        //         </div>
                

        //     </div>
        // </nav>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Time Table App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <User/>
          </div>
        </div>
      </nav>
    )
}

export default Header