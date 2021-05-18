import React from "react";
import Column from "../components/Column";
import Row from "../components/Row";
import UserService from "../service/UserService";
import ImageCard from "../components/ImageCard";
import { UserType } from "../types";
import UserInfoCard from "../components/UserInfoCard";

type Props = {};
type State = {
    userData: UserType
};

class Profile extends React.Component<Props, State> {
    state : State = {
        userData: {
            userName: "",
            userContact: 0,
            userEmail: ""
        }

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
    render(){
        return(
            <Row>
                <Column size={6}>
                    <ImageCard/>
                </Column>
                <Column size={6}>
                    <UserInfoCard profileData={this.state.userData}/>
                </Column>

            </Row>
        );
    }
};

export default Profile;