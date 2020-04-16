import React from 'react';
import ImageChart from "../ReviewPage/ImageChart";
import OriginInfo from "../ReviewPage/OriginInfo";
import StarPoint from "../ReviewPage/ReviewWritePage/StarPoint";
import ReviewWriteTitle from "../ReviewPage/ReviewWritePage/ReviewWriteTitle";
import ReviewTextWrite from "../ReviewPage/ReviewWritePage/ReviewTextWrite";
import ReviewPhoto from "../ReviewPage/ReviewPhoto";
import HashTagWrite from "../ReviewPage/ReviewWritePage/HashTagWrite";
import Cancel from "../ReviewPage/Cancel";
import ProductPageHead from "../ReviewPage/ProductPageHead";
import "./ReviewWrite.css"


function ReviewWrite() {
    return (
        <div className="ReviewWrite">
            <ProductPageHead/>
            <ReviewWriteTitle/>
            <ImageChart/>
            <OriginInfo/>
            <StarPoint/>
            <ReviewTextWrite/>
            <ReviewPhoto/>
            <HashTagWrite/>
            <Cancel/>
        </div>

    );
}

export default ReviewWrite;