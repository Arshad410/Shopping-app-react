import React from "react";
import Cart from "../components/Cart"
import Column from "../components/Column";
import Row from "../components/Row";
import {CartType, ProductType, StoreType} from "../types";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import CartActions from "../store/actions/CartActions";
import { Link, Redirect, RouteComponentProps } from "react-router-dom";
import CartDecoration from "../components/CartDecoration";

type Props = {
    products: CartType[];
    addItem: (product: ProductType)=>void;
    removeItem : (id: number) => void;
    incQty: (qtyId: number) => void;
    decQty: (id: number) => void;
} &RouteComponentProps;
type State = { 
    plist: CartType[],
};



class CartList extends React.Component<Props, State> {
    state: State = {
        plist: this.props.products,

    };

    componentDidMount(){
        this.getFromCart();
        
    } 

    async getFromCart(){
        try{
            console.log(this.props.products);
            console.log(this.state.plist);
        } catch(e) {
            console.log(e);
        }
    }
    
    removeFromCart(id: number) {
        this.props.removeItem(id);
    }

    addToCart(product: ProductType){
        this.props.addItem(product);
    }

    incrementQty(qtId: number) {
        this.props.incQty(qtId);
    }

    decrementQty(id: number) {
        this.props.decQty(id);
    }

    render(){
        return(
            <div>
            <CartDecoration/>
            <Link to={"/payment"}>
                <button className="btn btn-lg btn-primary">Make Payment</button>
            </Link>
            <Row>
                {
                    this.props.products.map((data: any, index: number) => {
                        return <Column size={12}>
                                    <Cart pdata={data} 
                                          btnClickDec={()=> this.decrementQty(data.productId)}
                                          btnClickInc={()=>this.incrementQty(data.productId)}
                                          key={data.productId}
                                          btnClick={()=>this.removeFromCart(data.productId)} 
                                          productQty={data.productQty}
                                    />

                               </Column>
                    })
                }
            </Row>
            </div>
        );
    }
}

const mapStoreToProps = (store: StoreType) => {
    return {
        products: store.cart
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        removeItem: (i: number) => dispatch(CartActions.removeFromCart(i)),
        addItem: (p: ProductType) => dispatch(CartActions.addToCart(p)),
        incQty: (q: number) => dispatch(CartActions.incrementQty(q)),
        decQty: (r: number) => dispatch(CartActions.decrementQty(r))
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(CartList);