import { Spin } from "antd";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = lazy(()=>import('../Components/home/index'));

const Routing = ()=>{
  return(
    <Suspense fallback={<Spin/>}>
      <Routes>
        <Route path="/" element={<Home/>} caseSensitive />
        
        <Route path="*" element={<Navigate to={'/page-not-found'}/>}/>
      </Routes>
    </Suspense>
  );
};

export default Routing;
