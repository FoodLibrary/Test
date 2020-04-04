import React from 'react';
import TopBar from "./TopBar";
import SignUpForm from "./SignUpForm";
const imageResources = require('../util/ImageResources.js');

class SignUp extends React.Component {
    render() {
        return (
            <div>
                <TopBar/>
                <div>
                    <div className={"subTitleAndLogo"}>
                        <div id={"subLogo"}>
                            <img src={imageResources.logoImg} id = {"subLogoImage"} />
                        </div>
                        <div id={"subTitle"}>
                            음식도서관
                        </div>
                    </div>
                    <div className={"signUpTitle"}>
                        회원 가입
                    </div>
                    <div className={"signUpText"}>
                        모든 항목을 입력해 주세요.
                    </div>
                    <div>
                        <SignUpForm/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;