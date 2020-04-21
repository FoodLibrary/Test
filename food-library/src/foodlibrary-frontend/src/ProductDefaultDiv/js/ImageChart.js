import React, {Component} from 'react';
import '../css/ImageChart.css';
import {Container, Row, Col, Table} from 'reactstrap';
import ImageResources from '../../util/ImageResources';

class ImageChart extends Component {
    render() {
        return (
            <Container>
            <Container>
                <Row xs="1" md="2">
                    <Col className={"ProductImageCol"} md="3">
                        <img className={"ProductImage"} src={ImageResources.productImage}/>
                    </Col>
                    <Col className="ChartRow" md={{size:7,offset:2}}>
                        <Row className={"ChartRow"} xs="1" md="1">
                            <Col className={"foodChartTitle"} xs={{size:5,offset:4}} md={{size:5, offset:4}}>식품분석표</Col>
                            <Col className="foodTable">
                                <Table className="foodTable">
                                    <tr>
                                        <th>
                                            1회제공량(g)
                                        </th>
                                        <th>
                                            열량(kcal)
                                        </th>
                                        <th>
                                            탄수화물(g)
                                        </th>
                                        <th>
                                            단백질(g)
                                        </th>
                                        <th>
                                            지방(g)
                                        </th>
                                        <th>
                                            당류(g)
                                        </th>
                                        <th>
                                            나트륨(g)
                                        </th>
                                        <th>
                                            콜레스테롤(mg)
                                        </th>
                                        <th>
                                            포화지방산(g)
                                        </th>
                                        <th>
                                            트랜스지방산(g)
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>
                                            aaa
                                        </td>
                                        <td>
                                            aaa
                                        </td>
                                        <td>
                                            aaa
                                        </td>
                                        <td>
                                            aaa
                                        </td>
                                        <td>
                                            aaa
                                        </td>
                                        <td>
                                            aaa
                                        </td>
                                        <td>
                                            aaa
                                        </td>
                                        <td>
                                            aaa
                                        </td>
                                        <td>
                                            aaa
                                        </td>
                                        <td>
                                            aaa
                                        </td>
                                    </tr>
                                </Table>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr/>
            </Container>
            </Container>
        );
    }
}

export default ImageChart;
