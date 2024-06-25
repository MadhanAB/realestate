
import './Homepage.css';
import image2 from '../images/banner1-1.jpg.webp';


export default function Homepage(){

    return(
        <div className="content_image">
         <img src={image2} ></img>
            <div className="content">
             <div className='box1'>
             <h2 className='beauty'>Find a Place </h2>
             <h2 className='best'>Where you can be yourself</h2>
             <p>Welcome Home</p>
             </div>
            </div>
        </div>
    )
}

/*<Carousel autoplay>
<div>
  <h3 style={contentStyle}>1</h3>
</div>
<div>
  <h3 style={contentStyle}>2</h3>
</div>
<div>
  <h3 style={contentStyle}>3</h3>
</div>
<div>
  <h3 style={contentStyle}>4</h3>
</div>
</Carousel>*/