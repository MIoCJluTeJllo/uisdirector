import Cell from './Cell';

export default function Row(){
    return(
        <div className='table_row'>
            {[1, 2, 3, 4].map(cell => <Cell/>)}
        </div>
    )
}