import React from 'react'
import { Button, Checkbox, Form, Input, message } from 'antd';
import { Link,useNavigate } from 'react-router-dom';
import styles from './styles.module.scss'

export const RegistrationForm = () => {
  const navigate =useNavigate()
  const onFinish = (values) => {
    localStorage.setItem('name', values.name);
    localStorage.setItem('username', values.username);
    localStorage.setItem('password', values.password);
    message.success('Registration Done Successfully');
    navigate('/login')
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <div style={{marginTop:"150px"}}>
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
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div className={styles.alreadyHaveAccount}><Link to="/login">Already have account?</Link></div>

    </div>
  )
}
