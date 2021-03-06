import Dashboard from "../components/Pages/Dashboard";
import Login from "../components/Pages/Login";
import { removeToken } from "./auth";

export const SubRoutes= [
    {
        path: "/login",
        component: Login,
        name: "Çıkış Yap",
        exact: true,
        private: false,
        fn: () => {
            removeToken();
        }
    },
]

export const Routes = [
    {
        path: "/dashboard",
        component: Dashboard,
        name: "Anasayfa",
        exact: true,
        private: true
    },
  
]