import React, { SyntheticEvent } from "react";
import Row from "../components/Row";
import Column from "../components/Column";
import {CartType,ProductType,StoreType} from "../types";
import {connect} from "react-redux";
import { RouteComponentProps } from "react-router";
import TextBox from "../components/TextBox";
import OrderService from "../service/OrderService";
import {Link} from "react-router-dom";



type Props = {
    products: CartType[];
} &RouteComponentProps;
type State = {
    totalAmt: number;
    paymentMode: string;
    isRender: boolean;
};
let total = 0;
class PaymentTest extends React.Component<Props,State>{
    state: State = {
        totalAmt: total,
        paymentMode: "",
        isRender: false
    }
    componentDidMount(){
        console.log(this.props.products);
        total=0;
        this.props.products.map((data: any, index: number) => {
            
            if(data.productQty > 0){
                total = total +(data.productQty * data.productPrice);
            }
        })
        this.setState({
            totalAmt: total
        })
        
    }
    addOrder = async (e: SyntheticEvent) => {
        try {
            e.preventDefault();
            this.props.products.map((data: any, index: number) => {
                const name = data.productName;
                const amount = data.productPrice * data.productQty;
                const productId = data.productId;
                OrderService.createOrderDetails(name,amount,productId);
                OrderService.createOrder(name,amount);
            })
        } catch(e){
            console.log(e);
        }
    }
    render(){
        
        return(
            <div>
                <h1>Payment Page</h1>
                <h3>Total Amount: {this.state.totalAmt} rs</h3>
                <Column size={6}>
                    <form onSubmit={this.addOrder}>
                        <TextBox placeholder={"credit/debit/cash on delivery"}
                                 type={"text"}
                                 textChange={(paymentMode) => this.setState({paymentMode})}
                                 label={"Payment Mode"}/>
                        <input type="number" value={this.state.totalAmt}/>
                        <Link to={"/checkout"}>
                            <button className="btn btn-lg btn-success">Pay Now</button>
                        </Link>
                    </form>
                </Column>

            </div>
        );
    }
};

const mapStoreToProps = (store: StoreType) => {
    return {
        products: store.cart
    }
}

export default connect(mapStoreToProps)(PaymentTest);