import React, { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import About from './Components/About/About';
import Home from './Page/Home/Home';
import Blog from './Blog/Blog';
import Write from './Page/Write/Write';
import Login from './Page/Login/Login';
import Contact from './Contact/Contact';
import Footer from './Components/Footer/Footer';
import SingalPost from "./Components/SingalPost/SingalPost";









function App() {
  const [postData, setPostData] = useState([]);
  const [categoriesData, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost/Mahim_53/React/Project/Blog-site-final/Api/all.php"
        );
        const data = await response.json();
        setPostData(data.posts);
        setCategories(data.categories)
        //console.log(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Main/>,
      children:[
        {
          path:"/",
          element:<Home posts={postData} categories={categoriesData}/>
        },
        {
          path:"about",
          element: <About></About>
        },
        
        {
          path:"blog",
          element : <Blog posts={postData}></Blog>
        },
        {
          path:"contact",
          element : <Contact></Contact>
        },
        {
          path :"create",
          element :<Write></Write>
        },
        {
          path :"login",
          element: <Login></Login>
        },
        {
          path: 'singalpost/:id', 
          element:<SingalPost></SingalPost>
        }
        
      ]
    }
   
  ])
  
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
     <Footer></Footer>
  
    </div>
  );
}

export default App;
