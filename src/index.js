import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App';

import { Provider } from 'react-redux';
import initStore, { sagaMiddleware } from './store/configureStore';
import rootSaga from './saga';


export const store = initStore();

sagaMiddleware.run(rootSaga);

// const app = (
//   <React.StrictMode>
//     <Provider store={store} >
//       <App />
//     </Provider>
//   </React.StrictMode>
// );
const app = (
  
    <Provider store={store} >
      <App />
    </Provider>
  
);


ReactDOM.render(app,  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
