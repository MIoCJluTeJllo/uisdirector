import ClipLoader from "react-spinners/ClipLoader";

export default function Indicator({loading=false}){
    return (
        <ClipLoader loading={loading} size={100} />
    )
}