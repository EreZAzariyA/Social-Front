import React, { lazy, useEffect, useState } from "react";
import { Layout, Menu, Spin } from "antd";
import { useResize } from "../Utils/helpers";
import "./style.css";

const Routing = lazy(()=>import('./routing'));
const Bookmarks = lazy(()=>import('../Components/bookmarks/index'));
const Contact = lazy(()=>import('./contacts/index'));
const { Content, Sider } = Layout;


const Main = ()=>{
  const { isMobile, isResponsive } = useResize();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setIsLoading(false);
  },[]);

  if(!isLoading){
    return(
      <Layout
        className="main_layout"
        style={!isResponsive ? { marginLeft: '20em',marginRight: '14.5em' } : !isMobile ? { marginRight: '14.5em'} : {}}
      >
        {!isResponsive &&
          <Sider theme="light" 
            width={300}
            className="profile_sider"
          >
            <Bookmarks />
          </Sider>
        }

        <Content>
          <Routing/>
        </Content>

        {!isMobile &&
          <Sider 
            theme="light" 
            width={200} 
            className="seconde-sider"
          >
            <Contact/>
          </Sider>
        }
      </Layout>
    );
  } else return <Spin/>
};

export default Main;
