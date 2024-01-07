import LoadScale from "../components/Scales/LoadScale"
import AddCategoryScale from "../pages/AdminPages/AddCategoryScale/AddCategoryScale"
import AddScale from "../pages/AdminPages/AddScale/AddScale"
import Basket from "../pages/Basket/Basket"
import Catalog from "../pages/Catalog/Catalog"
import Category from "../pages/Category/Category"
import AboutCompany from "../pages/InfoPages/AboutCompany"
import ContactsCompany from "../pages/InfoPages/ContactsCompany"
import Main from "../pages/Main/Main"
import Profile from "../pages/Profile/Profile"
import Contacts from "../pages/Profile/ProfilePages/Contacts/Contacts"
import Search from "../pages/Search/Search"
import SignIn from "../pages/SignIn/SignIn"
import SignUp from "../pages/SignUp/SignUp"

export const publicRoutes = [
  { path: '/signin', component: SignIn },
  { path: '/signup', component: SignUp },
  { path: '/main', component: Main },
  { path: '/scale/:id', component: LoadScale },
  { path: '/aboutCompany', component: AboutCompany },
  { path: '/contacts', component: ContactsCompany },
]
export const privateRoutes = [
  { path: '/main', component: Main },
  { path: '/profile', component: Profile },
  { path: '/profile/orders', component: Profile },
  { path: '/profile/contacts', component: Profile },
  { path: '/catalog', component: Catalog },
  { path: '/scale/:id', component: LoadScale },
  { path: '/categoryScale/:id', component: Category },
  { path: '/search/:id', component: Search },
  { path: '/basket', component: Basket },
  { path: '/aboutCompany', component: AboutCompany },
  { path: '/contacts', component: ContactsCompany },
]
export const adminRoutes = [
  { path: '/addScale', component: AddScale },
  { path: '/addCategoryScale', component: AddCategoryScale },
  { path: '/editScale/:id', component: AddScale },
]