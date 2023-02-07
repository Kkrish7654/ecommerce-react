import React from 'react'
//import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const routes = [
        {
            path:"/",
            name:"Home"
        },
        {
            path:"/cart",
            name:"Cart"
        },
        {
            path:"/allproducts",
            name:"Products"
        },
    ]
  return (
    <div className='flex justify-between items-center px-8 p-2'>
        <div>
            <h1 className='text-xl'>E-kart</h1>
        </div>
        <div>

        
      <nav>
        <ul className='flex gap-4'>
            {
                routes.map((route)=>(
                    <a className="hover:text-emerald-500" href={route.path} key={route.name}>
                        <li className=''>{route.name}</li>
                    </a>
                ))
            }
        </ul>
      </nav>
      </div>
    </div>
  )
}

export default Navbar;
