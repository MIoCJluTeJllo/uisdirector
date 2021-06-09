import './style.css';

export default function HeaderCell({text}){
    return(
        <div className='table_header_cell'>
            <span>
                {text}
            </span>
        </div>
    )
}