import './style.css';

import Header from './Header';
import Body from './Body';

export default function MonitoringTable({headers, data, gridStyle}){
    return(
        <div className='monitoring_table'>
            <Header titles={headers}/>
            <Body data={data} structure={headers}/>
        </div>
    )
}