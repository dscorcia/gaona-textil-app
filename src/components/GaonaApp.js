import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { AppRouter } from '../router/AppRouter';
import { Navbar } from './Navbar';

export const GaonaApp = () => {
    return (
    <Provider store={ store }>
        <div>
            <Navbar/>
            <AppRouter/>
        </div>
    </Provider>
    )
    
}
