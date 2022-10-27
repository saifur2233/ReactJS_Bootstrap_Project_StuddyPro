import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Courses from "../Pages/Courses/Courses";
import Error404 from "../Pages/Error/Error404";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Category from "../Shared/Category/Category";
import Checkout from '../Pages/Checkout/Checkout'
import Cart from '../Pages/Cart/Cart'
import PrivateRoute from '../Routes/PrivateRoute'

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader:()=> fetch(`http://localhost:5000/courses`)
            },
            {
                path: '/course/:id',
                element: <Category></Category>,
                loader:({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/cart',
                element: <Cart></Cart>
            },
            {
                path: '/checkout',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '*',
                element: <Error404></Error404>
            }
        ]
    }
])