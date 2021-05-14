import React from "react";
import {ProductType} from "../types";
import Currency from "./Currency";
import ImageWithFallback from "./ImageWithFallback";

type Props = {
    pdata: ProductType;
    wishlist?: boolean;
    currencyCode: string;
};

class Product extends React.Component<Props> {
    renderStock(stock: number){
        if(stock<=0){
            return <p>Out of stock</p>
        }
        return <button>Add to cart</button>
    }
    render(){
        const pdata = this.props.pdata;
        const wishlist = this.props.wishlist;
        const currencyCode = this.props.currencyCode;
        return(
            <div>
                <ImageWithFallback source={pdata.productImage}/>
                <h4>{pdata.productName}</h4>
                <h5>{currencyCode}{pdata.productPrice}</h5>
                <button>{wishlist ? "add to wishlist" : "add to cart"}</button>
                {this.renderStock(pdata.productStock)}
            </div>
        );
    }
}

export default Product;