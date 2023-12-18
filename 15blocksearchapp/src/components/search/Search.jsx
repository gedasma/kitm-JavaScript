const Search = ({val, onSearch,...props}) =>{
    return(
        <input className="form-control m-3"
        value={val}
        onChange={onSearch}
        placeholder="Posto pavadinimas"
        />
    )
}

export default Search