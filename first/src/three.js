import React, {useContext} from 'react';
import {valContext} from './app';

export const Three = () => {
    const val = useContext(valContext);

    console.log('RENDER THREE');

    return <>
        <h1>Three</h1>
        <h2>val: {val}</h2>
    </>
    
};
