import React from 'react'
import { AppRouter } from '../router/AppRouter'
import { Navbar } from './Navbar'

export const GaonaApp = () => {
    return (
        <div>
            <Navbar/>
            <AppRouter/>
            
        </div>
    )
}
