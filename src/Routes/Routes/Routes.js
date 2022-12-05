import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Components/Blog/Blog";
import CheackMe from "../../Components/CheckMe/CheackMe";
import CourseDetails from "../../Components/CourseDetails/CourseDetails";
import Courses from "../../Components/Courses/Courses";
import FAQ from "../../Components/FAQ/FAQ";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Login/Login";
import Premium from "../../Components/Premium/Premium";
import Profile from "../../Components/Profile/Profile";
import Register from "../../Components/Register/Register";
import SingleCourses from "../../Components/SingleCourses/SingleCourses";
import Main from "../../Layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/home',
                element:<Home></Home>
            },
            {
                path: 'courses',
                element: <Courses></Courses>
            },
            {
                path:'news/:id'
            },
            {
                path: 'faq',
                element:<FAQ></FAQ>
            },
            {
                path: 'blog',
                element:<Blog></Blog>
            },
            {
                path: '/coursemore/:id',
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/premium/:id',
                loader: ({ params }) => fetch(`https://go-learn-server-mr-rahman786.vercel.app/corses-catagories/${params.id}`),
                element: <PrivateRoute><Premium></Premium></PrivateRoute>
            },
            {
                path: '/terms',
                element:<CheackMe></CheackMe>
            },
            {
                path: 'profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
        
    },
    
])