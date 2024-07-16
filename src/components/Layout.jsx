import React from 'react'
import Header from './organisms/Header'
import Navbar from './organisms/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return(
        <>
            <Header />
            <Navbar />
            <Outlet />
        </>
    )
}