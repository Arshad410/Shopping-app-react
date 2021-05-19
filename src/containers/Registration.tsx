import React, { SyntheticEvent } from "react";
import {Redirect} from "react-router-dom";
import Row from "../components/Row";
import Column from "../components/Column";
import TextBox from "../components/TextBox";
import UserService from "../service/UserService";
import AddressService from "../service/AddressService";

type Props = {

}


type State = {
    email: string;
    password: string;
    name: string;
    contact: number
    errorMessage: string | null;
    isReturn : boolean;
    aptName: string;
    aptNo: string;
    locality: string;
    city: string;
    state: string;
    pincode: number;
    street: string;
};

class Registration extends React.Component{
    
    state: State = {
        email: "",
        password: "",
        name: "",
        contact: 0,
        errorMessage: "",
        isReturn : false,
        aptName: "",
        locality: "",
        city: "",
        state: "",
        pincode: 0,
        street: "",
        aptNo: ""
        
    }
    componentDidMount(){
        this.setState({isReturn: false})
    }
    register = async (e: SyntheticEvent) => {
        try {
            e.preventDefault();
            const {email, password, name, contact, aptNo, aptName, street, locality, city, state, pincode} = this.state;
            const {data}=await UserService.register(name, email, contact, password);
            await AddressService.addAddress(aptNo,aptName,street,locality,city,state,pincode);
            this.setState({isReturn: true})

        } catch (e) {
            this.setState({isReturn: false})
        }
    }
    render(){
        if(this.state.isReturn){
            return <Redirect to={"/"}/>
        }
        return(
            <Row>
                <Column size={6}>
                    <h2>Registration</h2>
                    <hr/>
                    <form onSubmit={this.register}>
                        <TextBox
                            placeholder={"Name"}
                            type={"text"}
                            textChange={(name) => this.setState({ name})}
                        />
                        <TextBox placeholder={"Email"}
                                 type={"email"}
                                 textChange={(email) => this.setState({ email })}
                        />
                        <TextBox placeholder={"Phone number"}
                                 type={"number"}
                                 textChange={(contact) => this.setState({contact})}
                        />
                        <TextBox placeholder={"Password"}
                                 type={"password"}
                                 textChange={(password) => this.setState({password})}
                        />
                        
                        <button className="btn btn-lg btn-primary">REGISTER</button>
                    </form>
                </Column>
                
            </Row>

        );
    }

};

export default Registration;