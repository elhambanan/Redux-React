import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeAction";

const HookCakeContainer = () => {
    const numOfCakes = useSelector((state) => state.cake.numOfCakes);
    const dispatch = useDispatch()
    return ( 
        <div>
            <h2>number of cakes - {numOfCakes} </h2>
            <button onClick={()=> dispatch(buyCake())}>Buy cake</button>
        </div>
     );
}

export default HookCakeContainer;