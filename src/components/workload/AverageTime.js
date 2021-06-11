import { useEffect, useState } from 'react';
import {ProgressBar} from 'react-bootstrap';

export default function AverageTime({data, structure}) { 
    const [max, setMax] = useState();
    useEffect(()=>{
        setMax(Math.max(...structure.map(({key}) => data[key])));
    }, [])
    const toDate = (seconds) => {
        var date = new Date(0);
        date.setSeconds(seconds);
        return date.toISOString().substr(11, 8);
    }
    return (
        <div className='averageTime'>
            {structure.map(({key, text, color}) => 
                <div key={key}>
                    <div>{text}</div>
                    <ProgressBar striped variant={color} now={(data[key]/max)*100}/>
                    <div>{toDate(data[key])}</div>
                </div>
            )}
        </div>
    )
}