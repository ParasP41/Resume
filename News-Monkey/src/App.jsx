import React, { useEffect } from 'react'
import Data from './Components/Data'
import { initFlowbite } from 'flowbite'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout'
function App() {

  useEffect(()=>
  {
    initFlowbite();
    // Your code here to initialize Flowbite
  })

  const router= createBrowserRouter([
    {path:'/',
      element:<Layout/>,
      children:[
        {path:'',element:<Data category='' />},
        {path:'/general', element:<Data category='general'/>},
        {path:'/sports', element:<Data category='sports'/>},
        {path:'/entertainment', element:<Data category='entertainment'/>},
        {path:'/science', element:<Data category='science'/>},
        {path:'/business', element:<Data category='business'/>},
        {path:'/health', element:<Data category='health'/>},
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
