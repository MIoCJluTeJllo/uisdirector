import {ProgressBar} from 'react-bootstrap';

import {TIME_FORMAT} from './../../utils';

export default function AverageTime({data, structure}) { 
    const max = () => Math.max(...structure.map(({key}) => data[key] ? data[key] : -Infinity))
    return (
        <div className='averageTime'>
            {data && (structure.map(({key, text, color}) => 
                data[key] && (
                <div className='averageTimeItem' key={key}>
                    <div className='averageTimeItemText'>{text}</div>
                    <div className='averageTimeItemBar'><ProgressBar striped variant={color} now={(data[key]/max())*100}/></div>
                    <div className='averageTimeItemValue'>{TIME_FORMAT.DURATION_TO_HM(data[key], true)}</div>
                </div>
            )))}
        </div>
    )
}