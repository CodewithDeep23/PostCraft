import React from 'react'
import {Container, Logo, LogoutBtn} from "../index"
import { Link } from 'react-router'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

function Header() {

  const authStatus = useSelector((state) => state.status)

  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus
    },
    {
      name: "Singup",
      slug: "/signup",
      active: !authStatus
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus
    }
  ]

  return (
    <header className='py-3 bg-gray-500 shadow'>
      <Container className='px-10'>
        <nav className='flex'>
          <div>
            <Link to="/">
              <Logo width='70px'/>
            </Link>
          </div>
          <ul className='flex ml-auto gap-3'>
            {navItems.map((item) => 
              item.active ? (
                <li key={item.name}>
                  <button
                  onClick={() => navigate(item.slug)}
                  className='bg-[#3d5a80] text-white font-bold inline-block px-6 py-2 duration-200 hover:bg-[#233d4d] rounded-full'
                  >{item.name}</button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header
