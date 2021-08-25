
import React from 'react'
// import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/lib/integration/react'
// import { ReduxNetworkProvider } from 'react-native-offline'
import AppStack from './Navigator'
// import createStore from './Store/CreateStore';
// const { store, persistor } = createStore()
const App = () => (
  <>
  {/* // <Provider store={store} >
  //    <ReduxNetworkProvider store={store}>
  //   <PersistGate loading={null} persistor={persistor}> */}
      <AppStack />
    {/* </PersistGate>
    </ReduxNetworkProvider>
  </Provider> */}
  </>
)

export default App
