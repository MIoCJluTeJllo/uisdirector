import Row from './Row'

export default function Body({data}){
    return(
        <div>
            {data.map(
                row => <Row/>
            )}
        </div>
    )
}