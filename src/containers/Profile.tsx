import React, { SyntheticEvent } from "react";
import Column from "../components/Column";
import Row from "../components/Row";
import UserService from "../service/UserService";
import ImageCard from "../components/ImageCard";
import { AddressType, UserType } from "../types";
import UserInfoCard from "../components/UserInfoCard";
import TextBox from "../components/TextBox";
import AddressForm from "./AddressForm";
import AddressService from "../service/AddressService";
import {Link, Redirect} from "react-router-dom";

type Props = {};
type State = {
    userData: UserType;
    aptNo: string;
      aptName: string;
      street: string;
      locality: string;
      city: string;
      state: string;
      pincode: number;
};

class Profile extends React.Component<Props, State> {
    state : State = {
        userData: {
            userName: "",
            userContact: 0,
            userEmail: ""
        },
            aptNo: "",
            aptName: "",
            street: "",
            locality: "",
            city: "",
            state: "",
            pincode: 0

    }
    async componentDidMount() {
        try {
            const { data } = await UserService.profile();
            this.setState({
                userData: data
            })
            console.log(this.state.userData);
        } catch (e) {
            console.log(e.response.data);
        }
    }
    addAddress= async(e: SyntheticEvent) => {
        try{
            const {aptNo,aptName,street,locality,city,state,pincode} = this.state;
            const {data} = await AddressService.addAddress(aptNo,aptName,street,locality,city,state,pincode);
            <Redirect to={"/profile"}/>

        } catch(e){
            console.log(e);
        }
    }
    render(){
        return(
            <div>
                <Row>
                    <Column size={6}>
                        <ImageCard/>
                    </Column>
                    <Column size={6}>
                        <UserInfoCard profileData={this.state.userData}/>
                    </Column>

                </Row>
                <Row>
                    <Column size={6}>
                    <form onSubmit={this.addAddress}>
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
                        
                        <button>Add Address</button>
                        
                        </form>
                    </Column>
                    <Column size={6}>
                        <div className="card">
                            <div className="card-header">
                                <h2>Your Address</h2>
                            </div>
                            <div className="card-body">
                            <h4>Apartment No: {this.state.aptNo}</h4>
                            <h4>Apartment Name: {this.state.aptName}</h4>
                            <h4>Street Name: {this.state.street}</h4>
                            <h4>Locality Name: {this.state.locality}</h4>
                            <h4>City: {this.state.city}</h4>
                            <h4>State: {this.state.state}</h4>
                            </div>
                            <div className="card-footer">

                            </div>
                        </div>

                    </Column>
                </Row>
            </div>
        );
    }
};

export default Profile;