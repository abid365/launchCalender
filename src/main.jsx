import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import CalendarProvider from './providers/CalendarProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CalendarProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </CalendarProvider>
  </React.StrictMode>,
)
