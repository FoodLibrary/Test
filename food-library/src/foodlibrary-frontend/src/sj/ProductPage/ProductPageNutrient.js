import React,{Component} from 'react';
import './ProductPageNutrient.css'
import { Container,Row,Col } from 'reactstrap';

class ProductPageNutrient extends Component{
    render(){
        return(
            <Container>
                <Container className="ProductPageNutrientframe1">
                    <Row md="2" xs="1">
                        <Col className="ProductPageNutrientColTag" md="3">
                            <img className="ProductPageNutrientImg" src="https://cdn.zeplin.io/5e62877178f87615c993cd42/assets/46919DA9-54F9-42D2-AF84-07A47F7FE37C.png"></img>
                        </Col>
                        <Col className="ProductPageNutrientColTag" md={{size:8,offset:1}}>
                            <table border="1" id="ProductPageNutrientTable">
                                <caption>식품분석표</caption>
                                <tr>
                                    <td>A</td>
                                    <td>B</td>
                                    <td>C</td>
                                    <td>A</td>
                                    <td>B</td>
                                    <td>C</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>20</td>
                                    <td>30</td>
                                    <td>10</td>
                                    <td>20</td>
                                    <td>30</td>
                                </tr>
                            </table>
                        </Col>
                    </Row>
                </Container>
                <hr></hr>
            </Container>
        );
    }
}
export default ProductPageNutrient;