import React from "react";
import { Link } from "react-router-dom";
import {ProductType} from "../types";
import Currency from "./Currency";
import ImageWithFallback from "./ImageWithFallback";
import ProductPrice from "./ProductPrice";

type Props = {
    pdata: ProductType;
    wishlist?: boolean;
    currencyCode: string;
    btnClick:()=>void;
};


class Product extends React.Component<Props> {
    renderStock(stock: number){
        if(stock<=0){
            return <p>Out of stock</p>
        }
            return <button className="btn btn-md btn-primary" onClick={() => {this.props.btnClick();}}>Add to cart</button>
    }
    render(){
        const pdata = this.props.pdata;
        const wishlist = this.props.wishlist;
        const currencyCode = this.props.currencyCode;
        return(
            <div className="text-center">
                <Link to={`/productdetails/${pdata.productId}`}>
                    <ImageWithFallback source={pdata.productImage}/>
                </Link>
                <h4>{pdata.productName}</h4>
                <h5>
                <ProductPrice 
                    price={pdata.productPrice}
                    salePrice={pdata.productSalePrice}
                    code={currencyCode}
                />
                </h5>
                {this.renderStock(pdata.productStock)}
            </div>
        );
    }
}

export default Product;