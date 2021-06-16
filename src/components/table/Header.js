import './style.css';

import HeaderCell from './HeaderCell';

export default function Header({titles=[]}){
    return(
        <div className='table_header' style={{gridTemplateColumns: `repeat(${titles.length},1fr`}}>
            {titles.map(({key, text, sub_headers}) =>
                <HeaderCell sub_headers={sub_headers} key={key} text={text}/>
            )}
        </div>
    )
}