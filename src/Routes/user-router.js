import { Spin } from "antd";
import { lazy, Suspense } from "react";
import { Routes,Route, Navigate } from "react-router-dom";

const Main = lazy(()=>import('../Layout/index'));
const Profile = lazy(()=>import('../Components/profile/index'));
const Header = lazy(()=>import('../Layout/header/index'));
const PageNotFound = lazy(()=>import('../Components/page-not-found/index'));

const UserRouter = ()=>{
  return(
    <div className="user-router router-layout">
      <div className="header">
        <Header/>
      </div>
      
      <div className="content">
        <Suspense fallback={<Spin/>}>
          <Routes>
            <Route path="/home/*" element={<Main/>} caseSensitive />
            <Route path="/profile/:user_id" element={<Profile/>} caseSensitive />

            <Route path="/" element={<Navigate to='/home'/>}/>
            <Route path="/*" element={<PageNotFound/>}/>
          </Routes>
        </Suspense>
      </div>
    </div>
  )
};

export default UserRouter;