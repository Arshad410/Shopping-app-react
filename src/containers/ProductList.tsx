import React from "react";
import Product from "../components/Product";
import ProductService from "../service/ProductService";
import {ProductType, StoreType} from "../types";
import Column from "../components/Column";
import { RouteComponentProps } from "react-router-dom";
import {connect} from "react-redux";
import {Dispatch} from 'redux';
import CartActions from "../store/actions/CartActions";

type Props = { 
    selectedCurrency: string;
    addItem: (product: ProductType) => void;
} & RouteComponentProps;
type State = { 
    plist: ProductType[];
};
class ProductList extends React.Component<Props, State> {
    state: State = { plist: []};
    
    componentDidMount(){
        this.getData();
    }

    async getData() {
        try{
            const { data } = await ProductService.getProducts();
            this.setState({ plist: data });
            console.log("success", data);

        } catch(e){
            console.log("error", e); 
        }
    }


    addToCart(product: ProductType) {
        this.props.addItem(product);
    }

    render(){
        return(
            <div className="row">
                {this.state.plist.map((val) => {
                    return  <Column size={4}><Product 
                                btnClick={() => this.addToCart(val)}
                                pdata={val} 
                                key={val.productId} 
                                wishlist 
                                currencyCode={this.props.selectedCurrency}/>
                            </Column>
                })}
            </div>
        );
    }
}


const mapStoreToProps=(store: StoreType) => {
    return {
        selectedCurrency: store.currency,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addItem: (p: ProductType) => dispatch(CartActions.addToCart(p)),
    };
};
export default connect(mapStoreToProps, mapDispatchToProps)(ProductList);