import { createRouter, createWebHistory } from 'vue-router'


const UserList = () => import('../components/user/userListContainer/UserListContainer.vue')
const UserForm = () =>import('../components/user/userFormContainer/UserFormContainer.vue')
const EmpList = () => import ('../components/employee/employeeListContainer/EmployeeListContainer.vue')
const EmpForm = () => import ('../components/employee/employeeFormContainer/EmployeeFormContainer.vue')
const ConsList = () => import ('../components/consumer/consumerListContainer/ConsumerListContainer.vue')
const routes:any = [
  {
    path: '/',
    name: 'userList',
    component: UserList
  },
  {
    path: '/add',
    name: 'addForm',
    component: UserForm
  },
  {
    path: '/edit/:id',
    name: 'editForm',
    component: UserForm
  },
  {
    path: '/empList',
    name: 'empList',
    component: EmpList
  },
  {
    path: '/addEmp',
    name: 'addEmpForm',
    component: EmpForm
  },
  {
    path: '/editEmp/:id',
    name: 'editEmpForm',
    component: EmpForm
  },
  {
    path: '/consList',
    name: 'consList',
    component: ConsList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
