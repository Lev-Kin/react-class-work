import React, {useState} from 'react';
import { Three } from './three';


export const Two = () => {
    console.log('RENDER TWO');
    return <>
        <h1>Two</h1>
        <Three/>
    </>
    
};
