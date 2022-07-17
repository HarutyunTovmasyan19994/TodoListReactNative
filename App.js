import React from 'react';
import { Provider } from 'react-redux';
import {store} from "./src/Redux/Store/store";
import Routs from "./src/Routes/Routes";

const App =() =>{
  return(
    <Provider store={store}>
      <Routs/>
    </Provider>
  )
}
export default App
