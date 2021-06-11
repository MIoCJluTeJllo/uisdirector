export default function Cell({text, prepare=(text)=>text}){
    return(
        <div className='table_row_cell'>
            {prepare(text)}
        </div>
    )
}