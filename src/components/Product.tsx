import React from "react";
import { Link } from "react-router-dom";
import {ProductType} from "../types";
import Currency from "./Currency";
import ImageWithFallback from "./ImageWithFallback";
import ProductPrice from "./ProductPrice";

type Props = {
    pdata: ProductType;
    currencyCode: string;
    btnClick: ()=>void;
};

class Product extends React.Component<Props> {
    
    render(){
        const pdata = this.props.pdata;
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
                <Link to={"/cart"}>
                    <button className="btn btn-md btn-primary" onClick={()=> this.props.btnClick()}>Add to cart</button>
                </Link>
            </div>
        );
    }
}

export default Product;