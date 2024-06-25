
import './Service.css'
import image20 from '../images/icon-03.png';
import image21 from '../images/icon-01.png';
import image22 from '../images/icon-04.png';


export default function Service(){
    return(
       <div className='proof'>
        <h2 className='proof_content'>Our Service</h2>
        <br/>
        <h1 style={{color:'navy',fontSize:'40px'}}>WE PROVIDE ROOFING SERVICES</h1>
        <div className='service_content'>
          
        <div className='service_content2'>
            
        <div className='service_content_box1'>
          <img src={image20}></img>
        </div>
        <br/>
        
         <h2>Interior Design For</h2>
         <h2>Apartment</h2>
         <br/>
         <p>Home Architecture</p>
         <p>Element Design</p>
         <p>Qodex Placement</p>
        
        </div>
        <div className='service_content3'>
        <div className='service_content_box2'>
        <img src={image21}></img>
       </div>
       <br/>
     
        <h2>Smart Design For</h2>
        <h2>Apartments</h2>
        <br/>
        <p>Home Architecture</p>
         <p>Element Design</p>
         <p>Qodex Placement</p>
        
        </div>
        <div className='service_content4'>
        <div className='service_content_box3'>
        <img src={image22}></img>
         </div>
         <br/>
        <h2>Renewaable Design </h2>
        <h2>Apartments</h2>
        <br/>
        <p>Home Architecture</p>
         <p>Element Design</p>
         <p>Qodex Placement</p>
        </div>

        </div>
        </div>
    )
}