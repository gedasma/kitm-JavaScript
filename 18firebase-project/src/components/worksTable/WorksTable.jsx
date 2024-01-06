import Work from "../work/Work"

const WorksTable = (props)=>{
    return(
        <table className="table table-bordered table-stripped">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Klientas</th>
                    <th>Suteikta Paslauga</th>
                    <th>Aprasymas</th>
                    <th>Nuo</th>
                    <th>Iki</th>
                    <th>Keisti</th>
                    <th>Salinti</th>
                </tr>
            </thead>
            <tbody>
                {props.works.map((work)=>
                    <Work key={work.id} work={work}/>
                )}
            </tbody>
        </table>
    )
}

export default WorksTable