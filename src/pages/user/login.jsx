import { Form, Input, Button } from 'antd';
import { useSnapshot } from 'valtio';
import { useNavigate } from 'react-router-dom';

import loginStyle from './index.module.less';
import { userState } from '@/models/user';
import { userLogin } from '../../services/user';
import { setUserInfo } from '../../models/user';

const Login = () => {
  const [form] = Form.useForm();

  const state = useSnapshot(userState);
  const navigate = useNavigate();

  const onLogin = () => {
    form.validateFields().then((values) => {
      userLogin(values).then((response) => {
        setUserInfo(response);
        navigate('/');
      });
    });
  };

  return (
    <div className={loginStyle.container}>
      <div className={loginStyle.slogn}></div>
      <div className={loginStyle.login}>
        <div>
          <h2>MOB运维平台</h2>
          <Form form={form}>
            <Form.Item name="username" required>
              <Input placeholder="用户名" />
            </Form.Item>
            <Form.Item name="password" required>
              <Input.Password placeholder="密码" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" block onClick={onLogin}>
                登录
              </Button>
            </Form.Item>
          </Form>
          <h3>全新一代CMDB平台，对比友商，遥遥领先</h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
