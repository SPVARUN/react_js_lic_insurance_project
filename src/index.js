import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
// import RoutingPage from './Routing/RoutingPage';
// import Photos from './DataFetch/Datafetch'
import Main from './Components/Main'

// import UploadScreen from './Agi';
//  import Project from './Project1';
// import Reduxdemo from './Redux/Reduxdemo';
// import Agi from './Agi';
// import Test from './Test'








ReactDOM.render(<Main/> , document.getElementById('root'));

serviceWorker.unregister();
