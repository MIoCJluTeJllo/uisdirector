import { useEffect, useState } from 'react';
import './style.css';

export default function NumberCell({text, color}) {
    return (
        <div className='numberCell' style={{color}}>
            {text ? text : ""}
        </div>
    )
}