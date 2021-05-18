import React from "react";
import {ProductType} from "../types";
import ImageWithFallback from "../components/ImageWithFallback";




type Props = {
    pdata: ProductType;
    btnClickDec: ()=>void;
    btnClickInc: ()=>void;
    btnClick: () => void;
    productQty: number;
};
type State = {
    price: number
    count: number
};

class Cart extends React.Component<Props, State>{
    state: State = {
        price: this.props.pdata.productPrice, 
        count: this.props.productQty
    };
    
    render(){
        
        return(
            
                <div className="text-center">
                    <ImageWithFallback source={this.props.pdata.productImage}/>
                    <h4>{this.props.pdata.productName}</h4> 
                    Quantity: {this.props.productQty}
                    <br/>
                    Price: {this.props.productQty*this.props.pdata.productPrice}
                    <br/>
                    <button className="btn btn-lg btn-success" onClick={()=> {this.props.btnClickInc();}}>+</button>
                    <button className="btn btn-lg btn-danger" onClick={()=> {this.props.btnClickDec()}}>-</button>
                    <button className="btn btn-lg btn-danger" onClick={()=> {this.props.btnClick()}}>Remove</button>
                </div>
            
        )
    }
};



export default Cart;