import './style.css';

import HeaderCell from './HeaderCell';

export default function Header({titles=[]}){
    return(
        <div className='table_header' style={{gridTemplateColumns: `repeat(${titles.length},${100/titles.length}%)`}}>
            {titles.map(({key, text, sub_headers}) =>
                <>
                    <HeaderCell key={key} text={text}/>
                    <div>{sub_headers && <Header titles={sub_headers}/>}</div>
                </>
            )}
        </div>
    )
}