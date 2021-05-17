import React from "react";
import { connect } from "react-redux";
import {Dispatch} from "redux";
import CurrencyActions from "../store/actions/CurrencyActions";

type CurrencyProps = {
    currencyChange: (code: string) => void;
};

class Currency extends React.Component<CurrencyProps>{
    render(){
        const codes = ["INR", "USD", "CAD", "GBP", "EUR"];
        return(
            <select onChange={(e) => this.props.currencyChange(e.target.value)}>
                {codes.map((c) => (
                    <option key={c}>{c}</option>
                ))}
            </select>
        )
        
    }
}

const mapDispatchtoProps = (dispatch: Dispatch) => {
    return {
        currencyChange: (code:string) => dispatch(CurrencyActions.updateCurrency(code)),
    };
}

export default connect(null,mapDispatchtoProps)(Currency);