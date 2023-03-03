import { Spin } from "antd";
import { lazy, Suspense } from "react";
import { useSelector,  } from "react-redux";

function App() {
  const user = useSelector(state=>state.auth.user);
  if(user){
    if(user.admin){
      const AdminRouter = lazy(()=>import('./Routes/admin-router.js'));
      return <AdminRouter/>
    }
    const UserRouter = lazy(()=>import('./Routes/user-router.js'));
    return <Suspense fallback={<Spin/>}><UserRouter/></Suspense>
  }else{
    const AuthRouter = lazy(()=>import('./Routes/auth-router.js'));
    return <Suspense fallback={<Spin/>}><AuthRouter/></Suspense>
  }
};

export default App;
