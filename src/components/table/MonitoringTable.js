import './style.css';

import Header from './Header';
import Body from './Body';

export default function MonitoringTable({header, data}){
    return(
        <div className='monitoring_table'>
            <Header titles={header}/>
            <Body data={data}/>
        </div>
    )
}