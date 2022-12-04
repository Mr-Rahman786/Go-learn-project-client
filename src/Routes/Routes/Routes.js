import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Components/Blog/Blog";
import CourseDetails from "../../Components/CourseDetails/CourseDetails";
import Courses from "../../Components/Courses/Courses";
import FAQ from "../../Components/FAQ/FAQ";
import Home from "../../Components/Home/Home";
import SingleCourses from "../../Components/SingleCourses/SingleCourses";
import Main from "../../Layout/Main";

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
                element:<Courses></Courses>
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
                // loader:async({params})=>fetch(''),
                element: <CourseDetails></CourseDetails>
            }
        ]
        
    },
    
])