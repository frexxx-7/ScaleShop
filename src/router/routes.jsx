import Main from "../pages/Main/Main"

export const publicRoutes = [
  //{ path: '/signin', component: Autorization },
  //{ path: '/signup', component: Registration },
  { path: '/main', component: Main },
]
export const privateRoutes = [
  { path: '/main', component: Main },
]
export const adminRoutes = [
]