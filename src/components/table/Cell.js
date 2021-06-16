import './style.css';
import { useEffect, useState } from "react"

export default function Cell({value, timer_start, timer_func}){
    const [time, setTime] = useState(0);
    const [text, setText] = useState(timer_func ? timer_func(value) : value);
    useEffect(()=>{
        let timerID = null;
        if (timer_start){
            timerID = setInterval(() => {
                setTime(prev => prev+1);
                setText(timer_func(time*1000 + value));
            }, 1000);
        }
        return () => clearInterval(timerID);
    }, [time, timer_start])
    return(
        <div className='table_row_cell'>
            {text != 'Invalid date' ? text : ""}
        </div>
    )
}