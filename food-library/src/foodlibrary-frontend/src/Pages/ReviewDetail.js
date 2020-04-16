import React from 'react';
import ImageChart from "../ReviewPage/ImageChart";
import OriginInfo from "../ReviewPage/OriginInfo";
import StarPoint from "../ReviewPage/ReviewWritePage/StarPoint";
import ReviewDetailTitle from "../ReviewPage/ReviewDetailPage/ReviewDetailTitle";
import ReviewDisplay from "../ReviewPage/ReviewDetailPage/ReviewDisplay";
import ReviewPhoto from "../ReviewPage/ReviewPhoto";
import HashTagDisplay from "../ReviewPage/ReviewDetailPage/HashTagDisplay";
import Cancel from "../ReviewPage/Cancel";
import ProductPageHead from "../ReviewPage/ProductPageHead";
import "./ReviewDetail.css"

function ReviewDetail() {
    return (
        <div className="ReviewDetail">
            <ProductPageHead/>
            <ReviewDetailTitle/>
            <ImageChart/>
            <OriginInfo/>
            <StarPoint/>
            <ReviewDisplay/>
            <ReviewPhoto/>
            <HashTagDisplay/>
            <Cancel/>
        </div>

    );
}

export default ReviewDetail;
