import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'reactstrap';
import * as serviceWorker from './serviceWorker';


/*
//랭킹 화면
import './Ranking/Ranking.css';
import Ranking from './Ranking/Ranking';

ReactDOM.render(
    <React.StrictMode>
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

*/

/*
//로그인 화면
import './index.css';
import LoginPage from './sj/LoginPage';

ReactDOM.render(
    <React.StrictMode>
        <LoginPage />
    </React.StrictMode>,
    document.getElementById('root')
);

*/

/*
//상품상세화면
import './index.css';
import ProductPage from './sj/ProductPage';

ReactDOM.render(
    <React.StrictMode>
        <ProductPage />
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
        <ResultFiltering />
        <SearchResult />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();