
import image1 from "../images/logo-white.svg";
import { Link } from 'react-router-dom';
import './whole.css'
import './wholes.css'
import image2 from '../images/banner1-1.jpg.webp';
import image3 from '../images/07-960x940.jpg.webp'
import image5 from '../images/hand-with-cap.png';
import image7 from '../images/icon-img1.png'
import image8 from '../images/icon-img2.png';
import image9 from '../images/icon-img3.png';
import image10 from '../images/icon-img4.png';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import './extra.css';
import { Col, Row } from 'antd';
import image11 from '../images/modal-banner.jpg'
import {  Checkbox, Form, Input } from 'antd';

import { TinyColor } from '@ctrl/tinycolor';
import {  ConfigProvider, Space, Carousel } from 'antd';

import image15 from '../images/slid-1.jpg';
import image16 from '../images/slid-2.jpg';
import image17 from '../images/slid-3.jpg';
import image20 from '../images/icon-03.png';
import image21 from '../images/icon-01.png';
import image22 from '../images/icon-04.png';
import image23 from '../images/0d582ebd964c43e086e6a1e7476b99a520230902190814126.jpg';
import image25 from '../images/banner1-1.jpg.webp';
import image26 from '../images/logo-white.svg';
import {InstagramOutlined ,GoogleOutlined , FacebookOutlined ,PhoneOutlined,HeatMapOutlined,MessageOutlined  } from '@ant-design/icons';
import imagex from '../images/tele.png';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
//import Villa from "../Villa/Villa";

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



export default function Whole(){
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
   
  };

  // const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const box2 = document.querySelector('.box2');
  //   const box3 = document.querySelector('.box3');
  //   const box4 = document.querySelector('.box4');

  //   const slideIn = () => {
  //     if (currentSlide === 1) {
  //       box2.style.transform = 'translateX(0)';
  //       box3.style.transform = 'translateX(0)';
  //       box4.style.transform = 'translateX(0)';
  //     }
  //   };

  //   const slideOut = () => {
  //     if (currentSlide !== 1) {
  //       box2.style.transform = 'translateX(-100%)';
  //       box3.style.transform = 'translateX(100%)';
  //       box4.style.transform = 'translateX(-100%)';
  //     }
  //   };

  //   slideIn();

  //   box2.addEventListener('click', slideOut);
  //   box3.addEventListener('click', slideOut);
  //   box4.addEventListener('click', slideOut);

  //   return () => {
  //     box2.removeEventListener('click', slideOut);
  //     box3.removeEventListener('click', slideOut);
  //     box4.removeEventListener('click', slideOut);
  //   };
  // }, [currentSlide]);
  const items = [
   
    {
      label: <a style={{color:"brown", fontWeight:"bold"}}href='Apartment'>Apartment</a>,
      key: '0',
    },
    {
      label: <a style={{color:"brown", fontWeight:"bold"}}href="Villa" >Villa</a>,
      key: '1',
    },
    {
      type: 'divider',
      
    },
    {
      label: <a style={{color:"brown", fontWeight:"bold"}} href="Plots">Plots</a>,
      key: '3',
    },
  ];


    const [open, setOpen] = useState(false);
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      const { TextArea } = Input;

      const [activeCategory, setActiveCategory] = useState('Apartment');

      const colors1 = ['#6253E1', '#04BEFE'];
      const colors2 = ['#fc6076', '#ff9a44', '#ef9d43', '#e75516'];
      const colors3 = ['#40e495', '#30dd8a', '#2bb673'];
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
        Villa: [
          {
            imgs: [image15, image16, image17],
            details: [
              { title: 'Villa 1', location: 'Location A, Chennai', value: '3.85cr - 4.0cr', featured: 'Featured' },
              { title: 'Villa 2', location: 'Location B, Chennai', value: '3.95cr - 4.1cr', featured: 'Featured' },
              { title: 'Villa 3', location: 'Location C, Chennai', value: '4.05cr - 4.2cr', featured: 'Featured' }
            ]
          },
          {
            imgs: [image17, image16, image15],
            details: [
              { title: 'Villa 4', location: 'Location A, Chennai', value: '3.85cr - 4.0cr', featured: 'Featured' },
              { title: 'Villa 5', location: 'Location B, Chennai', value: '3.95cr - 4.1cr', featured: 'Featured' },
              { title: 'Villa 6', location: 'Location C, Chennai', value: '4.05cr - 4.2cr', featured: 'Featured' }
            ]
          } 
          ,{
            imgs: [image17, image16, image15],
            details: [
              { title: 'Villa 7', location: 'Location A, Chennai', value: '3.85cr - 4.0cr', featured: 'Featured' },
              { title: 'Villa 8', location: 'Location B, Chennai', value: '3.95cr - 4.1cr', featured: 'Featured' },
              { title: 'Villa 9', location: 'Location C, Chennai', value: '4.05cr - 4.2cr', featured: 'Featured' }
            ]
          }
        ],
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


    return(
        <>
      <div className='whole_content'>
      <header>
      <div className='whole_inside'>
      <div className='whole_logo'>
      <img src={image1}></img>
      </div>
      <nav>
      <ul>
      <li><a href=''>HOME</a>  </li>
     
      <li> <a href='Apartment'></a>
      <Dropdown
                   
     menu={{
      items,
     
     }}
     trigger={['click']}
   
  >
    <a  onClick={(e) => e.preventDefault()}>
    <Space >
     PROPERTIES
    <DownOutlined />
    </Space>
    </a>
  </Dropdown>
                    
                    
   </li>
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
        
        <div className="content_image">
        <Carousel autoplay autoplaySpeed={1200}>
<div style={contentStyle}>
< > <img src={image2} ></img>
 
  </>
</div>
<div style={contentStyle}>
<img src={image3}></img>
</div>
<div  style={contentStyle}>
  <img src={image15}></img>
</div>
<div style={contentStyle}>
 <img src={image16}></img>
</div>
</Carousel>
       
            <div className="content">
             <div className='box1'>
             <h2 className='beauty'>Find a Place </h2>
             <h2 className='best'>Where you can be yourself</h2>
             <p>Welcome Home</p>
             </div>
            </div>
        </div>

       
        <div className="box2">
     <div className=" box3">
     <img src={image3}></img>
     </div>
     <div className='box4'>
        <h1>The Building Overview</h1>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <p>Introducing Hourty Complex, the stunning new addition to the downtown Manhattan skyline. A perfect blend of breathtaking architecture designed, with awe-inspiring interiors envisioned</p>
    
       <br/>
      
       <p>Sleek and sophisticated, Costix offers qualities always coveted, but rarely obtained in the finest New York rental residences – a unique blend of generously proportioned interiors and the enjoyment of Nassau Club over 10,000 square feet of indoor and outdoor amenities creatively conceived to enhance your exceptional FiDi lifestyle.</p>
     </div>
     </div>

     

     <div className="box5">
    <img src={image5}></img>
   <div className='box6'>
   <h2>CHECK OUT</h2><span><h2>OUR CREDENTIALS</h2></span>
   <br/>
   <br/>
   <p>straight ahead and on the traack now weere gonna make our dreams come true black gold dont it our way </p>
   </div>

   <div className='box7'>
   
   <div className='box7_inner'>
   <img src={image7}></img>
   </div>

   <div className='box7_inner2'>
   <br/>
    <h2>CONTEMPORARY DESIGN</h2>
    <br/>
    <p>Could you be mine. And when the odds are against him and their dangers work to do. You bet your life Speed Racer.</p>
   </div>
   </div>



   <div className='box8'>
  <div className='box8_inner'>
  <img src={image8}></img>
  </div>
  <div className='box8_inner2'>
  <br/>
    <h2>INNOVATIVE APPROACH</h2>
    <br/>
    <p>Could you be mine. And when the odds are against him and their dangers work to do. You bet your life Speed Racer</p>
  </div>
</div>


<div className='box9'>
 <div className='box9_inner'>
 <img src={image9}></img>
 </div>
 <div className='box9_inner2'>

 <br/>
    <h2>URBAN LIVING AT ITS BEST</h2>
    <br/>
    <p>Could you be mine. And when the odds are against him and their dangers work to do. You bet your life Speed Racer</p>
 </div>
</div>


<div className='box10'>
<div className='box10_inner'>
<img src={image10}></img>
</div>
<div className='box10_inner2'>
<br/>
    <h2>THE TEAM WORK</h2>
    <br/>
    <p>Could you be mine. And when the odds are against him and their dangers work to do. You bet your life Speed Racer</p>

</div>
</div>


  </div>

     
  <div className="dream">

<div className='box11'>
<h2>Find Your Dream Property!</h2>
<p>We are Offering The Best Real Estate Property For All</p>
</div>
<div className='box12'>
<Button className='box12_inside' style={{ width: '90%',height:'30px' }} type="primary" onClick={() => setOpen(true)}>
    <p>Contact us</p>
   </Button>
   <Modal
   
     centered
     open={open}
     onOk={() => setOpen(false)}
     onCancel={() => setOpen(false)}
     width={900}
     
   >
     <Row >
   <Col  className='rowbox' span={12}>
    <img src={image11}></img>
     </Col>
   <Col className='rowbox2' span={12}>

     <h2>Expert Consultation by</h2>
     <p>Professionals</p>
     <br/>
     <br/>

     
   <Form
 name="basic"
 labelCol={{
   span: 8,
 }}
 wrapperCol={{
   span: 16,
 }}
 style={{
   maxWidth: 600,
 }}
 initialValues={{
   remember: true,
 }}
 onFinish={onFinish}
 onFinishFailed={onFinishFailed}
 autoComplete="off"
>
 <Form.Item
style={{ height: '50px' }}
wrapperCol={{
 offset: 4,
 span: 16,
}}
  
   name="username"
   rules={[
     {
       required: true,
       message: 'Please input your username!',
       
     },
   ]}
   
 >
      <Input style={{ height: '50px' }} placeholder="Name*" />
   
 </Form.Item>

 <Form.Item
 style={{ height: '50px' }}
 wrapperCol={{
     offset: 4,
     span: 16,
   }}
  
  name="email"
  rules={[
    {
      required: true,
      message: 'Please input your email!',
      
    },
  ]}
  
>
     <Input style={{ height: '50px' }} placeholder="Email*" />
  
</Form.Item>

 <Form.Item
        style={{ height: '50px' }}
 wrapperCol={{
     offset: 4,
     span: 16,
   
   }}
  
   name="password"
   rules={[
     {
       required: true,
       message: 'Please input your password!',
     },
   ]}
 >
   <Input.Password style={{ height: '50px' }} placeholder="Password*"/>
 </Form.Item>

 <Form.Item
  wrapperCol={{
     offset: 4,
     span: 16,
   }}
 >

     
       <TextArea rows={4} placeholder='please share youre requirements here' />
     </Form.Item>



 <Form.Item
   wrapperCol={{
     offset: 4,
     span: 16,
   }}
 >
      <Button className="custom_button" style={{ width: '100%' }} type="primary" htmlType="submit"> 
     Submit
   </Button>
 </Form.Item>
</Form>
     </Col>
 </Row>
   </Modal>
</div>
<div className='box13'>
 <img src={imagex}></img>
 
</div>

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
        <ConfigProvider
          theme={{
            components: {
              Button: {
                colorPrimary: `linear-gradient(90deg, ${colors2.join(', ')})`,
                colorPrimaryHover: `linear-gradient(90deg, ${getHoverColors(colors2).join(', ')})`,
                colorPrimaryActive: `linear-gradient(90deg, ${getActiveColors(colors2).join(', ')})`,
                lineWidth: 0,
              },
            },
          }}
        >
          <Button type='primary' size='large' onClick={() => setActiveCategory('Villa')}>
            Villa
          </Button>
        </ConfigProvider>
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
      


    <div className='proof'>
        <h2 className="proof_content">Our Service</h2>
        <br/>
        <h1 >WE PROVIDE ROOFING SERVICES</h1>
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

      <br/>
      <br/>
      
      <br/>
      <br/>

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

        
    )
}