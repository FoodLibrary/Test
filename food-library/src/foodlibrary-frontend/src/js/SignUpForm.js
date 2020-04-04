import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, CustomInput} from 'reactstrap';
import Filtering from "./Filtering";
const imageResources = require('../util/ImageResources.js');

class SignUpForm extends React.Component {
    render() {
        return (
            <div >
                <Form id={"signUpForm"}>
                    <FormGroup row>
                        <Label sm={3}> 아이디 : </Label>
                        <Col sm={8}>
                            <Input type="text" name="id" id="id"/>
                        </Col>
                        <Col sm={1}>
                            <Button id={"checkDup"}> 중복 확인 </Button>
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
                            <Input type="text" name="userName" id="userName" />
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
                            <Input type="radio" /> 남자
                        </Label>
                        <Label check sm={3}>
                            <Input type="radio" /> 여자
                        </Label>
                    </FormGroup>
                    <FormGroup row>
                        <Label sm={3}>생년 월일 : </Label>
                        <Label sm={9}>
                            <Input
                                type="date"
                                name="date"
                                id="exampleDate"/>
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

                    <FormGroup row>
                        <Label sm={3}> 내 정보 저장 :  </Label>
                        <Label sm={9}></Label>
                    </FormGroup>

                    <div className={"allergyArea"}>
                        <FormGroup check inline row>
                            알레르기 :
                            <Label check className={"allergy"} >
                                <Input type="checkbox" />
                                <span className={"allergyNames"} id={"shrimp"}> 새우 </span>
                            </Label>
                        </FormGroup>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" />
                                <span className={"allergyNames"} id={"oyster"}> 굴 </span>
                            </Label>
                        </FormGroup>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" />
                                <span className={"allergyNames"} id={"crab"}> 게 </span>
                            </Label>
                        </FormGroup>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" />
                                <span className={"allergyNames"} id={"peach"}> 복숭아 </span>
                            </Label>
                        </FormGroup>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" />
                                <span className={"allergyNames"} id={"mussel"}> 홍합 </span>
                            </Label>
                        </FormGroup>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" />
                                <span className={"allergyNames"} id={"squid"}> 오징어 </span>
                            </Label>
                        </FormGroup>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" />
                                <span className={"allergyNames"} id={"abalone"}> 전복 </span>
                            </Label>
                        </FormGroup>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" />
                                <span className={"allergyNames"} id={"mackerel"}> 고등어 </span>
                            </Label>
                        </FormGroup>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" />
                                <span className={"allergyNames"} id={"shell"}> 조개류 </span>
                            </Label>
                        </FormGroup>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" />
                                <span className={"allergyNames"} id={"tomato"}> 토마토 </span>
                            </Label>
                        </FormGroup>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" />
                                <span className={"allergyNames"} id={"buckwheat"}> 메밀 </span>
                            </Label>
                        </FormGroup>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" />
                                <span className={"allergyNames"} id={"soybean"}> 대두 </span>
                            </Label>
                        </FormGroup>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" />
                                <span className={"allergyNames"} id={"walnut"}> 호두 </span>
                            </Label>
                        </FormGroup>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" />
                                <span className={"allergyNames"} id={"peanut"}> 땅콩 </span>
                            </Label>
                        </FormGroup>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" />
                                <span className={"allergyNames"} id={"egg"}> 난류(가금류) </span>
                            </Label>
                        </FormGroup>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" />
                                <span className={"allergyNames"} id={"milk"}> 우유 </span>
                            </Label>
                        </FormGroup>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" />
                                <span className={"allergyNames"} id={"beef"}> 쇠고기 </span>
                            </Label>
                        </FormGroup>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" />
                                <span className={"allergyNames"} id={"pork"}> 돼지고기 </span>
                            </Label>
                        </FormGroup>
                        <FormGroup check inline className={"allergyCheck"}>
                            <Label check className={"allergy"}>
                                <Input type="checkbox" />
                                <span className={"allergyNames"} id={"sulfurousAcid"}> 아황산 포함 식품 </span>
                            </Label>
                        </FormGroup>
                    </div>
                    <div className={"diseaseArea"}>
                    <FormGroup check inline className={""}>
                        지병 :
                        <Label check className={"disease"}>
                            <Input type="checkbox" />
                            <span className={"diseaseNames"} id={"osteoporosis"}> 골다공증 </span>
                        </Label>
                    </FormGroup>
                    <FormGroup check inline className={"diseaseCheck"}>
                        <Label check className={"disease"}>
                            <Input type="checkbox" />
                            <span className={"diseaseNames"} id={"disease"}> 질병B </span>
                        </Label>
                    </FormGroup>
                    <FormGroup check inline className={"diseaseCheck"}>
                        <Label check className={"disease"}>
                            <Input type="checkbox" />
                            <span className={"diseaseNames"} id={"disease"}> 질병C </span>
                        </Label>
                    </FormGroup>
                    <FormGroup check inline className={"diseaseCheck"}>
                        <Label check className={"disease"}>
                            <Input type="checkbox" />
                            <span className={"diseaseNames"} id={"disease"}> 질병D </span>
                        </Label>
                    </FormGroup>
                    <FormGroup check inline className={"diseaseCheck"}>
                        <Label check className={"disease"}>
                            <Input type="checkbox" />
                            <span className={"diseaseNames"} id={"disease"}> 질병E </span>
                        </Label>
                    </FormGroup>
                    <FormGroup check inline className={"diseaseCheck"}>
                        <Label check className={"disease"}>
                            <Input type="checkbox" />
                            <span className={"diseaseNames"} id={"disease"}> 질병F </span>
                        </Label>
                    </FormGroup>
                    <FormGroup check inline className={"diseaseCheck"}>
                        <Label check className={"disease"}>
                            <Input type="checkbox" />
                            <span className={"diseaseNames"} id={"disease"}> 질병G </span>
                        </Label>
                    </FormGroup>
                    <FormGroup check inline className={"diseaseCheck"}>
                        <Label check className={"disease"}>
                            <Input type="checkbox" />
                            <span className={"diseaseNames"} id={"disease"}> 질병H </span>
                        </Label>
                    </FormGroup>
                    <FormGroup check inline className={"diseaseCheck"}>
                        <Label check className={"disease"}>
                            <Input type="checkbox" />
                            <span className={"diseaseNames"} id={"disease"}> 질병I </span>
                        </Label>
                    </FormGroup>
                    <FormGroup check inline className={"diseaseCheck"}>
                        <Label check className={"disease"}>
                            <Input type="checkbox" />
                            <span className={"diseaseNames"} id={"disease"}> 질병J </span>
                        </Label>
                    </FormGroup>
                    </div>
                    <FormGroup className={"signUpButtonArea"}>
                        <Button className={"signUpButton"}> 회원 가입 </Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default SignUpForm;