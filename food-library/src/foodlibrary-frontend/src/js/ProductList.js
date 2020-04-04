import React from 'react';
import { Container, Row, Col, Label } from 'reactstrap';
const imageResources = require('../util/ImageResources.js');

class ProductList extends React.Component {
    render() {
        return (
            <div className={"productList"}>
                <div className={"indexAndButtons"}>
                    <Container className={"indexAndButtonsContainer"}>
                        <Col className={"index"}> 1. </Col>
                        <Col className={"heart"} > <img src={imageResources.myHeart} className={"heartAndThumbImages"}/> </Col>
                        <Col className={"thumb"}> <img src={imageResources.thumb} className={"heartAndThumbImages"}/> </Col>
                    </Container>
                </div>

                <div className={"foodPictureArea"}>
                    <Container>
                        <Row className={"foodPicture"}>
                            <Col> 음식 사진 </Col>
                        </Row>
                    </Container>
                </div>
                <div className={"foodInfoArea"}>
                    <Container>
                        <Row className={"foodInfo"}>
                            <Col> 음식 설명 </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default ProductList;