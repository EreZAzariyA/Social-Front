import { Menu } from "antd";


const Contact = ()=>{

  const items = [
    {
      label: <h3 style={{color: 'black'}}>Contacts</h3>,
      type: 'group',
    },
    
    
    {key:'a',label:'a',icon:null,title:'a'},
    {key:'b',label:'b',icon:null,title:'b'},
    {key:'c',label:'c',icon:null,title:'c'},
  ];


  return(
    <Menu
      mode="inline"
      items={items}
    />
  )
};

export default Contact;