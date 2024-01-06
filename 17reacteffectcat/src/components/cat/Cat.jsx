const Cat = (props)=> {
    return (
      <div className="col-2">
        <h3>{props.id}</h3>
        <img src={props.url} alt="" />
      </div>
      
      
    );
  }
  
  export default Cat;
  