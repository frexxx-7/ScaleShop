import Main from "../pages/Main/Main"
import SignIn from "../pages/SignIn/SignIn"

export const publicRoutes = [
  { path: '/signin', component: SignIn },
  //{ path: '/signup', component: Registration },
  { path: '/main', component: Main },
]
export const privateRoutes = [
  { path: '/main', component: Main },
]
export const adminRoutes = [
]