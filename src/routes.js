import React from 'react'
import HomePage from './pages/HomePage'
import WomenPage from './pages/WomenPage'
import MenPage from './pages/MenPage'
import KidPage from './pages/KidPage'
import CartPage from './pages/CartPage'
import SignIn from './components/SignIn'
import NotFound from './pages/NotFoundPage'
import NewArrivals from './pages/NewArrivals'
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage/>
    },
    {
        path: '/women',
        exact: false,
        main:()=> <WomenPage/>
    },
    {
        path: '/men',
        exact: false,
        main:() => <MenPage />
    },
    {
        path: '/kid',
        exact: false,
        main: ()=> <KidPage />
    },
    {
        path: '/cart',
        exact: false,
        main:() => <CartPage />
    },
    {
        path:'/login',
        exact:false,
        main: ()=> <SignIn/>
    },
    {
        path: '/newArrivals',
        exact: false,
        main:() => <NewArrivals/>
    },
    {
        path: '',
        exact: false,
        main:()=> <NotFound/>
    }
]
export default routes