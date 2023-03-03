import { Tabs } from "antd";
import { Link } from "react-router-dom";


const TabsMenu = ()=>{


  const tabs = [
    {label: <Link to='/'>Home</Link>, key: 'home'},
    {label: <Link to='/watch'>Watch</Link>, key: 'watch'},
    {label: <Link to='/market-place'>Market-Place</Link>, key: 'market-place'},
  ]

  return(
    <Tabs 
      defaultActiveKey="home"
      items={tabs}
      tabPosition='top'
    />
  );
};

export default TabsMenu;