import { Button, Form, Input } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import authServices from "../../../Services/auth-services";
import socketServices from "../../../Services/socket-services";
import { getError } from "../../../Utils/helpers";
import "../style.css";

const Login = ()=>{
  const navigate = useNavigate();

  const onFinish = async (credentials)=>{
    try {
      await authServices.login(credentials);
      navigate('/home');
    } catch (err) {
      console.log(getError(err));
      socketServices.socketIo.emit('login_attempt', getError(err), credentials.email);
    }
  };

  return(
    <div className="auth_form_container">
      <Form className="auth_form login_form"
        layout="vertical"
        onFinish={onFinish}
      >
        <div className="auth_form_title">
          <h2>Login</h2>
        </div>
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
          }}
        >
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>

        <Form.Item
        wrapperCol={{
          span: 24
        }}
        >
          <p>Forget Password? <NavLink to={'/auth/login'}>Reset Password</NavLink></p>
        </Form.Item>

      </Form>
      <div className="action">
        <p>D`ont Have Account <NavLink to={'/auth/register'}>Sing-Up</NavLink></p>
      </div>
    </div>
  );
};

export default Login;