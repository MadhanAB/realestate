




//import './Apartment.css';
import React, { useState } from 'react';
import { TinyColor } from '@ctrl/tinycolor';
import { Button, ConfigProvider, Space, Carousel } from 'antd';
import image2 from '../images/logo-default-real-estate-396x66.png';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';
import image15 from '../images/slid-1.jpg';
import image16 from '../images/slid-2.jpg';
import image17 from '../images/slid-3.jpg';
import './Plots.css'

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




export default function Plots() {
  const [activeCategory, setActiveCategory] = useState('Plots');

 
  
  const colors3 = ['#40e495', '#30dd8a', '#2bb673'];
  const getHoverColors = (colors) => colors.map((color) => new TinyColor(color).lighten(5).toString());
  const getActiveColors = (colors) => colors.map((color) => new TinyColor(color).darken(5).toString());

  const carouselContent = {

   
  
    Plots: [
      {
        imgs: [image16, image17, image15],
        details: [
          { title: 'Plot 1', location: 'Location A, Chennai', value: '50L - 75L', featured: 'Featured' },
          { title: 'Plot 2', location: 'Location B, Chennai', value: '60L - 85L', featured: 'Featured' },
          { title: 'Plot 3', location: 'Location C, Chennai', value: '70L - 95L', featured: 'Featured' }
        ]
      },
      {
        imgs: [image17, image15, image16],
        details: [
          { title: 'Plot 4', location: 'Location A, Chennai', value: '50L - 75L', featured: 'Featured' },
          { title: 'Plot 5', location: 'Location B, Chennai', value: '60L - 85L', featured: 'Featured' },
          { title: 'Plot 6', location: 'Location C, Chennai', value: '70L - 95L', featured: 'Featured' }
        ]
      },
      {
        imgs: [image15, image17, image16],
        details: [
          { title: 'Plot 7', location: 'Location A, Chennai', value: '50L - 75L', featured: 'Featured' },
          { title: 'Plot 8', location: 'Location B, Chennai', value: '60L - 85L', featured: 'Featured' },
          { title: 'Plot 9', location: 'Location C, Chennai', value: '70L - 95L', featured: 'Featured' }
        ]
      }
    ]
  };

  const contentStyle = {
    margin: 0,
    height: '350px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
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
  


    <div className='apartment'>
      <h2>PROJECT IN CHENNAI</h2>
      <br />

      <Space>
      
      
        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorPrimary: `linear-gradient(116deg, ${colors3.join(', ')})`,
                colorPrimaryHover: `linear-gradient(116deg, ${getHoverColors(colors3).join(', ')})`,
                colorPrimaryActive: `linear-gradient(116deg, ${getActiveColors(colors3).join(', ')})`,
                lineWidth: 0,
              },
            },
          }}
        >
          <Button type='primary' size='large' onClick={() => setActiveCategory('Plots')}>
            Plots
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
  );
}