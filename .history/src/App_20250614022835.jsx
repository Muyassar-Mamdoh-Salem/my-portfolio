import { useState , lazy, useEffect, Suspense } from 'react';
import { createBrowserRouter , createRoutesFromElements , Route , RouterProvider , Outlet } from 'react-router';
import { FadeLoader } from 'react-spinners';
const Home = lazy (() => import ('./Pages/Home'));
const Projects = lazy (() => import ('./Pages/Projects'));
const Navbar = lazy (() => import ('./Components/Navbar'));
const Footer = lazy (() => import ('./Components/Footer'));
import './App.css'

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },1000)
  },[])

  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='projects' element={<Projects/>}/>
      </Route>
    </Route>
  ))
  return (
    <div>
      {loading ? <div className="flex items-center justify-center h-[100vh] bg-gradient-to-l from-[#0D1B2A] to-[#0A0F1F]">
        <h1 className='name text-[40px] font-serif md:text-7xl '>
          <span>E</span>
          <span>n</span>
          <span>g/</span>
          <span className='mx-2'></span>
          <span>M</span>
          <span>u</span>
          <span>y</span>
          <span>a</span>
          <span>s</span>
          <span>s</span>
          <span>a</span>
          <span>R</span>
          
        </h1>
      </div> : <Suspense fallback={<div className='bg-[#0A0F1F] h-[100vh] flex items-center justify-center'><FadeLoader color='#FF6F91' /></div>}><RouterProvider router={router}/></Suspense>}
    </div>
  )
}

export default App