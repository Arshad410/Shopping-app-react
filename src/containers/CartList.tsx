import React from "react";
import Cart from "../components/Cart";
import Column from "../components/Column";
import Product from "../components/Product";
import Row from "../components/Row";
import {ProductType, StoreType} from "../types";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import CartActions from "../store/actions/CartActions";

type Props = {
    products: ProductType[];
    removeItem : (id: number) => void;
};
type State = { plist: ProductType[]};

class CartList extends React.Component<Props, State> {
    state: State = {plist: []};

    componentDidMount(){
        this.getFromCart();
    }

    async getFromCart(){
        try{
            this.setState({ plist: this.props.products})
        } catch(e) {

        }
    }
    
    removeFromCart(id: number) {
        this.props.removeItem(id);
    }

    render(){
        return(
            <Row>
                {
                    this.state.plist.map((val) => {
                        return <Column size={4}>
                                    <Cart pdata={val}
                                        btnClick={()=> this.removeFromCart(val.productId)}/>
                               </Column>
                    })
                }
            </Row>
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
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(CartList);