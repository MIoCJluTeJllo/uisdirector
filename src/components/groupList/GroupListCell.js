import './style.css';

export default function GroupListCell({text, child}){
    return (
        <div className='group_list_cell'>
            {text}
            <div>
                {child}
            </div>
        </div>
    )
}