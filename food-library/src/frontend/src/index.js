import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import 'reactstrap'
import * as serviceWorker from './serviceWorker';
import TopBar from "./js/TopBar";
import Filtering from "./js/Filtering"
import './index.css'
import './css/TopBarStyle.css'
import './css/FilteringStyle.css'
import './css/SignUpStyle.css'
import './css/MyPageStyles.css'
import './css/RankingBarStyle.css'
import SignUp from "./js/SignUp";
import EditMemberInfo from "./js/EditMemberInfo";
import MyPage from "./js/MyPage";
import App from "./App"
ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
