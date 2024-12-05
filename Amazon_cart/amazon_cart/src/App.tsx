import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './App.css'
import { Wishlist } from './components/wishlist'
import { Cart } from './components/addtocart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen w-screen '>
        <BrowserRouter>
          <Topbar></Topbar>
            <Routes>
              <Route path='/' element={<div> This is the landing page </div>}></Route>
              <Route path='/wishlist' element={<Wishlist></Wishlist>}></Route>
              <Route path='/cart' element={<Cart></Cart>}></Route>
            </Routes>
        </BrowserRouter>
      </div>
    </>
  )

  function Topbar() {

    const navigate = useNavigate();

    function handleClick() 
    {
      navigate('/cart');
    }

    return (
      <div className='bg-slate-800  flex justify-between text-white font-sans '>
        <div onClick={() => 
          {
            navigate('/');
          }
        } className='text-4xl font-semibold p-5 w-screen h-[10%] cursor-pointer'>
          amazon.in
        </div>
        <div className='flex p-1 items-center'>
          <div className='p-2 text-right  w-40'>
            Hello, User
          </div>
          <div className='px-3'>
            <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-7 cursor-pointer">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </div>
        </div>
      </div>
    )
  }
}

export default App