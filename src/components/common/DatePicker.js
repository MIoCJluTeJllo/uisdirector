import './style.css';
import { useState } from "react";

export default function DatePicker({onSelect}){
    const [range, setRange] = useState();
    const select = () => {
        onSelect(range);
    }
    return (
        <div className='date_picker'>
            от:<input type="date" onSelect={(e)=>setRange(prev => ({...prev, start: e.target.value}))}/>
            до:<input type="date" onSelect={(e)=>setRange(prev => ({...prev, end: e.target.value}))}/>
            <button onClick={select} className='date_picker_button'><span>&#x21bb;</span></button>
        </div>
    )
}