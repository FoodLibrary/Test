import React,{Component} from 'react';
import ProductPageHead from '../../ProductDefaultDiv/js/ProductPageHead';
import ImageChart from "../../ProductDefaultDiv/js/ImageChart";
import ProductDesc from './ProductDesc';
import ProductPageMember from './ProductPageMember';
import ProductPageNaver from './ProductPageNaver';
import '../css/ProductPage.css'
import {Container,Row,Col} from 'reactstrap';

class ProductPage extends Component{
    render(){
        return (
            <div className="ProductPage">
                <ProductPageHead/>
                <Container>
                <hr/>
                <div className="ProductPageHeadManufactur">제조사:오뚜기</div>
                <hr/>
                </Container>
                <ImageChart/>
                <ProductDesc/>
                <ProductPageMember/>
                <ProductPageNaver/>
            </div>
        );
    }
}

export default ProductPage;