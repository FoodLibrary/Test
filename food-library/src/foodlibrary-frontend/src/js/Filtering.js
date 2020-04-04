import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const imageResources = require('../util/ImageResources.js');

class Filtering extends React.Component {
    render() {
        return (
            <div>
                <Form>
                    <div>
                    <FormGroup check inline className={"allergyCheck"}>
                        알레르기 :
                        <Label check className={"allergy"}>
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
                    </div>
                    <div className={"secondRow"}>
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
                </Form>
                <Form>
                    <FormGroup check inline className={"diseaseCheck"}>
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
                </Form>
                <div id={"filteringButtons"}>
                    <span id={"clearButtonArea"}> <Button className={"clearButton"}> 초기화 </Button> </span>
                    <span id={"saveButtonArea"}> <Button className={"saveButton"}> 저장 </Button></span>
                </div>
            </div>
        );
    }
}

export default Filtering;