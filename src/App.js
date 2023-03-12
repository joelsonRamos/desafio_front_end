import React from 'react';
import {BrowserRouter} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CarrinhoProvider} from './components/Carrinho/Carrinho'


import Header  from "./components/header/Header";
import Routes from "./Routes"

function App() {
  return (
    <BrowserRouter>
          <div className='App'>
            <CarrinhoProvider>
              <Header/>
              
              <Routes/>
            </CarrinhoProvider>
            
          </div>
    </BrowserRouter>

  );
}

export default App;
