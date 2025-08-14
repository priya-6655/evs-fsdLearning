import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import FilePath from './root/FilePath.jsx';
import { Provider } from 'react-redux';
import { store, persistor } from './Store/store.js';
import { PersistGate } from 'redux-persist/integration/react';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <FilePath />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
