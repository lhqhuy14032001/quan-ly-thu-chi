const Register = () =>
  import(/* webpackChunkName: "register" */ "@/views/register");
const HomePage = () => import(/* webpackChunkName: "home" */ "@/views/index");
const Login = () => import(/* webpackChunkName: "login" */ "@/views/login");
const NavigationBrand = () =>
  import(
    /* webpackChunkName: "navigationBrand" */ "@/components/NavigationBrand"
  );
const Profile = () =>
  import(/* webpackChunkName: "profile" */ "@/views/profile");
const Logout = () => import(/* webpackChunkName: "logout" */ "@/views/logout");
const Report = () => import(/* webpackChunkName: "report" */ "@/views/report");
const Budget = () => import(/* webpackChunkName: "budget" */ "@/views/budget");
const newTransaction = () =>
  import(/* webpackChunkName: "new-transaction" */ "@/views/newTransaction");
export {
  HomePage,
  Login,
  Register,
  NavigationBrand,
  Profile,
  Logout,
  Report,
  Budget,
  newTransaction,
};
