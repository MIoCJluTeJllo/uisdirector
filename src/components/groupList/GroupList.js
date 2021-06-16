import GroupListCell from './GroupListCell'

export default function GroupList({ items=[] }){
    return (
        <div className='group_list' style={{gridTemplateColumns: `repeat(${items.length},${100/items.length}%)`}}>
            {items.map((item, index) => 
                <GroupListCell key={index} data={item}/>)
            }
        </div>
    )
}