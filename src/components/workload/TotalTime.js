import './style.css';
import { PieChart } from 'react-minimal-pie-chart';

import {TIME_FORMAT} from './../../utils';

export default function TotalTime({data=[], structure=[]}) { 
    const pieData = () => structure.map(({text, color, key}) => ({title: text, color, value: (data[key] ? data[key]: 0)}));
    return (
        <div className='totalTime'>
            {data &&
                (<>
                    <div className='totalTimePie'>
                        <PieChart 
                            animate={true}
                            lineWidth={15}
                            startAngle={270}
                            data={pieData()}/>
                        <div className='totalTimePieTotal'>
                            {TIME_FORMAT.DURATION_TO_HM(structure.reduce((sum, {key}) => sum + (data[key] ? data[key]: 0), 0))}
                            <p>Всего</p>
                        </div>
                    </div>
                    <div className='totalTimeValues'>
                        {structure.map(({text, key, color}) => 
                            <div className='totalTimeValuesItem' key={key}>
                                <div className='totalTimePoint' style={{backgroundColor: color}}></div>
                                <div className='totalTimeValuesItemText'>
                                    <div>{text}</div>
                                    <div>{TIME_FORMAT.DURATION_TO_HM(data[key] ? data[key]: 0, true)}</div>
                                </div>
                            </div>)}
                    </div>
                </>)
            }
        </div>
    )
}