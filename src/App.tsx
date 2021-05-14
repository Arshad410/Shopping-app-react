import React from 'react';
import './App.css';
import Demo from "./Demo";
import ProductList from "./containers/ProductList";
import Currency from "./components/Currency";
import AppRouter from './AppRouter';
import {BrowserRouter} from "react-router-dom";
class App extends React.Component {
  state = {currentCurrency : "INR"}; 
  render(){
    return (
      <BrowserRouter>
        
        <Currency currencyChange={(code)=> {
          this.setState({ currentCurrency: code}); 
        }}/>
        <AppRouter/>
      </BrowserRouter>
    );
  } 
}
export default App;
