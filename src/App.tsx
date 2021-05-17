import React from 'react';
import './App.css';
import Demo from "./Demo";
import ProductList from "./containers/ProductList";
import Currency from "./components/Currency";
import AppRouter from './AppRouter';
import {BrowserRouter} from "react-router-dom";
import Header from "./containers/Header";
import ThemeSwitch from "./components/ThemeSwitch";
import { ThemeContext } from './context';
import LoginButtons from "./components/LoginButtons";

type State = {
  currentCurrency:string;
  theme:'light'|'dark';
}

class App extends React.Component {
  state : State = {currentCurrency : "INR", theme:"light"}; 
  render(){
    return (
      <BrowserRouter>
        <Header>
          <ThemeSwitch themeChange={(theme)=> this.setState({theme})}/>
          <Currency />
          <LoginButtons/>
        </Header>
        <ThemeContext.Provider value={this.state.theme}>
          <AppRouter/>
        </ThemeContext.Provider>
      </BrowserRouter>
    );
  } 
}
export default App;
