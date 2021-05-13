import React from 'react';
import './App.css';
import Demo from "./Demo";
import ProductList from "./containers/ProductList";
import Currency from "./components/Currency";
import AppRouter from './AppRouter';
class App extends React.Component {
  state = {currentCurrency : "INR"}; 
  render(){
    return (
      <div>
        <Demo/>

        <Currency currencyChange={(code)=> {
          this.setState({ currentCurrency: code});
          console.log(this.state.currentCurrency);  
        }}/>
        <AppRouter/>
        <ProductList selectedCurrency={this.state.currentCurrency}/>
      </div>
    );
  } 
}
export default App;
