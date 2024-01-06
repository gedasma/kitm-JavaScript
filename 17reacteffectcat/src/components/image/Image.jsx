import './image.scss'

const Image = (props) => {
    return (
      <div className="col-3 mb-4 imageObject">
        <img className="img-fluid" src={props.imageLink} alt="" />
        <h4>{props.imageName}</h4>
      </div>
    );
  }
  
  export default Image;
  