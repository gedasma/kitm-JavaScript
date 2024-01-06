const Breed = (props)=> {
    return (
        <option value={props.breed.id}>{props.breed.name}</option>
    );
  }
  
  export default Breed;
  