import React from 'react';
import { render } from 'react-dom'

import './index.css';
import VisibleAppointments from './pages/appointments/VisibleAppointments';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
import { createStore } from 'redux';

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <VisibleAppointments />
  </Provider>,
  document.getElementById('root')
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
