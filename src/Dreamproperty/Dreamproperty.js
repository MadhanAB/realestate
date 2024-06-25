import './Dreamproperty.css'
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import image10 from '../images/tele.png';
import { Col, Row } from 'antd';
import image11 from '../images/modal-banner.jpg'
import {  Checkbox, Form, Input } from 'antd';


export function Dream(){
    const [open, setOpen] = useState(false);
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
      const { TextArea } = Input;
    return(
        <div className="dream">

   <div className='box11'>
   <h2>Find Your Dream Property!</h2>
   <p>We are Offering The Best Real Estate Property For All</p>
   </div>
   <div className='box12'>
   <Button className='box12_inside' style={{ width: '90%',height:'50px' }} type="primary" onClick={() => setOpen(true)}>
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
    <img src={image10}></img>
    
   </div>
 
        </div>
    )
}