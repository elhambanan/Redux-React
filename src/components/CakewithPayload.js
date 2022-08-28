import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cake/cakeAction";

const CakeWithPayload = () => {
    const [numbers, setNumbers] = useState();
    const numOfCakes = useSelector((state) => state.cake.numOfCakes);
    const dispatch = useDispatch()
    return ( 
        <div>
            <h2>number of cakes - {numOfCakes} </h2>
            <input type="text" onChange />
            <button onClick={()=> dispatch(buyCake())}>Buy cake</button>
        </div>
     );
}

export default CakeWithPayload;