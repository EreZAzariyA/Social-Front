import { Button, Form, Menu, Spin } from "antd";
import TextArea from "antd/es/input/TextArea";
import "./style.css";

const items = [
  {label:'Live video',key:'live'},
  {label:'Phone/video',key:'upload'},
  {label:'Feeling/activity',key:'feelings'},
];

const UploadInput = (props)=>{
  const { user, post } = props;
  const [form] = Form.useForm();

  const onFinish = (values)=>{
    values.comments = [];
    values.likes = [];
    const postToSave = {
      id: post?.id ? post.id : '',
      ...values,
      dateCreated: new Date().toJSON()
    }

    form.resetFields();
  };

  const placeholder = `Hey ${user.profile?.first_name}, Want to write something?`;

  return(
    <div className="upload_main_container">
      <div className="upload_inner_container">
        <div className="main">
          <Form onFinish={onFinish} form={form} name='post_upload'>
            <Form.Item name={'post'}>
              <TextArea autoSize placeholder={placeholder}/>
            </Form.Item>
            
            <Form.Item>
              <Button type="link" htmlType="submit">
                Post
              </Button>
            </Form.Item>
          </Form>
          <Menu
            mode="horizontal"
            className="actions_menu"
            items={items}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadInput;