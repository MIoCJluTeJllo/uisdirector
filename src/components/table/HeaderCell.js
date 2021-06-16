import './style.css';
import Header from './Header';

export default function HeaderCell({text, sub_headers}){
    return(
        <div className='table_header_cell'>
            <span className='table_header_cell_text'>
                {text}
            </span>
            <div>
                <Header titles={sub_headers}/>
            </div>
        </div>
    )
}