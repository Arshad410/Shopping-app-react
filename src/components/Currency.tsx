import React from "react";

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

export default Currency;