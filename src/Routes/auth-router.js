import { Routes,Route,Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Spin } from "antd";

const Login = lazy(()=>import('../Layout/auth/login/index.js'));
const Register = lazy(()=>import('../Layout/auth/register/index.js'));
const PageNotFound = lazy(()=>import('../Components/page-not-found/index.js'));

const AuthRouter = ()=>{
  return(
    <div className="auth-router router-layout">
      <div className="header">
        
      </div>

      <div className="content">
        <Suspense fallback={<Spin/>}>
          <Routes>
            <Route path="auth/login" element={<Login/>} caseSensitive />
            <Route path="auth/register" element={<Register/>} caseSensitive />
  
            <Route path="/*" element={<Navigate to='/auth/login' />}/>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default AuthRouter;