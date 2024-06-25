

import './Apartment.css';
import './Page.css';
import React, { useState } from 'react';
import { TinyColor } from '@ctrl/tinycolor';
import { Button, ConfigProvider, Space, Carousel } from 'antd';
import {  Drawer } from 'antd';
import image1 from "../images/logo-white.svg";
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';
import {  Modal } from 'antd';

import image25 from '../images/banner1-1.jpg.webp';
import image26 from '../images/logo-white.svg';
import {InstagramOutlined ,GoogleOutlined , FacebookOutlined ,PhoneOutlined,HeatMapOutlined,MessageOutlined  } from '@ant-design/icons';

import image15 from '../images/slid-1.jpg';
import image16 from '../images/slid-2.jpg';
import image17 from '../images/slid-3.jpg';


import { EnvironmentFilled ,CopyOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

const items = [
  {
    key: 'sub1',
    icon: <MenuUnfoldOutlined />,
    
    children: [
      {
        key: '1',
        label: 'Option 9',
      },
      {
        key: '2',
        label: 'Option 10',
      },
      {
        key: '3',
        label: 'Option 10',
      },
      {
        key: '4',
        label: 'Option 10',
      },
      {
        key: '5',
        label: 'Option 10',
      }, {
        key: '6',
        label: 'Option 10',
      },
    ],
  },
];




const contentStyle = {
  margin: 0,
  height: '350px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};


const { Header, Content, Footer, Sider } = Layout;

const Home = () => <div>Home Page</div>;

const Page1 = () => {
  

  const [modal1Open, setModal1Open] = useState(false);
  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };
  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  



  const copyText = () => {
    const textToCopy = document.getElementById('textToCopy').innerText;
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Text copied to clipboard!');
  };
  return(
    
  
  <div className='apart2'>
  <div className='apart2_box1'>
   <div className='apartbox1_content1'>
  <img src={image15}></img>
  </div>
  <div className='apartbox1_content2'>
    <div style={{textAlign:"left",fontSize:"17px"}}>
   <h3 style={{fontFamily:"serif",color:"orange"}}>Gevora Hotel - The Tallest Hotel in The World</h3>
   </div>
   <br/>
   <div style={{display:"flex",textAlign:"left"}}>
   <p style={{fontSize:"12px"}} id='textToCopy'><a href='2655+2V9, MKN Rd, Ramapuram, Guindy, Chennai, Tamil Nadu 600032'>2655+2V9, MKN Rd, Ramapuram, Guindy, Chennai, Tamil Nadu 600032-View on map</a></p>
   <button style={{fontSize:'15px',border:"1px solid white"}} onClick={copyText}><CopyOutlined /></button>
  
   
   </div>
   <br/>
   <p style={{textAlign:"left",fontFamily:"sans-serif",color:"gray"}}>"Genora Hotel is located in central of Guindy all staffs are good service mind and kind to Guest. Very easy to accessal area in Guindy. Very easy to access all are in guindy. Hotel Restaurant and facilities</p>
  </div>
  <div className='apartbox1_content3'>
  <div style={{display:"flex",textAlign:"right",marginLeft:"140px",marginTop:"4px"}}>
    <div >
      <p style={{fontFamily:"-moz-initial",color:"navy",fontSize:"17px"}}>Excellent</p>
      <p>1000 reviews</p>
    </div>
    <div style={{width:"20%",height:"37px",border:"2px solid blue",marginLeft:'20px',textAlign:"center",padding:"5px 0px",borderRadius:"10px 0px 0px"}}>
    <p style={{color:"blue"}} >8.2</p>
    </div>
   
  </div>
  <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <p style={{textAlign:"right",fontFamily:"-moz-initial",fontSize:"17px"}}>Average price per square feet</p>
    <h1 style={{textAlign:"right",color:"red"}}>Rs. 11,265</h1>
    <br/>

    <Button style={{marginLeft:"130px"}} type="primary" onClick={showDrawer}>
       View more details
    </Button>
     <Drawer title="Apartment details" width={420} closable={false} onClose={onClose} open={open}>
     <div style={{width:"100%",height:"250px",}}>
      <img style={{width:"100%",height:"250px"}} src={image15}></img>
     </div>
     <div style={{width:"100%",height:"270px"}}>
      <br/>
     <h3 style={{textAlign:"center",color:"orange"}}>Project Details</h3>
     <br/>
     <ol style={{fontFamily:"-moz-initial",fontSize:"17px",textAlign:"left",marginLeft:"5px",color:"navy"}}>
      <li style={{marginBottom:"-12px"}}>1.Location - Guindy</li>
      <br/>
      <li style={{marginBottom:"-12px"}}>2.Property dimension - 1200 squarefeet</li>
      <br/>
      <li style={{marginBottom:"-12px"}}>3.Type of system - Split level system</li>
      <br/>
      <li style={{marginBottom:"-12px"}} >4.Building height - 45cm</li>
      <br/>
      <li style={{marginBottom:"-12px"}}>5.Type of Building - Residential building </li>
      <br/>
      <li style={{marginBottom:"-12px"}}>6.Property rate - 11956 per squarefeet </li>
      <br/>
      <li>7.Soil Type - Medium </li>
     </ol>
     </div>
     <br/>
        <Button type="primary" onClick={showChildrenDrawer}>
          Contact us
        </Button>
       
        <Drawer
          title="Contact us"
          width={320}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
        >
         <div>
          <h1>Contact With Our</h1>
          <h1>Certified Experts</h1>
          <br/>
          <p>Connect with our certified experts today for professional guidance
             and solutions tailored to your needs. Whether it's real estate, finance,
              or any other field, our experts are here to provide you with the expertise 
              and insights you require to achieve your goals. Don't hesitate to reach out;
               we're ready to assist you. </p>
               <br/>
        <div style={{display:"flex"}}>

        </div>
         </div>
        </Drawer>
      </Drawer>

  </div>
 
  </div>
  <div className='apart2_box2'>
  <div className='apartbox2_content1'>
  <img src={image15}></img>
  </div>
  <div className='apartbox2_content2'>
  
  <div style={{textAlign:"left",fontSize:"17px"}}>
   <h3 style={{fontFamily:"serif",color:"orange"}}>Gevora Hotel - The Tallest Hotel in The World</h3>
   </div>
   <br/>
   <div style={{display:"flex",textAlign:"left"}}>
   <p style={{fontSize:"12px"}} id='textToCopy'><a href='2655+2V9, MKN Rd, Ramapuram, Guindy, Chennai, Tamil Nadu 600032'>2655+2V9, MKN Rd, Ramapuram, Guindy, Chennai, Tamil Nadu 600032-View on map</a></p>
   <button style={{fontSize:'15px',border:"1px solid white"}} onClick={copyText}><CopyOutlined /></button>
  
   
   </div>
   <br/>
   <p style={{textAlign:"left",fontFamily:"sans-serif",color:"gray"}}>"Genora Hotel is located in central of Guindy all staffs are good service mind and kind to Guest. Very easy to accessal area in Guindy. Very easy to access all are in guindy. Hotel Restaurant and facilities</p>





  </div>
  <div className='apartbox2_content3'>
  
  <div style={{display:"flex",textAlign:"right",marginLeft:"140px",marginTop:"4px"}}>
    <div >
      <p style={{fontFamily:"-moz-initial",color:"navy",fontSize:"17px"}}>Excellent</p>
      <p>1000 reviews</p>
    </div>
    <div style={{width:"20%",height:"37px",border:"2px solid blue",marginLeft:'20px',textAlign:"center",padding:"5px 0px",borderRadius:"10px 0px 0px"}}>
    <p style={{color:"blue"}} >8.2</p>
    </div>
   
  </div>
  <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <p style={{textAlign:"right",fontFamily:"-moz-initial",fontSize:"17px"}}>Average price per square feet</p>
    <h1 style={{textAlign:"right",color:"red"}}>Rs. 11,265</h1>
    <br/>

    <Button style={{marginLeft:"130px"}} type="primary" onClick={showDrawer}>
       View more details
    </Button>
     <Drawer title="Apartment details" width={420} closable={false} onClose={onClose} open={open}>
     <div style={{width:"100%",height:"250px",}}>
      <img style={{width:"100%",height:"250px"}} src={image15}></img>
     </div>
     <div style={{width:"100%",height:"270px"}}>
      <br/>
     <h3 style={{textAlign:"center",color:"orange"}}>Project Details</h3>
     <br/>
     <ol style={{fontFamily:"-moz-initial",fontSize:"17px",textAlign:"left",marginLeft:"5px",color:"navy"}}>
      <li style={{marginBottom:"-12px"}}>1.Location - Guindy</li>
      <br/>
      <li style={{marginBottom:"-12px"}}>2.Property dimension - 1200 squarefeet</li>
      <br/>
      <li style={{marginBottom:"-12px"}}>3.Type of system - Split level system</li>
      <br/>
      <li style={{marginBottom:"-12px"}} >4.Building height - 45cm</li>
      <br/>
      <li style={{marginBottom:"-12px"}}>5.Type of Building - Residential building </li>
      <br/>
      <li style={{marginBottom:"-12px"}}>6.Property rate - 11956 per squarefeet </li>
      <br/>
      <li>7.Soil Type - Medium </li>
     </ol>
     </div>
     <br/>
        <Button type="primary" onClick={showChildrenDrawer}>
          Contact us
        </Button>
       
        <Drawer
          title="Contact us"
          width={320}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
        >
         <div>
          <h1>Contact With Our</h1>
          <h1>Certified Experts</h1>
          <br/>
          <p>Connect with our certified experts today for professional guidance
             and solutions tailored to your needs. Whether it's real estate, finance,
              or any other field, our experts are here to provide you with the expertise 
              and insights you require to achieve your goals. Don't hesitate to reach out;
               we're ready to assist you. </p>
               <br/>
        <div style={{display:"flex"}}>

        </div>
         </div>
        </Drawer>
      </Drawer>





  </div>
  </div>
  <div className='apart2_box3'>
  <div className='apartbox3_content1'>
  <img src={image15}></img>
  </div>
  <div className='apartbox3_content2'>

  <div style={{textAlign:"left",fontSize:"17px"}}>
   <h3 style={{fontFamily:"serif",color:"orange"}}>Gevora Hotel - The Tallest Hotel in The World</h3>
   </div>
   <br/>
   <div style={{display:"flex",textAlign:"left"}}>
   <p style={{fontSize:"12px"}} id='textToCopy'><a href='2655+2V9, MKN Rd, Ramapuram, Guindy, Chennai, Tamil Nadu 600032'>2655+2V9, MKN Rd, Ramapuram, Guindy, Chennai, Tamil Nadu 600032-View on map</a></p>
   <button style={{fontSize:'15px',border:"1px solid white"}} onClick={copyText}><CopyOutlined /></button>
  
   
   </div>
   <br/>
   <p style={{textAlign:"left",fontFamily:"sans-serif",color:"gray"}}>"Genora Hotel is located in central of Guindy all staffs are good service mind and kind to Guest. Very easy to accessal area in Guindy. Very easy to access all are in guindy. Hotel Restaurant and facilities</p>


  </div>
  <div className='apartbox3_content3'>
 
  <div style={{display:"flex",textAlign:"right",marginLeft:"140px",marginTop:"4px"}}>
    <div >
      <p style={{fontFamily:"-moz-initial",color:"navy",fontSize:"17px"}}>Excellent</p>
      <p>1000 reviews</p>
    </div>
    <div style={{width:"20%",height:"37px",border:"2px solid blue",marginLeft:'20px',textAlign:"center",padding:"5px 0px",borderRadius:"10px 0px 0px"}}>
    <p style={{color:"blue"}} >8.2</p>
    </div>
   
  </div>
  <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <p style={{textAlign:"right",fontFamily:"-moz-initial",fontSize:"17px"}}>Average price per square feet</p>
    <h1 style={{textAlign:"right",color:"red"}}>Rs. 11,265</h1>
    <br/>

    <Button style={{marginLeft:"130px"}} type="primary" onClick={showDrawer}>
       View more details
    </Button>
     <Drawer title="Apartment details" width={420} closable={false} onClose={onClose} open={open}>
     <div style={{width:"100%",height:"250px",}}>
      <img style={{width:"100%",height:"250px"}} src={image15}></img>
     </div>
     <div style={{width:"100%",height:"270px"}}>
      <br/>
     <h3 style={{textAlign:"center",color:"orange"}}>Project Details</h3>
     <br/>
     <ol style={{fontFamily:"-moz-initial",fontSize:"17px",textAlign:"left",marginLeft:"5px",color:"navy"}}>
      <li style={{marginBottom:"-12px"}}>1.Location - Guindy</li>
      <br/>
      <li style={{marginBottom:"-12px"}}>2.Property dimension - 1200 squarefeet</li>
      <br/>
      <li style={{marginBottom:"-12px"}}>3.Type of system - Split level system</li>
      <br/>
      <li style={{marginBottom:"-12px"}} >4.Building height - 45cm</li>
      <br/>
      <li style={{marginBottom:"-12px"}}>5.Type of Building - Residential building </li>
      <br/>
      <li style={{marginBottom:"-12px"}}>6.Property rate - 11956 per squarefeet </li>
      <br/>
      <li>7.Soil Type - Medium </li>
     </ol>
     </div>
     <br/>
        <Button type="primary" onClick={showChildrenDrawer}>
          Contact us
        </Button>
       
        <Drawer
          title="Contact us"
          width={320}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
        >
         <div>
          <h1>Contact With Our</h1>
          <h1>Certified Experts</h1>
          <br/>
          <p>Connect with our certified experts today for professional guidance
             and solutions tailored to your needs. Whether it's real estate, finance,
              or any other field, our experts are here to provide you with the expertise 
              and insights you require to achieve your goals. Don't hesitate to reach out;
               we're ready to assist you. </p>
               <br/>
        <div style={{display:"flex"}}>
         
        <Button type="primary" onClick={() => setModal1Open(true)}>
        Call us
      </Button>


      <Modal
        title="20px to Top"
        style={{
          top: 20,
        }}
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>

        </div>
         </div>
        </Drawer>
      </Drawer>

  </div>
  </div>
  </div>
  );
};
const Page2 = () => {
   
  const [modal1Open, setModal1Open] = useState(false);

  {

    const [open, setOpen] = useState(false);
    const [childrenDrawer, setChildrenDrawer] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
    const showChildrenDrawer = () => {
      setChildrenDrawer(true);
    };
    const onChildrenDrawerClose = () => {
      setChildrenDrawer(false);
    };
  
    
  
  
  
    const copyText = () => {
      const textToCopy = document.getElementById('textToCopy').innerText;
      const textarea = document.createElement('textarea');
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      textarea.setSelectionRange(0, 99999);
      document.execCommand('copy');
      document.body.removeChild(textarea);
      alert('Text copied to clipboard!');
    };
    return(
      
    
    <div className='apart2'>
    <div className='apart2_box1'>
     <div className='apartbox1_content1'>
    <img src={image15}></img>
    </div>
    <div className='apartbox1_content2'>
      <div style={{textAlign:"left",fontSize:"17px"}}>
     <h3 style={{fontFamily:"serif",color:"orange"}}>Gevora Hotel - The Tallest Hotel in The World</h3>
     </div>
     <br/>
     <div style={{display:"flex",textAlign:"left"}}>
     <p style={{fontSize:"12px"}} id='textToCopy'><a href='2655+2V9, MKN Rd, Ramapuram, Guindy, Chennai, Tamil Nadu 600032'>2655+2V9, MKN Rd, Ramapuram, Guindy, Chennai, Tamil Nadu 600032-View on map</a></p>
     <button style={{fontSize:'15px',border:"1px solid white"}} onClick={copyText}><CopyOutlined /></button>
    
     
     </div>
     <br/>
     <p style={{textAlign:"left",fontFamily:"sans-serif",color:"gray"}}>"Genora Hotel is located in central of Guindy all staffs are good service mind and kind to Guest. Very easy to accessal area in Guindy. Very easy to access all are in guindy. Hotel Restaurant and facilities</p>
    </div>
    <div className='apartbox1_content3'>
    <div style={{display:"flex",textAlign:"right",marginLeft:"140px",marginTop:"4px"}}>
      <div >
        <p style={{fontFamily:"-moz-initial",color:"navy",fontSize:"17px"}}>Excellent</p>
        <p>1000 reviews</p>
      </div>
      <div style={{width:"20%",height:"37px",border:"2px solid blue",marginLeft:'20px',textAlign:"center",padding:"5px 0px",borderRadius:"10px 0px 0px"}}>
      <p style={{color:"blue"}} >8.2</p>
      </div>
     
    </div>
    <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <p style={{textAlign:"right",fontFamily:"-moz-initial",fontSize:"17px"}}>Average price per square feet</p>
      <h1 style={{textAlign:"right",color:"red"}}>Rs. 11,265</h1>
      <br/>
  
      <Button style={{marginLeft:"130px"}} type="primary" onClick={showDrawer}>
         View more details
      </Button>
       <Drawer title="Apartment details" width={420} closable={false} onClose={onClose} open={open}>
       <div style={{width:"100%",height:"250px",}}>
        <img style={{width:"100%",height:"250px"}} src={image15}></img>
       </div>
       <div style={{width:"100%",height:"270px"}}>
        <br/>
       <h3 style={{textAlign:"center",color:"orange"}}>Project Details</h3>
       <br/>
       <ol style={{fontFamily:"-moz-initial",fontSize:"17px",textAlign:"left",marginLeft:"5px",color:"navy"}}>
        <li style={{marginBottom:"-12px"}}>1.Location - Guindy</li>
        <br/>
        <li style={{marginBottom:"-12px"}}>2.Property dimension - 1200 squarefeet</li>
        <br/>
        <li style={{marginBottom:"-12px"}}>3.Type of system - Split level system</li>
        <br/>
        <li style={{marginBottom:"-12px"}} >4.Building height - 45cm</li>
        <br/>
        <li style={{marginBottom:"-12px"}}>5.Type of Building - Residential building </li>
        <br/>
        <li style={{marginBottom:"-12px"}}>6.Property rate - 11956 per squarefeet </li>
        <br/>
        <li>7.Soil Type - Medium </li>
       </ol>
       </div>
       <br/>
          <Button type="primary" onClick={showChildrenDrawer}>
            Contact us
          </Button>
         
          <Drawer
            title="Contact us"
            width={320}
            closable={false}
            onClose={onChildrenDrawerClose}
            open={childrenDrawer}
          >
           <div>
            <h1>Contact With Our</h1>
            <h1>Certified Experts</h1>
            <br/>
            <p>Connect with our certified experts today for professional guidance
               and solutions tailored to your needs. Whether it's real estate, finance,
                or any other field, our experts are here to provide you with the expertise 
                and insights you require to achieve your goals. Don't hesitate to reach out;
                 we're ready to assist you. </p>
                 <br/>
          <div style={{display:"flex"}}>
  
          </div>
           </div>
          </Drawer>
        </Drawer>
  
    </div>
   
    </div>
    <div className='apart2_box2'>
    <div className='apartbox2_content1'>
    <img src={image15}></img>
    </div>
    <div className='apartbox2_content2'>
    
    <div style={{textAlign:"left",fontSize:"17px"}}>
     <h3 style={{fontFamily:"serif",color:"orange"}}>Gevora Hotel - The Tallest Hotel in The World</h3>
     </div>
     <br/>
     <div style={{display:"flex",textAlign:"left"}}>
     <p style={{fontSize:"12px"}} id='textToCopy'><a href='2655+2V9, MKN Rd, Ramapuram, Guindy, Chennai, Tamil Nadu 600032'>2655+2V9, MKN Rd, Ramapuram, Guindy, Chennai, Tamil Nadu 600032-View on map</a></p>
     <button style={{fontSize:'15px',border:"1px solid white"}} onClick={copyText}><CopyOutlined /></button>
    
     
     </div>
     <br/>
     <p style={{textAlign:"left",fontFamily:"sans-serif",color:"gray"}}>"Genora Hotel is located in central of Guindy all staffs are good service mind and kind to Guest. Very easy to accessal area in Guindy. Very easy to access all are in guindy. Hotel Restaurant and facilities</p>
  
  
  
  
  
    </div>
    <div className='apartbox2_content3'>
    
    <div style={{display:"flex",textAlign:"right",marginLeft:"140px",marginTop:"4px"}}>
      <div >
        <p style={{fontFamily:"-moz-initial",color:"navy",fontSize:"17px"}}>Excellent</p>
        <p>1000 reviews</p>
      </div>
      <div style={{width:"20%",height:"37px",border:"2px solid blue",marginLeft:'20px',textAlign:"center",padding:"5px 0px",borderRadius:"10px 0px 0px"}}>
      <p style={{color:"blue"}} >8.2</p>
      </div>
     
    </div>
    <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <p style={{textAlign:"right",fontFamily:"-moz-initial",fontSize:"17px"}}>Average price per square feet</p>
      <h1 style={{textAlign:"right",color:"red"}}>Rs. 11,265</h1>
      <br/>
  
      <Button style={{marginLeft:"130px"}} type="primary" onClick={showDrawer}>
         View more details
      </Button>
       <Drawer title="Apartment details" width={420} closable={false} onClose={onClose} open={open}>
       <div style={{width:"100%",height:"250px",}}>
        <img style={{width:"100%",height:"250px"}} src={image15}></img>
       </div>
       <div style={{width:"100%",height:"270px"}}>
        <br/>
       <h3 style={{textAlign:"center",color:"orange"}}>Project Details</h3>
       <br/>
       <ol style={{fontFamily:"-moz-initial",fontSize:"17px",textAlign:"left",marginLeft:"5px",color:"navy"}}>
        <li style={{marginBottom:"-12px"}}>1.Location - Guindy</li>
        <br/>
        <li style={{marginBottom:"-12px"}}>2.Property dimension - 1200 squarefeet</li>
        <br/>
        <li style={{marginBottom:"-12px"}}>3.Type of system - Split level system</li>
        <br/>
        <li style={{marginBottom:"-12px"}} >4.Building height - 45cm</li>
        <br/>
        <li style={{marginBottom:"-12px"}}>5.Type of Building - Residential building </li>
        <br/>
        <li style={{marginBottom:"-12px"}}>6.Property rate - 11956 per squarefeet </li>
        <br/>
        <li>7.Soil Type - Medium </li>
       </ol>
       </div>
       <br/>
          <Button type="primary" onClick={showChildrenDrawer}>
            Contact us
          </Button>
         
          <Drawer
            title="Contact us"
            width={320}
            closable={false}
            onClose={onChildrenDrawerClose}
            open={childrenDrawer}
          >
           <div>
            <h1>Contact With Our</h1>
            <h1>Certified Experts</h1>
            <br/>
            <p>Connect with our certified experts today for professional guidance
               and solutions tailored to your needs. Whether it's real estate, finance,
                or any other field, our experts are here to provide you with the expertise 
                and insights you require to achieve your goals. Don't hesitate to reach out;
                 we're ready to assist you. </p>
                 <br/>
          <div style={{display:"flex"}}>
  
          </div>
           </div>
          </Drawer>
        </Drawer>
  
  
  
  
  
    </div>
    </div>
    <div className='apart2_box3'>
    <div className='apartbox3_content1'>
    <img src={image15}></img>
    </div>
    <div className='apartbox3_content2'>
  
    <div style={{textAlign:"left",fontSize:"17px"}}>
     <h3 style={{fontFamily:"serif",color:"orange"}}>Gevora Hotel - The Tallest Hotel in The World</h3>
     </div>
     <br/>
     <div style={{display:"flex",textAlign:"left"}}>
     <p style={{fontSize:"12px"}} id='textToCopy'><a href='2655+2V9, MKN Rd, Ramapuram, Guindy, Chennai, Tamil Nadu 600032'>2655+2V9, MKN Rd, Ramapuram, Guindy, Chennai, Tamil Nadu 600032-View on map</a></p>
     <button style={{fontSize:'15px',border:"1px solid white"}} onClick={copyText}><CopyOutlined /></button>
    
     
     </div>
     <br/>
     <p style={{textAlign:"left",fontFamily:"sans-serif",color:"gray"}}>"Genora Hotel is located in central of Guindy all staffs are good service mind and kind to Guest. Very easy to accessal area in Guindy. Very easy to access all are in guindy. Hotel Restaurant and facilities</p>
  
  
    </div>
    <div className='apartbox3_content3'>
   
    <div style={{display:"flex",textAlign:"right",marginLeft:"140px",marginTop:"4px"}}>
      <div >
        <p style={{fontFamily:"-moz-initial",color:"navy",fontSize:"17px"}}>Excellent</p>
        <p>1000 reviews</p>
      </div>
      <div style={{width:"20%",height:"37px",border:"2px solid blue",marginLeft:'20px',textAlign:"center",padding:"5px 0px",borderRadius:"10px 0px 0px"}}>
      <p style={{color:"blue"}} >8.2</p>
      </div>
     
    </div>
    <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <p style={{textAlign:"right",fontFamily:"-moz-initial",fontSize:"17px"}}>Average price per square feet</p>
      <h1 style={{textAlign:"right",color:"red"}}>Rs. 11,265</h1>
      <br/>
  
      <Button style={{marginLeft:"130px"}} type="primary" onClick={showDrawer}>
         View more details
      </Button>
       <Drawer title="Apartment details" width={420} closable={false} onClose={onClose} open={open}>
       <div style={{width:"100%",height:"250px",}}>
        <img style={{width:"100%",height:"250px"}} src={image15}></img>
       </div>
       <div style={{width:"100%",height:"270px"}}>
        <br/>
       <h3 style={{textAlign:"center",color:"orange"}}>Project Details</h3>
       <br/>
       <ol style={{fontFamily:"-moz-initial",fontSize:"17px",textAlign:"left",marginLeft:"5px",color:"navy"}}>
        <li style={{marginBottom:"-12px"}}>1.Location - Guindy</li>
        <br/>
        <li style={{marginBottom:"-12px"}}>2.Property dimension - 1200 squarefeet</li>
        <br/>
        <li style={{marginBottom:"-12px"}}>3.Type of system - Split level system</li>
        <br/>
        <li style={{marginBottom:"-12px"}} >4.Building height - 45cm</li>
        <br/>
        <li style={{marginBottom:"-12px"}}>5.Type of Building - Residential building </li>
        <br/>
        <li style={{marginBottom:"-12px"}}>6.Property rate - 11956 per squarefeet </li>
        <br/>
        <li>7.Soil Type - Medium </li>
       </ol>
       </div>
       <br/>
          <Button type="primary" onClick={showChildrenDrawer}>
            Contact us
          </Button>
         
          <Drawer
            title="Contact us"
            width={320}
            closable={false}
            onClose={onChildrenDrawerClose}
            open={childrenDrawer}
          >
           <div>
            <h1>Contact With Our</h1>
            <h1>Certified Experts</h1>
            <br/>
            <p>Connect with our certified experts today for professional guidance
               and solutions tailored to your needs. Whether it's real estate, finance,
                or any other field, our experts are here to provide you with the expertise 
                and insights you require to achieve your goals. Don't hesitate to reach out;
                 we're ready to assist you. </p>
                 <br/>
          <div style={{display:"flex"}}>
          <Button type="primary" onClick={() => setModal1Open(true)}>
        Display a modal dialog at 20px to Top
      </Button>


      <Modal
        title="20px to Top"
        style={{
          top: 20,
        }}
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
          </div>
           </div>
          </Drawer>
        </Drawer>
  
    </div>
    </div>
    </div>
    );
  };
}
<div className='apart3'>
 
  
  </div>;
const Page3 = () => <div>Page 3</div>;






export default function Apartment() {
  
  const [selectedKey, setSelectedKey] = useState('1');
  const {
    token: {  borderRadiusLG },
  } = theme.useToken();

  const items = [
    { key: '1', label: 'Apartment areas '},
    { key: '2', icon: <EnvironmentFilled />, label: 'Guindy ' },
    { key: '3', icon: <EnvironmentFilled />, label: 'Thambaram' },
    { key: '4', icon: <EnvironmentFilled />, label: 'ECR' },
    { key: '5', icon: <EnvironmentFilled />, label: 'Vadapalani' },
  ];

  const renderContent = () => {
    switch (selectedKey) {
      case '2':
        return <Page1 />;
      case '3':
        return <Page2 />;
      case '4':
        return <Page3 />;
      case '5':
        return <Home />;
      default:
        return <Page1 />;
    }
  };

  const [activeCategory, setActiveCategory] = useState('Apartment');

  const colors1 = ['#6253E1', '#04BEFE'];
 
  const getHoverColors = (colors) => colors.map((color) => new TinyColor(color).lighten(5).toString());
  const getActiveColors = (colors) => colors.map((color) => new TinyColor(color).darken(5).toString());

  const carouselContent = {
    Apartment: [
      {
        imgs: [image15, image16, image17],
        details: [
          { title: 'Apartment 1', location: 'Location A, Chennai', value: '1.85cr - 2.0cr', featured: 'Featured' },
          { title: 'Apartment 2', location: 'Location B, Chennai', value: '1.95cr - 2.1cr', featured: 'Featured' },
          { title: 'Apartment 3', location: 'Location C, Chennai', value: '2.05cr - 2.2cr', featured: 'Featured' }
        ]
      },
      {
        imgs: [image16, image17, image15],
        details: [
          { title: 'Apartment 4', location: 'Location D, Chennai', value: '1.75cr - 1.9cr', featured: 'Featured' },
          { title: 'Apartment 5', location: 'Location E, Chennai', value: '1.85cr - 2.0cr', featured: 'Featured' },
          { title: 'Apartment 6', location: 'Location F, Chennai', value: '1.95cr - 2.1cr', featured: 'Featured' }
        ]
      },
      {
        imgs: [image17, image15, image16],
        details: [
          { title: 'Apartment 7', location: 'Location G, Chennai', value: '2.15cr - 2.3cr', featured: 'Featured' },
          { title: 'Apartment 8', location: 'Location H, Chennai', value: '2.25cr - 2.4cr', featured: 'Featured' },
          { title: 'Apartment 9', location: 'Location I, Chennai', value: '2.35cr - 2.5cr', featured: 'Featured' }
        ]
      }
    ],
   
  };

  return (

    <>

<div className='apartment_content'>
       <header>
        <div className='apartment_inside'>
            <div className='apartment_logo'>
           <img src={image1}></img>
            </div>
            <nav>
                <ul  style={{color:"white"}}>
                    <li style={{color:"white"}}><a href='/'>HOME</a>  </li>
                    <li> <a href=''>BLOG</a></li>
                    <li> <a href=''>PAGES</a></li>
                   
                    <li> <Link to={'/About'}>ABOUT</Link></li>
                    <li> <a href='Contact'>CONTACT</a></li>
                </ul>
            </nav>
            <div
    className="menus"
      style={{
        width: 56,
        height:50,
        
        
      }}
    >

       <Menu
        mode="horizontal"
        defaultOpenKeys={['sub1']}
        style={{ height: '60%', borderRight: 0 ,backgroundColor:"black",}}
      >
        <SubMenu key="sub1" icon={< MenuUnfoldOutlined  style={{color:"white",fontSize:"20px"}}/>} >
          <Menu.Item key="1"><a href="/">Home</a></Menu.Item>
          <Menu.Item key="2"><a href="/About">About</a></Menu.Item>
         
          <Menu.Item key="4"><a href="/Villa">Villa</a></Menu.Item> 
           <Menu.Item key="5"><a href="/Plots">Plots</a></Menu.Item>
          <Menu.Item key="6"><a href="/Contact">Contact</a></Menu.Item>
        </SubMenu>
      </Menu>
      </div>

          
        </div>
        
        
       
       </header>

      
        </div>
    
    <div className='apartment'>
      <h2>PROJECT IN CHENNAI</h2>
      <br />

      <Space>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorPrimary: `linear-gradient(135deg, ${colors1.join(', ')})`,
                colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(colors1).join(', ')})`,
                colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(colors1).join(', ')})`,
                lineWidth: 0,
              },
            },
          }}
        >
          <Button type='primary' size='large' onClick={() => setActiveCategory('Apartment')}>
            Apartment
          </Button>
        </ConfigProvider>
       
      </Space>

      <br />
      <br />
      <br />

      <Carousel arrows infinite={false}>
        {carouselContent[activeCategory].map((item, index) => (
        <div className='carousel_content' key={index}>
        <div className='carousel_inside'>
        <div className='image-container'>
        {item.imgs.map((img, imgIndex) => (
        <div className='image-item' key={imgIndex}>
       <img src={img} alt={`${item.details[imgIndex].title} ${imgIndex + 1}`} />
       <div className='details'>
       <h2>{item.details[imgIndex].title}</h2>
       <p>{item.details[imgIndex].location}</p>
       <p className='value'>{item.details[imgIndex].value}</p>
       <p className='value2'>{item.details[imgIndex].featured}</p>
       <button>Register</button>
       </div>
       </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    
      <div className='apart'>
      <h3 style={{fontFamily:"revert", color:"orange"}}>Our Project</h3>
      <br/>
      <h3 style={{fontSize:"37px",fontFamily:"initial",color:"navy"}}>Recent Projects</h3>
      </div>
      <div className='apart1'>
     
      <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={(e) => setSelectedKey(e.key)}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            
          }}
        />
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              
              borderRadius: borderRadiusLG,
            }}
          >
            {renderContent()}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Welcome home ©{new Date().getFullYear()} Created by NPNG
        </Footer>
      </Layout>
    </Layout>
      
      </div>
     
     <div className='propertyaddvisor' style={{width:"100%",height:"650px",marginTop:"20px",textAlign:"center"}}>
      <br/>
     <h1 style={{color:"navy",fontFamily:"serif",fontSize:"40px"}}>Our Property Advisors</h1>
     <br/>
     <p style={{color:"gray",fontFamily:"cursive",}}>Our team of Property Advisors comprises highly skilled professionals dedicated to helping you make informed real estate decisions. 
      With a deep understanding of the market and a commitment to your needs, they provide expert guidance tailored to your specific goals. 
      Whether you're buying, selling, or investing, our advisors are your trusted partners throughout the entire real estate journey. 
      Their experience and insights ensure that you receive the best advice and support to make your property 
      transactions smooth and successful. Count on our Property Advisors to turn your real estate aspirations into reality.</p>
     <br/>
      <div style={{width:"100%",height:"400px",display:"flex",gap:"50px"}}>
     
     <div className='property' style={{width:"28%",height:"400px",marginLeft:"55px",}}>
     <img style={{width:"100%",height:"250px",padding:"20px"}} src={image15}></img>
     <br/>
     <br/>
     <h3 style={{color:"navy",fontFamily:"sans-serif"}}>Prakash Dwivedi</h3>
     <p>Pune City Head</p>
     </div>
     <div  className='property1' style={{width:"28%",height:"400px",}}>
     <img style={{width:"100%",height:"250px",padding:"20px"}} src={image15}></img>
     <br/>
     <br/>
    <h3 style={{color:"navy",fontFamily:"sans-serif"}}>KESAVAN T</h3>
    <p>Business Head Chennai & </p>
    <p>Hyderabad</p>
     </div>
     <div  className='property2' style={{width:"28%",height:"400px",}}>
     <img style={{width:"100%",height:"250px",padding:"20px"}} src={image15}></img>
     <br/>
     <br/>
    <h3 style={{color:"navy",fontFamily:"sans-serif"}}>Mohamed Ashar</h3>
    <p>General Manager Chennai</p>
     </div>
    
      </div>
      
     </div>
    <div style={{width:"100%",height:"600px",}}>
      <div style={{width:"100%",height:"220px",}}>
      <h1 style={{color:"navy",fontFamily:"serif",fontSize:"40px"}}>Our Coustomer says</h1>
     <br/>
     <p style={{color:"gray",fontFamily:"cursive",padding:"10px"}}>At Assettrust, our mission is to deliver exceptional
       services that meet the unique needs of our customers. We take great pride in helping 
       individuals and businesses achieve their goals.But don't just take our word for it. Here's what some of our
       valued customers have to say about their experiences with us. But don't just take our word for it. Here's what some of our
        valued customers have to say about their experiences with us:</p>
      </div>
      <div style={{width:"100%",height:"350px",}}>
      <Carousel autoplay autoplaySpeed={1200} arrows infinite={false}>
      <div style={contentStyle}>
        <div style={{width:"100%",height:"350px",backgroundColor:"lightblue",display:"flex",gap:"40px",padding:"60px"}}>
        <div className='play' style={{width:"45%",height:"200px",marginLeft:"40px",textAlign:"left",fontFamily:"sans-serif",color:"gray", border: "2px dotted blue",padding:"20px",}}>
        <p>At Assettrust, our mission is to deliver exceptional services that meet the unique needs of our customers. 
          We take great pride in helping individuals and businesses achieve their goals. 
          But don't just take our word for it. Here's what some of our valued customers have to say about their experiences with us:</p>
          <br/>
          <h3 style={{color:"navy"}}>Rukesh Sharma</h3>
          <p style={{color:"blue"}}>Pune</p>
        </div>
        <div className='play' style={{width:"45%",height:"200px",textAlign:"left",fontFamily:"sans-serif",color:"gray", border: "2px dotted blue",padding:"20px"}}>
        <p>At Assettrust, our mission is to deliver exceptional services that meet the unique needs of our customers.
           We take great pride in helping individuals and businesses achieve their goals. 
          But don't just take our word for it. Here's what some of our valued customers have to say about their experiences with us:</p>
          <br/>
          <h3 style={{color:"navy"}}>Rukesh Sharma</h3>
          <p style={{color:"blue"}}>Pune</p>
        </div>
        </div>
      
      </div>

      <div style={contentStyle} >
      <div style={{width:"100%",height:"350px",backgroundColor:"lightblue",display:"flex",gap:"40px",padding:"60px"}}>

      <div className='play' style={{width:"45%",height:"200px",marginLeft:"40px",textAlign:"left",fontFamily:"sans-serif",color:"gray", border: "2px dotted blue",padding:"20px"}}>
        <p>At Assettrust, our mission is to deliver exceptional services that meet the unique needs of our customers. 
          We take great pride in helping individuals and businesses achieve their goals. 
          But don't just take our word for it. Here's what some of our valued customers have to say about their experiences with us:</p>
          <br/>
          <h3 style={{color:"navy"}}>Rukesh Sharma</h3>
          <p style={{color:"blue"}}>Pune</p>
        </div>
        <div className='play' style={{width:"45%",height:"200px",textAlign:"left",fontFamily:"sans-serif",color:"gray", border: "2px dotted blue",padding:"20px"}}>
        <p>At Assettrust, our mission is to deliver exceptional services that meet the unique needs of our customers.
           We take great pride in helping individuals and businesses achieve their goals. 
          But don't just take our word for it. Here's what some of our valued customers have to say about their experiences with us:</p>
          <br/>
          <h3 style={{color:"navy"}}>Rukesh Sharma</h3>
          <p style={{color:"blue"}}>Pune</p>
        </div>
        </div>
        
      </div>
      <div style={contentStyle}>
        
      <div style={{width:"100%",height:"350px",backgroundColor:"lightblue",display:"flex",gap:"40px",padding:"60px"}}>
      <div className='play' style={{width:"45%",height:"200px",marginLeft:"40px",textAlign:"left",fontFamily:"sans-serif",color:"gray", border: "2px dotted blue",padding:"20px"}}>
        <p>At Assettrust, our mission is to deliver exceptional services that meet the unique needs of our customers. 
          We take great pride in helping individuals and businesses achieve their goals. 
          But don't just take our word for it. Here's what some of our valued customers have to say about their experiences with us:</p>
          <br/>
          <h3 style={{color:"navy"}}>Rukesh Sharma</h3>
          <p style={{color:"blue"}}>Pune</p>
        </div>
        <div className='play' style={{width:"45%",height:"200px",textAlign:"left",fontFamily:"sans-serif",color:"gray", border: "2px dotted blue",padding:"20px"}}>
        <p>At Assettrust, our mission is to deliver exceptional services that meet the unique needs of our customers.
           We take great pride in helping individuals and businesses achieve their goals. 
          But don't just take our word for it. Here's what some of our valued customers have to say about their experiences with us:</p>
          <br/>
          <h3 style={{color:"navy"}}>Rukesh Sharma</h3>
          <p style={{color:"blue"}}>Pune</p>
        </div>
      </div>

      </div>
      <div style={contentStyle}>
      <div style={{width:"100%",height:"350px",backgroundColor:"lightblue",display:"flex",gap:"40px",padding:"50px"}}>
      <div className='play' style={{width:"45%",height:"200px",marginLeft:"40px",textAlign:"left",fontFamily:"sans-serif",color:"gray", border: "2px dotted blue",padding:"20px"}}>
        <p>At Assettrust, our mission is to deliver exceptional services that meet the unique needs of our customers. 
          We take great pride in helping individuals and businesses achieve their goals. 
          But don't just take our word for it. Here's what some of our valued customers have to say about their experiences with us:</p>
          <br/>
          <h3 style={{color:"navy"}}>Rukesh Sharma</h3>
          <p style={{color:"blue"}}>Pune</p>
        </div>
        <div  className='play' style={{width:"45%",height:"200px",textAlign:"left",fontFamily:"sans-serif",color:"gray",  border: "2px dotted blue",padding:"20px"}}>
        <p>At Assettrust, our mission is to deliver exceptional services that meet the unique needs of our customers.
           We take great pride in helping individuals and businesses achieve their goals. 
          But don't just take our word for it. Here's what some of our valued customers have to say about their experiences with us:</p>
          <br/>
          <h3 style={{color:"navy"}}>Rukesh Sharma</h3>
          <p style={{color:"blue"}}>Pune</p>
        </div>
        </div>
        
      </div>
    </Carousel>
      </div>
    </div>
      </div>
     
      <br/>
      
      <div className='contact_apartment'>
           
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
                <ul >
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
    
      </>
     
  );
}