import React from 'react';
import RankingBar from "./RankingBar";
import './TopBarStyle.css';
import { Button } from 'reactstrap';
const imageResources = require('../util/ImageResources.js');

class TopBar extends React.Component {
    render() {
        return (
            <div className={"topBar"}>
                <div>
                    <img src={imageResources.categoryImg} id = {"categoryImg"} />
                </div>
                <div>
                    <img src={imageResources.logoImg} id={"logoImg"}/>
                </div>
                <div id={"title"}>
                    음식도서관
                </div>
                <div id={"searchArea"}>
                    <input type={"text"} placeholder={"검색어를 입력하세요."} id={"searchTextInput"}/>
                </div>
                <div id={"searchButtonArea"}>
                    <input type={"image"} src={imageResources.searchButtonImg} id={"searchButton"}/>
                </div>
                <div id={"rankingToggle"}>
                    <RankingBar/>
                </div>
                <div id={"loginButtonArea"}>
                    <Button className={"loginButton"}>로그인</Button>{' '}
                </div>
                <div id={"myPageButtonArea"}>
                    <input type={"image"} src={imageResources.notMemberImage} id={"myPageButton"}/>
                </div>

            </div>

        );
    }

}
export default TopBar;
