import './style.css';

import HeaderCell from './HeaderCell';

export default function Header({titles}){
    return(
        <div className='table_header'>
            {titles.map(({key, text}) => 
                <HeaderCell key={key} text={text}/>)}
        </div>
    )
}