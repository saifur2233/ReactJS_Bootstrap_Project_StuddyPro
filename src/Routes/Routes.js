import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Courses from "../Pages/Courses/Courses";
import Error404 from "../Pages/Error/Error404";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";

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
                element: <Courses></Courses>
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
                path: '*',
                element: <Error404></Error404>
            }
        ]
    }
])