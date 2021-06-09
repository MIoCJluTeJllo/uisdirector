import GroupListCell from './GroupListCell'

export default function GroupList({ structure=[], data={} }){
    return (
        <div className='group_list'>
            {structure.map(({key, text, color}) => 
                <GroupListCell key={key} text={text} color={color} value={data[key]}/>)
            }
        </div>
    )
}