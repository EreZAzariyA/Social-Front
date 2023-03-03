import { Form, Input, Button } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import authServices from "../../../Services/auth-services";
import socketServices from "../../../Services/socket-services";
import { getError } from "../../../Utils/helpers";
import "../style.css"

const Register = ()=>{
  const navigate = useNavigate();

  const onFinish = async (user)=>{
    try {
      await authServices.register(user);
      navigate('/home');
    } catch (err) {
      console.log(getError(err));
      socketServices.socketIo.emit('register_attempt')
    }
  };

  return(
    <div className="auth_form_container">
      <Form className="auth_form register_form"
        layout="vertical"
        onFinish={onFinish}
      >
        <div className="auth_form_title">
          <h2>Register</h2>
        </div>
        <Form.Item 
          label='First name'
          name={'first_name'}>
          <Input type="text" />
        </Form.Item>
        <Form.Item 
          label='Last name'
          name={'last_name'}>
          <Input type="text" />
        </Form.Item>
        <Form.Item 
          label='Email'
          name={'email'}>
          <Input type="email" />
        </Form.Item>
        <Form.Item 
          label='Password'
          name={'password'}>
          <Input type="password" />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            span: 24
          }}>
            <Button type="primary" htmlType="submit">
              Sing-Up
            </Button>
          </Form.Item>
      </Form>
      <div className="action">
        <p>Already Have Account <NavLink to={'/auth/login'}>Sing-In</NavLink></p>
      </div>
    </div>
  );
};

export default Register;