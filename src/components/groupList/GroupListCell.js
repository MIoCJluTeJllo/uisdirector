import './style.css';

export default function GroupListCell({data}){
    return (
        <div className='group_list_cell'>
            <h5 className='group_list_cell_title'>{data.text}</h5>
            <div className='group_list_cell_value'>
                {data.form}
            </div>
        </div>
    )
}