export default function PageTitle({text}){
    return(
        <>
            <h1 className='monitoring_title' srtyle={{
                fontSize: "36px",
                fontStyle: "normal",
                lineHeight: "40px",
                color: "#3d3d3d",
                padding: "8px 12px",}}>
                {text}
            </h1>
        </>
    )
}