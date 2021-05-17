import React from "react";
import SampleProduct from "./components/SampleProduct";
import ProductService from "./service/ProductService";
import {ProductType} from "./types";
import Column from "./components/Column";

type Props = { selectedCurrency: string };
type State = { plist: ProductType[] };

class Demo extends React.Component<Props> {
    state: State = { plist: [] };
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
    render(){
        return(
            <div className="row">
                {this.state.plist.map((val) => {
                    return  <Column size={4}><SampleProduct 
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

export default Demo;