import { createBrowserRouter, Navigate } from "react-router-dom";
import GuestUi from "./components/GuestUi";
import DefaultUi from "./components/DefaultUi";
import AdminUi from "./components/AdminUi";
import Signin from "./pages/SignIn";
import Signup from "./pages/Signup";
import Dashboard from "./pages/user/Dashboard";
import ListGame from "./pages/user/ListGame";
import DetailGame from "./pages/user/DetailGame";
import ManageGame from "./pages/user/ManageGame";
import Profile from "./pages/user/Profile";
import ListUser from "./pages/admin/ListUser";
import ListAdmin from "./pages/admin/ListAdmin";
import CreateUser from "./pages/admin/CreateUser";
import EditUser from "./pages/admin/EditUser";

const router = createBrowserRouter([
      {
            path:'/',
            element: <GuestUi/>,
            children:[
                  {
                        path:'/signin',
                        element: <Signin/>
                  },
                  {
                        path:'/signup',
                        element: <Signup/>
                  },
                  {
                        path:'/',
                        element: <Navigate to={'/signin'}/>
                  },
            ]
      },
      {
            path:'/',
            element: <DefaultUi/>,
            children:[
                  {
                        path:'/home',
                        element: <Dashboard/>
                  },
                  {
                        path:'/games',
                        element: <ListGame/>
                  },
                  {
                        path:'/games/:id',
                        element: <DetailGame/>
                  },
                  {
                        path:'/games/manage/:id',
                        element: <ManageGame/>
                  },
                  {
                        path:'/profile',
                        element: <Profile/>
                  },
            ]
      },
      {
            path:'/',
            element: <AdminUi/>,
            children:[
                  {
                        path:'/home',
                        element: <Dashboard/>
                  },
                  {
                        path:'/users',
                        element: <ListUser/>
                  },
                  {
                        path:'/admins',
                        element: <ListAdmin/>
                  },
                  {
                        path:'/create',
                        element: <CreateUser/>
                  },
                  {
                        path:'/edit/:id',
                        element: <EditUser/>
                  },
            ]
      },
])
export default router