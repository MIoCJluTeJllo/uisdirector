import Row from './Row'

export default function Body({data=[], structure}){
    return(
        <div>
            {data.map(
                item => <Row key={item.key} employee={item} structure={structure}/>
            )}
        </div>
    )
}