import React from "react";
import Product from "../components/Product";
import ProductService from "../service/ProductService";
import {ProductType} from "../types";
import Column from "../components/Column";

type Props = { selectedCurrency: string };
type State = { plist: ProductType[] };

class ProductList extends React.Component<Props> {
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
        const plist:ProductType[] = [
            {
                productId:1000,
                productName: "test",
                productImage: "",
                productPrice: 1000,
                productSalePrice: 1000,
                productStock: 10
            },
            {
                productId:1001,
                productName: "test1",
                productImage: "",
                productPrice: 1200,
                productSalePrice: 1000,
                productStock: 10
            },
            {
                productId:1002,
                productName: "test2",
                productImage: "",
                productPrice: 1090,
                productSalePrice: 1000,
                productStock: 10
            }

        ];
        return(
            <div className="row">
                {this.state.plist.map((val) => {
                    return  <Column size={4}><Product 
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

export default ProductList;