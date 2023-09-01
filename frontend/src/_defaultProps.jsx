import { ChromeFilled, CrownFilled, SmileFilled, TabletFilled } from '@ant-design/icons'
import SPA from './pages/spa'

export default {
    route: {
        path: '/',
        routes: [
            {
                path: '/SPA',
                name: '集对法',
                icon: <SmileFilled />,
                component: <SPA />,
            },
            {
                path: '/PCA',
                name: '主成分分析',
                icon: <CrownFilled />,
                component: './pages/pca',
            },
            {
                path: '/MEA',
                name: '物元分析法',
                icon: <CrownFilled />,
                component: './pages/mea',
            },
        ],
    },
    location: {
        pathname: '/',
    },
    appList: [
        {
            icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
            title: 'Pro Components',
            desc: '专业级 UI 组件库',
            url: 'https://procomponents.ant.design/',
        },
    ],
}
