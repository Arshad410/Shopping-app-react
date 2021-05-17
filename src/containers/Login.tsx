import React, { SyntheticEvent } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Dispatch } from "redux";
import Column from "../components/Column";
import Row from"../components/Row";
import TextBox from "../components/TextBox";
import UserService from "../service/UserService";
import StorageService from "../service/StorageService";
import formatter from "../utils/formatter";
import { StoreType } from "../types";
import UserActions from "../store/actions/UserActions";
type Props = {
    signinSuccess: (user: object) => void;
    signinError: (error: string) => void;
    isAuthenticated: boolean;
    errorMessage: string | null;
} & RouteComponentProps;
type State = { email: string; password: string;};

class Login extends React.Component<Props, State> {
    state: State = { email: "", password: ""};
    login= async (e:SyntheticEvent)=> {
        try{
            e.preventDefault();
            const { email, password } = this.state;
            const { data } = await UserService.login(email, password);
            await StorageService.storeData("token", data.access_token);
            this.props.signinSuccess(data);
        } catch(e) {
            this.props.signinError(formatter.titlecase(e.message.toString()));
        }
    };

    render() {
        if (this.props.isAuthenticated) {
            let lastPage = "/products";
            // const state: any = this.props.location.state;
            // if(state && state.from) {
            //     lastPage = state.from;
            // }
            return <Redirect to={lastPage} />;
        }
        return (
            <Row>
                <Column size={6}>
                    <h2>Login</h2>
                    <br/>
                    <small className="text-danger">{this.props.errorMessage}</small>
                    <form onSubmit={this.login}>
                        <TextBox
                            placeholder={"Email"}
                            type={"email"}
                            textChange={(email) => this.setState({ email })}
                        />
                        <TextBox
                            placeholder={"Password"}
                            type={"password"}
                            textChange={(password) => this.setState({ password })}
                        />
                        <button className={"btn btn-sm btn-success"}>Login</button>
                    </form>
                </Column>
            </Row>
        );
    }
};

const mapStoreDataToProps = (storeData: StoreType) => {
    return {
        isAuthenticated: !!storeData.userSession.user,
        errorMessage: storeData.userSession.error,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        signinSuccess: (user: object) => dispatch(UserActions.loginSuccess(user)),
        signinError: (err: string) => dispatch(UserActions.loginError(err)),
    }
};

export default connect(mapStoreDataToProps, mapDispatchToProps)(Login);