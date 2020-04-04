import React from 'react';
import { Button } from 'reactstrap';
import TopBar from "./TopBar";
import Filtering from "./Filtering";
import ProductList from "./ProductList";
const imageResources = require('../util/ImageResources.js');

class MyPage extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <TopBar/>
                </div>
                <div id={"myPageTitle"}>
                    마이페이지
                </div>
                <div>
                    <span id={"ageAndSexInfoText"}> 20대/여자 </span>
                    <span id={"memberImageArea"}> <img src={imageResources.memberImage} id={"memberImage"}/> </span>
                    <span id={"editMemberInfo"}> <Button className={"editMemberInfoButton"}> 회원 정보 수정 </Button> </span>
                </div>
                <div>
                    <hr id={"lineLeft"}/>
                    <hr id={"lineRight"}/>
                </div>
                <div>
                    <Button className={"myFilter"}>
                        <img src={imageResources.myFilter} id={"myFilterLogo"}/>
                        내 필터링
                    </Button>
                </div>
                <div>
                    <Filtering/>
                </div>
                <div id={"myHeartArea"}>
                    <Button className={"myHeart"}>
                        <img src={imageResources.myHeart} id={"myHeartLogo"}/>
                        내 찜목록
                    </Button>
                </div>
                <div>
                    <ProductList/>
                </div>
            </div>


        );
    }
}

export default MyPage;