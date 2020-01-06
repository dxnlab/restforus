import indexScreen from './index'
import dashboardScreen from './dashboard'
import projectScreen from './project'
import revisionScreen from './revision'

export default [
    {path: '/', title: 'index', component: indexScreen},
    {path: '/index', component: dashboardScreen},
    {path: '/:owner/:title', component: projectScreen },
    {path: '/:owner/:title/:revision', component: revisionScreen},
];