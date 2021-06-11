import GroupListCell from './GroupListCell'

export default function GroupList({ structure=[], data={}, style }){
    return (
        <div className='group_list' style={style}>
            {structure.map(({key, text, color}) => 
                <GroupListCell key={key} color={color} value={data[key]}/>)
            }
        </div>
    )
}