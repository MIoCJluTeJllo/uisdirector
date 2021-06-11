import Cell from './Cell';

export default function Row({employee, structure=[]}){
    return(
        <div className='table_row' style={{gridTemplateColumns: `repeat(${structure.length},${100/structure.length}%)`}}>
            {structure.map(({key, format, sub_headers}) => 
                !sub_headers ?
                    <Cell key={key} text={(format && employee[key])  ? format(employee[key]) : employee[key]}/>:
                    <Row employee={employee} structure={sub_headers}/>
            )}
        </div>
    )
}