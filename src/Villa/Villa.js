

import React from "react";
import './Villa.css';
import image2 from '../images/logo-default-real-estate-396x66.png';
import image3 from '../images/banner1-1.jpg.webp'
import Design from "./Villacontent";
import image4 from "../images/modal-banner.jpg"
import { Link } from 'react-router-dom';
import image15 from '../images/slid-1.jpg';
import Contact from '../Contact/Contact';
import { Button, ConfigProvider, Space, Carousel } from 'antd';
import { Menu } from 'antd';
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

export default function Villa(){

  const contentStyle = {
    margin: 0,
    height: '350px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  
  

  return(
   <>
    <div className='villa_content'>
    <header>
     <div className='header_inside'>
         <div className='logo'>
        <img src={image2}></img>
         </div>
         <nav>
             <ul>
                 <li><a href='/'>HOME</a>  </li>
                 <li> <a href=''>SERVICE</a></li>
                
                
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
        style={{ height: '60%', borderRight: 0 ,backgroundColor:"lightblue",}}
      >
        <SubMenu key="sub1" icon={< MenuUnfoldOutlined  style={{color:"white",fontSize:"20px"}}/>} >
          <Menu.Item key="1"><a href="/">Home</a></Menu.Item>
          <Menu.Item key="2"><a href="/About">About</a></Menu.Item>
          <Menu.Item key="3"><a href="/Apartment">Apartment</a></Menu.Item>
          <Menu.Item key="4"><a href="/Villa">Villa</a></Menu.Item> 
           <Menu.Item key="5"><a href="/Plots">Plots</a></Menu.Item>
          <Menu.Item key="6"><a href="/Contact">Contact</a></Menu.Item>
        </SubMenu>
      </Menu>
    </div>
      

     </div>

     

    </header>
   

     </div>
  
  <div className="villa1" >
  
  <div className="villa2" >
 <div className="villa3"></div>
 <div className="villa3_content">
  <img src={image3}></img>
 </div>
 </div>
  <div className="villa4" >
   <h2 style={{color:"navy",fontSize:"35px",fontFamily: "Inter, sans-serif",fontWeight:"700"}}>#1 Place To Find The Perfect</h2>
    <h2  style={{color:"navy",fontSize:"35px",fontFamily: "Inter, sans-serif",fontWeight:"700"}}>Property</h2>
    <br/>
    <p style={{fontFamily:"Heebo, sans-serif",color:"#666565",}}>At Assettrust Services Pvt. Ltd., we understand that buying a property is a significant investment, 
      and we are committed to assisting you every step of the way. Our extensive experience and dedication 
      to customer satisfaction make us your ideal partner in the quest for the perfect villa, apartment, or 
       plot of land. Explore our listings today and embark on your journey to finding your dream property</p>
 
   <p style={{color:"grey"}}>
   <br/>
    <i className="fa_check" ></i>
    Delve into our extensive array of property listings</p>
    <br/>
   
   <p style={{color:"grey"}}>
   <i className="fa_check"></i>
     Our highly trained proffesional are here to help you through the process of finding your ideal home</p>
     <br/>
  
   <p style={{color:"grey"}}>
   <i className="fa_check"></i>
    Start your property search today to find  the  ideal place to call home.</p>
   
  <br/>
   <button style={{padding:"12px 25px",backgroundColor:"blue",color:"white",borderRadius:"10px",}}>Read more</button>
  </div>

  </div>
  <br/>
  <div className="villa5" >
    <div className="connect">
     <img  src={image4}></img>
    </div>
    <div className="connect_content" >
      <h2 style={{color:"navy",fontSize:"45px",fontFamily: "Inter, sans-serif",fontWeight:"600"}}>Contact with Our  </h2>
      <h2 style={{color:"navy",fontSize:"45px",fontFamily: "Inter, sans-serif",fontWeight:"600"}}>Certified Experts</h2>
      <br/>
      <p style={{fontFamily:"Heebo, sans-serif",color:"#666565",}}>Connect with our certified experts today for proffesional guidance and solutions tailored to your needs whether its real estate,finance,,or  any other field
        ,our experts are here to provide you with the expertise and insights you require to achieve your goals. Dont hesitate to reach  out ; were ready to assist you
      </p>
      <br/>
      <br/>
      <div  className="call" style={{width:"70%",height:"60px",display:"flex",gap:"20px"}}>
    <button style={{padding:'15px 45px',backgroundColor:"lightblue",color:"white"}}>Call us back</button>
    <button style={{padding:'15px 35px',backgroundColor:"navy",color:"white"}}>Get an appointment</button>
  </div>
      </div>
  
  </div>








  <div className='propertyaddvisor' >
      <br/>
     <h1 style={{color:"navy",fontFamily:"serif",fontSize:"40px"}}>Our Property Advisors</h1>
     <br/>
     <p style={{color:"gray",fontFamily:"cursive",}}>Our team of Property Advisors comprises highly skilled professionals dedicated to helping you make informed real estate decisions. 
      With a deep understanding of the market and a commitment to your needs, they provide expert guidance tailored to your specific goals. 
      Whether you're buying, selling, or investing, our advisors are your trusted partners throughout the entire real estate journey. 
      Their experience and insights ensure that you receive the best advice and support to make your property 
      transactions smooth and successful. Count on our Property Advisors to turn your real estate aspirations into reality.</p>
     <br/>
      <div  className="property_all" >
     
     <div className='property' >
     <img style={{width:"100%",height:"250px",padding:"20px"}} src={image15}></img>
     <br/>
     <br/>
     <h3 style={{color:"navy",fontFamily:"sans-serif"}}>Prakash Dwivedi</h3>
     <p>Pune City Head</p>
     </div>
     <div  className='property1' >
     <img style={{width:"100%",height:"250px",padding:"20px"}} src={image15}></img>
     <br/>
     <br/>
    <h3 style={{color:"navy",fontFamily:"sans-serif"}}>KESAVAN T</h3>
    <p>Business Head Chennai & </p>
    <p>Hyderabad</p>
     </div>
     <div  className='property2' >
     <img style={{width:"100%",height:"250px",padding:"20px"}} src={image15}></img>
     <br/>
     <br/>
    <h3 style={{color:"navy",fontFamily:"sans-serif"}}>Mohamed Ashar</h3>
    <p>General Manager Chennai</p>
     </div>
    
      </div>
      
     </div>
    <div className="coustomer" >
      <div style={{width:"100%",height:"220px",}}>
      <h1 style={{color:"navy",fontFamily:"serif",fontSize:"40px"}}>Our Coustomer says</h1>
     <br/>
     <p className="pp" style={{color:"gray",fontFamily:"cursive",padding:"10px"}}>At Assettrust, our mission is to deliver exceptional
       services that meet the unique needs of our customers. We take great pride in helping 
       individuals and businesses achieve their goals.But don't just take our word for it. Here's what some of our
       valued customers have to say about their experiences with us. But don't just take our word for it. Here's what some of our
        valued customers have to say about their experiences with us:</p>
      </div>
      <div  className="plays"  >
      <Carousel autoplay autoplaySpeed={1200} arrows infinite={false}>
      <div style={contentStyle}>
        <div className="play_content" >
        <div className='play' >
        <p>At Assettrust, our mission is to deliver exceptional services that meet the unique needs of our customers. 
          We take great pride in helping individuals and businesses achieve their goals. 
          But don't just take our word for it. Here's what some of our valued customers have to say about their experiences with us:</p>
          <br/>
          <h3 style={{color:"navy"}}>Rukesh Sharma</h3>
          <p style={{color:"blue"}}>Pune</p>
        </div>
        <div className='play' style={{textAlign:"left",fontFamily:"sans-serif",color:"gray", border: "2px dotted blue",padding:"20px"}}>
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
      <div  className="play_content" style={{padding:"60px"}}>

      <div className='play' style={{marginLeft:"40px",textAlign:"left",fontFamily:"sans-serif",color:"gray", border: "2px dotted blue",padding:"20px"}}>
        <p>At Assettrust, our mission is to deliver exceptional services that meet the unique needs of our customers. 
          We take great pride in helping individuals and businesses achieve their goals. 
          But don't just take our word for it. Here's what some of our valued customers have to say about their experiences with us:</p>
          <br/>
          <h3 style={{color:"navy"}}>Rukesh Sharma</h3>
          <p style={{color:"blue"}}>Pune</p>
        </div>
        <div className='play' style={{textAlign:"left",fontFamily:"sans-serif",color:"gray", border: "2px dotted blue",padding:"20px"}}>
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
        
      <div className="play_content" style={{padding:"60px"}}>
      <div className='play' style={{marginLeft:"40px",textAlign:"left",fontFamily:"sans-serif",color:"gray", border: "2px dotted blue",padding:"20px"}}>
        <p>At Assettrust, our mission is to deliver exceptional services that meet the unique needs of our customers. 
          We take great pride in helping individuals and businesses achieve their goals. 
          But don't just take our word for it. Here's what some of our valued customers have to say about their experiences with us:</p>
          <br/>
          <h3 style={{color:"navy"}}>Rukesh Sharma</h3>
          <p style={{color:"blue"}}>Pune</p>
        </div>
        <div className='play' style={{textAlign:"left",fontFamily:"sans-serif",color:"gray", border: "2px dotted blue",padding:"20px"}}>
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
      <div className="play_content" style={{padding:"50px"}}>
      <div className='play' style={{marginLeft:"40px",textAlign:"left",fontFamily:"sans-serif",color:"gray", border: "2px dotted blue",padding:"20px"}}>
        <p>At Assettrust, our mission is to deliver exceptional services that meet the unique needs of our customers. 
          We take great pride in helping individuals and businesses achieve their goals. 
          But don't just take our word for it. Here's what some of our valued customers have to say about their experiences with us:</p>
          <br/>
          <h3 style={{color:"navy"}}>Rukesh Sharma</h3>
          <p style={{color:"blue"}}>Pune</p>
        </div>
        <div  className='play' style={{textAlign:"left",fontFamily:"sans-serif",color:"gray",  border: "2px dotted blue",padding:"20px"}}>
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
     
      <br/>
      <div><Contact/></div>
     </>
    

     
  
    
  )
}