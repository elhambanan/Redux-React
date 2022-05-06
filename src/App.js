import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import HookCakeContainer from "./components/HookCakeContainer";
import HookIceCreamContainer from "./components/HookIceCreamContainer";
import store from "./redux/store";


const App = () => {
  return ( 
    <Provider store={store}>
      <div className="App">
          <CakeContainer />
          <HookCakeContainer />
          <HookIceCreamContainer />
      </div>
    </Provider>
   
  );
}
 
export default App;