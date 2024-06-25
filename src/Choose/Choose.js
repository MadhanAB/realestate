import './Choose.css';
import image23 from '../images/0d582ebd964c43e086e6a1e7476b99a520230902190814126.jpg';

export default function Choose(){
    return(
        <div className="choose_content">
         <div className='choose_inside'>
            <h2 style={{color:'orange',fontFamily:'sans-serif',fontSize:'22px',}}>Why Choose us</h2>
            <br/>
            <h1 style={{fontFamily:'serif',fontSize:'40px',}}>PROVIDING FULL RANGE</h1>
            <h1  style={{fontFamily:'serif',fontSize:'40px',}}>OF HIGH QUALITY.</h1>
            <br/>
            <p style={{color:'grey',fontFamily:'revert-layer',fontSize:'19px',}}>Each color evokes different emotions for each individual. Your emotions</p>
            <p  style={{color:'grey',fontFamily:'revert-layer',fontSize:'19px',}}>still depend on your individual life experience</p>
            <br/>
            <br/>
            <br/>
            <h2 style={{color:'navy',fontFamily:'inherit',fontSize:'25px',}}>Quality Material</h2>
            <p  style={{color:'grey',fontFamily:'revert-layer',fontSize:'17px',}}>Different emotions for each individual. Your emotions still</p>
            <p  style={{color:'grey',fontFamily:'revert-layer',fontSize:'17px',}}>on your individual life experience.</p>
            <br/>
            <h2 style={{color:'navy',fontFamily:'inherit',fontSize:'25px',}}>Standards of Oiled</h2>
            <p  style={{color:'grey',fontFamily:'revert-layer',fontSize:'17px',}}>Different emotions for each individual. Your emotions still</p>
            <p  style={{color:'grey',fontFamily:'revert-layer',fontSize:'17px',}}>on your individual life experience.</p>
         </div>
         <div className='choose_inside2'>
        <img src={image23}></img>
         </div>

        </div>
    )
}