import React from 'react';
import {Container, Row, Col, Label} from 'reactstrap';
import './ProductListStyle.css';
import {Image, Table} from "react-bootstrap";

const imageResources = require('../util/ImageResources.js');

class ProductList extends React.Component {
    render() {
        return (
            <Table className={"productList"}>
                <tbody>
                <th className={"indexAndButtons"}>
                        <Container className={"indexAndButtonsContainer"}><Row>
                            <Col className={"index"}> 1. </Col></Row><Row>
                            <Col className={"heart"}> <Image src={imageResources.myHeart}
                                                             className={"heartAndThumbImages"}/> </Col></Row><Row>
                            <Col className={"thumb"}> <img src={imageResources.thumb}
                                                           className={"heartAndThumbImages"}/> </Col></Row>
                        </Container>
                </th>
                <td className="foodPictureAreaCol">음식 사진
                </td>
                <td className="foodInfoAreaCol">
                     음식 설명
                </td>
                </tbody>
            </Table>
        );
    }
}

export default ProductList;