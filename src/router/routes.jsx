import Main from "../pages/Main/Main"
import SignIn from "../pages/SignIn/SignIn"
import SignUp from "../pages/SignUp/SignUp"

export const publicRoutes = [
  { path: '/signin', component: SignIn },
  { path: '/signup', component: SignUp },
  { path: '/main', component: Main },
]
export const privateRoutes = [
  { path: '/main', component: Main },
]
export const adminRoutes = [
]