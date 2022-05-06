import { useDispatch, useSelector } from "react-redux";
import { buyIceCream } from "../redux/iceCream/IceCreamAction";

const HookIceCreamContainer = () => {
    const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
    const dispatch = useDispatch();
    return ( 
        <div>
            <h3>num of iceCreams : {numOfIceCreams}</h3>
            <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
        </div>
     );
}
 
export default HookIceCreamContainer;