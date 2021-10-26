import React from 'react'
import Route from './config/route'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Route />
    </Provider>
    </div>
  );
}

export default App;
