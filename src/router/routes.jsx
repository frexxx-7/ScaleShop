import Main from "../pages/Main/Main"
import Profile from "../pages/Profile/Profile"
import SignIn from "../pages/SignIn/SignIn"
import SignUp from "../pages/SignUp/SignUp"

export const publicRoutes = [
  { path: '/signin', component: SignIn },
  { path: '/signup', component: SignUp },
  { path: '/main', component: Main },
]
export const privateRoutes = [
  { path: '/main', component: Main },
  { path: '/profile', component: Profile },
  { path: '/profile/orders', component: Profile},
  { path: '/profile/contacts', component: Profile},
]
export const adminRoutes = [
]