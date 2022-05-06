
import { connect } from "react-redux";
import  buyCake  from "../redux/cake/cakeAction";

const CakeContainer = () => {
    return ( 
        <div>
            <h2>number of cakes - </h2>
            <button>Buy cake</button>
        </div>
     );
}
 
// export default CakeContainer;

// 1. available to state
// 2. set State => dispatch
// 3. connetc react to redux

const mapStateToProps = (state) => {
    return {
        numOfCakes : state.numOfCakes
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake : dispatch(buyCake())
    }
}
export default connect;