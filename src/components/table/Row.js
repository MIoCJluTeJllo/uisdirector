import Cell from './Cell';

export default function Row({employee, structure=[]}){
    return(
        <div className='table_row' style={{gridTemplateColumns: `repeat(${structure.length},1fr)`}}>
            {structure.map(({key, sub_headers, prepare, timer}) => 
                sub_headers ? <Row key={key} employee={employee} structure={sub_headers}/> : 
                (!prepare ? 
                    <Cell key={key} value={employee[key]}/>: 
                    (timer ? 
                        <Cell 
                            key={key}
                            value={prepare.func(prepare.keys.map(key => employee[key]))}
                            timer_func={timer.func}
                            timer_start={timer.depend_check(employee[timer.depend_key])}/>:
                        <Cell key={key} value={prepare.func(prepare.keys.map(key => employee[key]))}/>)) 
            )}
        </div>
    )
}

/*
!sub_headers ?
                    (
                        prepare ? <div>aboba</div> : <Cell text={structure[key]}/>
                    ):
                    <Row key={key} employee={employee} structure={sub_headers}/>
                    <Cell text={prepare.func(prepare.keys.map(key => structure[key]))}/>
*/