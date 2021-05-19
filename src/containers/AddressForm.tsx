import React from "react";
import TextBox from "../components/TextBox";
import { AddressType } from "../types";

type Props = {
    data: AddressType
};
type State = {
    aptName: string;
    aptNo: string;
    locality: string;
    city: string;
    state: string;
    pincode: number;
    street: string;
};

class AddressForm extends React.Component <Props> {
    render(){
        return(
            <div>
                <form>
                    <TextBox placeholder={"Apartment Number"}
                             type={"text"}
                             textChange={(aptNo)=> this.setState({aptNo})}
                    />
                    <TextBox placeholder={"Apartment Name"}
                             type={"text"}
                             textChange={(aptName)=> this.setState({aptName})}
                    />
                    <TextBox placeholder={"Street Name"}
                             type={"text"}
                             textChange={(street)=> this.setState({street})}
                    />
                    <TextBox placeholder={"Locality"}
                             type={"text"}
                             textChange={(locality)=> this.setState({locality})}/>
                    <TextBox placeholder={"City"}
                             type={"text"}
                             textChange={(city)=> this.setState({city})}/>
                    <TextBox placeholder={"State"}
                             type={"text"}
                             textChange={(state)=> this.setState({state})}/>
                    <TextBox placeholder={"Pincode"}
                             type={"number"}
                             textChange={(pincode)=> this.setState({pincode})}
                    />
                    
                </form>
            </div>
        );
    }
};
export default AddressForm;