import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'reactstrap';
import Filtering from "./js/Filtering";
import './index.css';
import './css/TopBarStyle.css';
import './css/FilteringStyle.css';
import './css/SignUpStyle.css';
import './css/MyPageStyles.css';
import './css/RankingBarStyle.css';
import SignUp from "./js/SignUp";
import EditMemberInfo from "./js/EditMemberInfo";
import MyPage from "./js/MyPage";
import ReviewDetail from './Pages/ReviewDetail';
import ReviewWrite from './Pages/ReviewWrite';
import TopBar from "./js/TopBar";

/*

//리뷰 작성 화면
ReactDOM.render(
    <React.StrictMode>
        <TopBar/>
        <ReviewWrite/>
    </React.StrictMode>,
    document.getElementById('root')
);

*/

/*
//랭킹 화면
import './Ranking/Ranking.css';
import Ranking from './Ranking/Ranking';

ReactDOM.render(
    <React.StrictMode>
    <TopBar/>
        <Ranking />
    </React.StrictMode>,
    document.getElementById('root')
);
*/

/*
//메인화면
import Main from './Main/Main'

ReactDOM.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>,
    document.getElementById('root')
);
*/

/*
//회원 가입 화면
ReactDOM.render(
    <React.StrictMode>
        <TopBar/>
        <SignUp/>
    </React.StrictMode>,
    document.getElementById('root')
);
*/

/*
//로그인 화면
import './index.css';
import LoginPage from './sj/LoginPage';

ReactDOM.render(
    <React.StrictMode>
    <TopBar/>
        <LoginPage />
    </React.StrictMode>,
    document.getElementById('root')
);

*/

/*
//상품상세화면
//import ProductPage from './sj/ProductPage';

ReactDOM.render(
    <React.StrictMode>
        <TopBar/>
        <ProductPage />
    </React.StrictMode>,
    document.getElementById('root')
);
*/
/*
//리뷰 상세 화면 
ReactDOM.render(
    <React.StrictMode>
        <ReviewDetail/>
    </React.StrictMode>,
    document.getElementById('root')
);
*/
//검색 결과 화면
import './SearchResult/ResultIndex.css';
import ResultFiltering from './SearchResult/ResultFiltering';
import SearchResult from './SearchResult/SearchResult';

ReactDOM.render(
    <React.StrictMode>
        <TopBar/>
        <ResultFiltering />
        <SearchResult />
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
