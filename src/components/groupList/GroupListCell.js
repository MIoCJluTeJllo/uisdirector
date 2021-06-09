import './style.css';

export default function GroupListCell({text, value, color}){
    return (
        <div className='group_list_cell'>
            {text}
            <div style={{color}} className='group_list_cell_number'>
                {value}
            </div>
        </div>
    )
}