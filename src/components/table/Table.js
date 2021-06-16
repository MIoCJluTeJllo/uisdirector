import './style.css';

import Header from './Header';
import Body from './Body';

export default function Table({headers, data, accordion=false}){
    return(
        <div className='monitoring_table'>
            <Header titles={headers}/>
            <Body data={data} structure={headers} accordion={accordion}/>
        </div>
    )
}