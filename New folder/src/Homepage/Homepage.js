
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