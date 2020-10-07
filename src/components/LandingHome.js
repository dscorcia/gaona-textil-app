import React from 'react'
import { Carrousel } from './Carrousel';
//import { Login } from './Login';
import { Navbar } from './Navbar';


export const LandingHome = () => {
    return (
        <div className="container animated fadeIn faster">
            <Navbar/>
            <br></br>
            <Carrousel/>
        </div>
        
    )
}
