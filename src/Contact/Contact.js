
import './Contact.css'
import image25 from '../images/banner1-1.jpg.webp';
import image26 from '../images/logo-white.svg';
import {InstagramOutlined ,GoogleOutlined , FacebookOutlined ,PhoneOutlined,HeatMapOutlined,MessageOutlined  } from '@ant-design/icons';
import { Space } from 'antd';

export default function Contact(){
    return(
        <div className='contact_content'>
           
           <img src={image25}></img>
            <div className='contact_inside'>
              </div>
            <div className='contact_inside2'>
                <div className='contact_box1'>
                <img src={image26}></img>
                </div>
                <br/>
           <p style={{textAlign:'left',marginLeft:'40px',color:'white',fontFamily:'inherit',}}>There are many variations of pass Lorem Ipsum available there is ut duis vel quis
             dignissim nulla vel hendrerit maecenasctetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore gna aliqua quis nostrud consequat. </p>
            <br/>
             <div className='contact_box2'>
             <Space className="hover_white" style={{fontSize:'30px',color:'orange',}}><InstagramOutlined /></Space>
             <Space className="hover_white" style={{fontSize:'30px',color:'orange',}}><GoogleOutlined /></Space>
             <Space className="hover_white" style={{fontSize:'30px',color:'orange',}}><FacebookOutlined /></Space>
             </div>
            </div>
            <div className='contact_inside3'>
                <br/>
                <br/>
                <h2 style={{color:'white',}}>Our Services</h2>
                <br/>
                <br/>
                <ul style={{fontSize:'18px',}}>
                    <li><a className="hover_white" style={{color:'white',}} href='Architecture design'>Architecture design</a></li>
                    <br/>
                    <li ><a className="hover_white" style={{color:'white',}}href='Design & Planning'>Design & Planning</a></li>
                    <br/>
                    <li><a className="hover_white" style={{color:'white',}} href='Furniture & Decor'>Furniture & Decor</a></li>
                    <br/>
                    <li><a className="hover_white" style={{color:'white',}}  href='Construction Art Design'>Construction Art Design</a></li>
                    <br/>
                    <li><a className="hover_white" style={{color:'white',}} href='Lighting Design'>Lighting Design</a></li>
                </ul>
                </div>
                <div className='contact_inside4'>
                <h2 style={{color:'white',fontFamily:'sans-serif'}}>Contact us</h2>
                <div className='contact1'>
               <Space style={{fontSize:'25px',}}><HeatMapOutlined /></Space>
               <p>2334 Peterson Street Kingston USA</p>
                </div>
                <div className='contact2'>
                <Space style={{fontSize:'25px',}}><PhoneOutlined /></Space> 
                <p>+199 1123-2234-21</p>
                </div>
                <div className='contact3'>
                <Space style={{fontSize:'25px',}}><MessageOutlined /></Space>
                <p>Example@gmail.com</p> 
                </div>
              
                </div>
              
        </div>
    )
}