import { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux'
import { Footer, Header } from './components';
import authservice from './appwrite/auth';
import { login, logout } from './store/authSlice';
import {Outlet} from 'react-router'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authservice.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }else dispatch(logout())
    })
    .finally(() => setLoading(false))
  }, [])

  // conditional rendering
  return !loading ? (
    <div className='flex flex-col min-h-screen'>
        <Header />
        <main className='flex-1 w-full bg-red-400'>
        <Outlet />
        </main>
        <Footer />
    </div>
  ) : null
}

export default App
