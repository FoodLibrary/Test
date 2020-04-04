import React from 'react';
import TopBar from "./TopBar";
import {Button} from "reactstrap";
import EditMemberInfoForm from "./EditMemberInfoForm";

const imageResources = require('../util/ImageResources.js');

class EditMemberInfo extends React.Component {
    render() {
        return (
            <div>
                <TopBar/>
                <div>
                    <div id={"editMemberPageTitle"}> 회원 정보 수정 </div>
                </div>
                <div>
                    <div>
                        <span id={"ageAndSexInfoText"}> 20대/여자 </span>
                        <span id={"memberImageArea"}> <img src={imageResources.memberImage} id={"memberImage"}/> </span>
                        <span id={"editMemberInfo"}> <Button className={"editMemberInfoButton"}> 회원 정보 수정 </Button> </span>
                    </div>
                    <div>
                        <hr id={"lineFull"}/>
                    </div>
                    <div>
                        <EditMemberInfoForm/>
                    </div>
                </div>

            </div>
        );
    }
}

export default EditMemberInfo;