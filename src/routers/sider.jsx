import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4244459_h20geczkl5a.js',
});

const siders = {
  routes: [
    {
      path: '/',
    },
    {
      path: '/home',
      name: '首页',
      icon: <IconFont type="cmdb-welcome" />,
      routes: [
        {
          path: '/home/welcome',
          name: '欢迎',
        },
      ],
    },
    {
      name: '应用管理',
      icon: <IconFont type="cmdb-applications" />,
      path: '/application',
      routes: [
        {
          path: '/application/app',
          name: '应用',
          component: './Welcome',
        },
        {
          path: '/application/business',
          name: '业务线',
          component: './Welcome',
        },
        {
          path: '/application/product',
          name: '产品线',
          component: './Welcome',
        },
      ],
    },
    {
      name: '资产管理',
      icon: <IconFont type="cmdb-Assets" />,
      path: '/asset',
      component: './ListTableList',
      routes: [
        {
          path: '/asset/mcs',
          name: '私有云MCS',
          component: './Welcome',
        },
        {
          path: '/asset/ecs',
          name: '公有云ECS',
          component: './Welcome',
        },
        {
          path: '/asset/domain',
          name: 'MOB域名',
          component: './Welcome',
        },
      ],
    },
    {
      name: '机房管理',
      icon: <IconFont type="cmdb-jifang" />,
      path: '/idc',
      component: './ListTableList',
      routes: [
        {
          path: '/idc/room',
          name: '机房',
        },
        {
          path: '/idc/mode',
          name: '模块间',
        },
        {
          path: '/idc/cabinet',
          name: '机柜',
        },
      ],
    },
    {
      name: '网络管理',
      icon: <IconFont type="cmdb-Earth_network" />,
      path: '/network',
      routes: [
        {
          path: '/network/vpc',
          name: 'MOBVPC',
        },
        {
          path: '/network/subnet',
          name: 'MOB子网',
        },
        {
          path: '/network/vender',
          name: '网络设备',
        },
        {
          path: '/network/line',
          name: '网络线路',
        },
      ],
    },
    {
      name: '操作审计',
      icon: <IconFont type="cmdb-shenjirizhi" />,
      path: '/audit',
      routes: [
        {
          path: '/audit/base',
          name: '操作日志',
        }
      ],
    },
    {
      name: '配置管理',
      icon: <IconFont type="cmdb-settings" />,
      path: '/settings',
      routes: [
        {
          path: '/settings/env',
          name: '环境管理',
        }
      ],
    },
  ],
}


export default siders