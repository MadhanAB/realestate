
import './About.css';
import image18 from '../images/about-thumb.png'
import image19 from '../images/613006347123.jpg';
import {PhoneOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import image1 from "../images/logo-white.svg";
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';

export default function About(){
    return(
        <>

<div className='header_content'>
       <header>
        <div className='header_inside'>
            <div className='logo'>
           <img src={image1}></img>
            </div>
            <nav>
                <ul>
                    <li><a style={{color:"white"}}   href=''>HOME</a>  </li>
                  
                    
                   
                   
                    <li > <a style={{color:"white"}}  href='Contact'>CONTACT</a></li>
                </ul>
            </nav>

           
         
        </div>
       </header>
        </div>



        <div className="about_content">
            <div className="about_inside">
                   <div className='aboutinside_box1'>
                  <img src={image18}></img>
                  
                   </div>
                   <div className='aboutinside_box2' style={{textAlign:'left',padding:'15px',}}>
                    <h1 style={{fontSize:'80px',}}>30+</h1>
                    <h2 style={{color:'navy',}}>Years experience </h2>
                    </div>
                   
               
            </div>
            <div className="about_inside2">
       <h2>Our About us</h2>
       <h1>WE ELEVATE THE BEAUTY OF YOUR HOME</h1>
       <br/>
       <p>Each color evokes different emotions for each individual. Your emotions still depend on your
         individual life experience. ipsum dolor sit amet, ctetur adipisicing elit, 
           sed do eiusmod tempor incididunt ut labore et dolore gna aliqua quis nostrud consequat.</p>
           <br/>
           <br/>
           <ol>
            <li>1 .Quality Architect Designs</li>
            <li>2.100% Satisfaction Guarantee</li>
            <li>3.Highly Professional Members</li>
            <li>4.Deliver Always on Time</li>
           
           </ol>
           <div className='about_box'>
           <img src={image19}></img>
           </div>
           <br/>
           <div className='about_box2'>
          
           <h2>Call US Anytime</h2>
           <h2>+91 888 666 000</h2>
           </div>
           <div className='about_box3'>
           <Space style={{width:100,height:'20px',fontSize:'50px',padding:'20px',color:'orange',}}><PhoneOutlined /></Space>
           </div>

     </div>
        </div>
        <div><Contact/></div>
        </>
    )
}