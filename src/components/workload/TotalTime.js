import './style.css';
import { PieChart } from 'react-minimal-pie-chart';
import { useEffect, useState } from 'react';

export default function TotalTime({data, structure}) { 
    const [pieData, setPieData] = useState([]);
    useEffect(() => {
        setPieData(structure.map(({text, color, key}) => ({title: text, color, value: data[key]})));
    }, [])
    const toDate = (seconds) => {
        var date = new Date(0);
        date.setSeconds(seconds);
        return date.toISOString().substr(11, 8);
    }
    return (
        <div className='totalTime'>
            <PieChart 
                animate={true}
                rounded={true}
                lineWidth={15}
                startAngle={270}
                paddingAngle={12}
                data={pieData}/>
            {structure.map(({text, key}) => 
                <div>
                    <div>{text}</div>
                    {toDate(data[key])}
                </div>)}
        </div>
    )
}