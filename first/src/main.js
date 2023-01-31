import React, { useState, useEffect } from 'react';
import styles from './main.module.css';

export const Main = () => {
    const [isSaleOn, setIsSaleOn] = useState(false);
    const [isBorderOn, setIsBorderOn] = useState(false);

    const onStartSale = () => {
        setIsSaleOn(true);        
    };

    const onStopSale = () => {
        setIsSaleOn(false);
    };

    const saleClassName = isBorderOn ? 
        `${styles.saleHeader} ${styles.sale}` :
        styles.saleHeader;


    useEffect(() => {    
        let id;
        console.log("1111" + id)

        if (isSaleOn) {  
            id = setInterval(() => {
                setIsBorderOn(prevVal => !prevVal);
            }, 1000);
        }

        return () => {
            clearInterval(id);
            console.log("2222" + id)
        };
    }, [isSaleOn]);




    return (
        <div>
            <button onClick={onStartSale}>start sale!</button>
            <button onClick={onStopSale}>stop sale!</button>
            <h1 className={saleClassName}>SALE!</h1>
        </div>
    );
};


