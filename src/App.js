import { Provider } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";


const App = () => {
  return ( 
    <Provider store={store}>
      <div className="App">
          <h3>React-Redux App</h3>
          <CakeContainer />
      </div>
    </Provider>
   
  );
}
 
export default App;