import React from "react";
import {ProductType} from "../types";
import ImageWithFallback from "./ImageWithFallback";



type Props = {
    pdata: ProductType;
    btnClick: ()=>void;
};

class Cart extends React.Component<Props>{
    render(){
        const pdata = this.props.pdata;
        return(
            <div className="text-center">
                <ImageWithFallback source={pdata.productImage}/>
                <h4>{pdata.productName}</h4> 
                <button className="btn btn-lg btn-danger" onClick={()=> {this.props.btnClick();}}>Remove from Cart</button>
            </div>
        )
    }
};

export default Cart;
