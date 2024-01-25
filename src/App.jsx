import { useNavigate, useLocation } from 'react-router-dom';
import { PageContainer, ProLayout } from '@ant-design/pro-components';
import { useSnapshot } from 'valtio';
import { Dropdown, Alert, Card } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

import logo from './assets/avtor.jpg';
import siders from '@/routers/sider';
import { userState } from '@/models/user';
import Login from '@/pages/user/login';
import appStyle from './app.module.less';
import RouterComponents from './routers/index.jsx';

function App() {
  const state = useSnapshot(userState);

  const location = useLocation();
  const { pathname } = location;

  const navigate = useNavigate();

  const onUserLogout = () => {
    navigate('/login');
  };

  if (pathname == '/login') {
    return <Login />;
  }

  return (
    <ProLayout
      title="MOB-CMDB"
      logo={logo}
      iconfontUrl="//at.alicdn.com/t/c/font_4244459_f2kcbn2gsm8.js"
      layout="side"
      route={siders}
      waterMarkProps={{
        content: state.userInfo.username || 'MOB CMDB',
      }}
      menuItemRender={(item, dom) => (
        <a onClick={() => navigate(item.path || '/')}>{dom}</a>
      )}
      avatarProps={{
        src: logo,
        size: 'default',
        title: state.userInfo.username || 'CMDB',
        render: (props, dom) => {
          return (
            <Dropdown
              menu={{
                items: [
                  {
                    key: 'logout',
                    icon: <LogoutOutlined />,
                    label: '退出登录',
                    onClick: onUserLogout,
                  },
                ],
              }}
            >
              {dom}
            </Dropdown>
          );
        },
      }}
      token={{
        sider: {
          colorMenuBackground: '#009588',
        },
      }}
    >
      <PageContainer header={false}>
        <div className={appStyle.childComponent}>
          <RouterComponents />
        </div>
      </PageContainer>
    </ProLayout>
  );
}

export default App;
