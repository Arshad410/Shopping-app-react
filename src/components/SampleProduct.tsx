import React from "react";
import {ProductType} from "../types";
import ImageWithFallback from "./ImageWithFallback";

type Props = {
    pdata: ProductType;
    wishlist?: boolean;
    currencyCode: string;
};

class SampleProduct extends React.Component<Props> {
    
    render(){
        const pdata = this.props.pdata;
        const wishlist = this.props.wishlist;
        const currencyCode = this.props.currencyCode;
        return(
            <div className="text-center">
                <ImageWithFallback source={pdata.productImage}/>
                <h4>{pdata.productName}</h4>
                {/* <h5>{currencyCode}{pdata.productPrice}</h5> */}
                <h5>Login to see price</h5>
            </div>
        );
    }
}

export default SampleProduct;