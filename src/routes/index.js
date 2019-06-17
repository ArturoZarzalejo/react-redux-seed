import React from 'react';

/* components */
import Home from '../views/home/Home'

export const routes = [
    {
        path: "/",
        exact: true,
        name: 'home',
        main: () => <Home />
    },
    {
        path: "/example",
        exact: true,
        name: 'example',
        main: () => <div style={{backgroundColor: '#fafafa', minHeight: 90 + 'vh'}}></div>
    }
];