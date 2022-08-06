import React from 'react';
import { render } from 'react-dom'

import './index.css';
import VisibleAppointments from './pages/appointments/VisibleAppointments';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';
import { createStore } from 'redux';
import Header  from './components/header';

import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_ar from "./translations/ar/common.json";
import common_en from "./translations/en/common.json";



i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en',                              // language to use
  resources: {
      en: {
          common: common_en               // 'common' is our custom namespace
      },
      ar: {
          common: common_ar
      },
  },
});

const store = createStore(rootReducer)

render(
  <Provider store={store}>
      <I18nextProvider i18n={i18next}>
    <Header />
    <VisibleAppointments />
    </I18nextProvider>
  </Provider>,
  document.getElementById('root')
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
