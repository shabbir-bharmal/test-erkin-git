import Users from '../Components/Users.vue'
import UserCreate from '../Components/UserCreate.vue'
import UserEdit from '../Components/UserEdit.vue'

const routes = [{
        path: '/',
        name: 'users',
        component: Users
    }, {
        path: '/users',
        name: 'users.index',
        component: Users
    },
    {
        path: '/users/create',
        name: 'users.create',
        component: UserCreate
    },
    {
        path: '/users/:id/edit',
        name: 'users.edit',
        component: UserEdit,
        props: true
    },
];

export default routes;
