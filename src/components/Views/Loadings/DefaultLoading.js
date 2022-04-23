import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";


const DefaultLoading = () => {
    const loading = useSelector((state) => state.user.loading);
    return (
        <div>
             <ClipLoader color={"#f00"} loading={loading} size={150} />
        </div>
    )
}

export default DefaultLoading;