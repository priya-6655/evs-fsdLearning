import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import FilePath from './root/FilePath.jsx';
import { Provider } from 'react-redux';
import store from './Store/store.js';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <FilePath />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
