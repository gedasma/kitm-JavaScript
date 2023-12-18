import Image from "../image/Image";
const Gallery = (props)=> {
  return (
    <div className="row">
    <h2>galery</h2>
    {props.imageObjectList.map((imageObject)=>
        <Image key={Math.random().toString(36).substr(2, 9)} imageLink={imageObject.link} imageName={imageObject.name}/>
    )}
    </div>
    
    
  );
}

export default Gallery;
