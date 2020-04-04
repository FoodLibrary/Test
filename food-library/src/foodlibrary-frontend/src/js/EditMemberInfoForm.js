import React from 'react';
import TopBar from "./TopBar";
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";
const imageResources = require('../util/ImageResources.js');

class EditMemberInfoForm extends React.Component {
    render() {
        return (
            <div>
                <Form id={"editMemberForm"}>
                    <FormGroup row>
                        <Label sm={3}> 아이디 : </Label>
                        <Col sm={9}>
                            <Label> User ID Label </Label>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={3}>비밀번호 : </Label>
                        <Col sm={9}>
                            <Input valid type="password" name="password" id="password" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={3}>비밀번호 확인 : </Label>
                        <Col sm={9}>
                            <Input valid type="password" name="password" id="password"  />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={3}>이름 : </Label>
                        <Col sm={9}>
                            <Label> User Name Label </Label>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label  sm={3}>E-mail : </Label>
                        <Col sm={9}>
                            <Input type="email" name="email" id="email"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={3}> 성별 : </Label>
                        <Label check sm={3}>
                            <Input type="radio" className={"men"} /> 남자
                        </Label>
                        <Label check sm={3}>
                            <Input type="radio" className={"women"} checked={"checked"}/> 여자
                        </Label>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={3}>생년 월일 : </Label>
                        <Label sm={9}>
                            YYYY - MM - DD
                        </Label>
                    </FormGroup>

                    <FormGroup row>
                        <Label sm={3}> 전화번호 : </Label>
                        <Label sm={2}>
                            <Input type="select" name="select" id="exampleSelect">
                                <option> 010 </option>
                                <option> 011 </option>
                                <option> 012 </option>
                                <option> 016 </option>
                                <option> 017 </option>
                                <option> 019 </option>
                                <option> 070 </option>
                            </Input>
                        </Label>
                        -
                        <Label sm={3}>
                            <Input type="text" name="middleNumber" id="middleNumber">
                            </Input>
                        </Label>
                        -
                        <Label sm={3}>
                            <Input type="text" name="lastNumber" id="lastNumber">
                            </Input>
                        </Label>
                    </FormGroup>
                    <FormGroup className={"editMemberInfoArea"}>
                        <Button className={"editMemberInfoFormButton"}> 회원 정보 수정 </Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default EditMemberInfoForm;