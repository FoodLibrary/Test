import React,{Component} from 'react';
import ProductPageHead from './ProductPage/ProductPageHead';
import ProductPageNutrient from './ProductPage/ProductPageNutrient';
import ProductDesc from './ProductPage/ProductDesc';
import ProductPageMember from './ProductPage/ProductPageMember';
import ProductPageNaver from './ProductPage/ProductPageNaver';
import './ProductPage.css'

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
                <ProductPageNutrient/>
                <ProductDesc/>
                <ProductPageMember/>
                <ProductPageNaver/>
            </div>
        );
    }
}

export default ProductPage;