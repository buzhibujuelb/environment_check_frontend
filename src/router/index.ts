import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { createWebHistory} from 'vue-router';
import dashboard from '../components/dashboard.vue';
import Operation from '../components/Operation.vue';

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: dashboard,
    name: 'dashboard',
    props:{
      msg: "环境资源监测"
    }
  },
  {
    path: '/Operation',
    component: Operation,
    name: 'Operation',
  }
];

const router = createRouter({
  //history: createWebHistory(),
  history: createWebHashHistory(),
  routes: constantRoutes as RouteRecordRaw[],
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 })
});

export function resetRouter() {
  router.replace({ path: '/' });
  location.reload();
}

export default router;
