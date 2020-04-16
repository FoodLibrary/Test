import React,{Component} from 'react';
import {Container,Row,Col} from 'reactstrap';
import './ProductPageHead.css';
import ImageResources from '../util/ImageResources';

class ProductPageHead extends Component{
    render(){
        return(
                <Container className="ProductPageHeadframe1">
                    <Row md="2" xs="1">
                        <Col className="ProductPageHeadTitle" md="auto">진라면(매운맛)</Col>
                        <Col>
                            <Row xs="1" md="1" >
                                <Col>
                                    <img className={"ProductPageHeadImg"} src={ImageResources.heart}></img>
                                    <img className={"ProductPageHeadImg"} src={ImageResources.thumb}></img>
                                </Col>
                                <Col xs="auto" md={"auto"}>
                                    <button className="ProductPageHeadButton">구매하러가기</button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <hr/>
                </Container>
        );
    }
}

export default ProductPageHead;