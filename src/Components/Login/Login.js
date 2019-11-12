import React, { Component } from 'react';
import logo from '../../assets/logo.png';
import '../Login/Login.css';
// import Input from '../Login/inputLogin';

export default class Login extends Component{
    render(){
        return(
            <div className="container">
                <div className="login">

                    <div className="nome-logo">
                        <img src={logo} alt=""/>
                        <h1>VIA<span>TRÂNSITO</span></h1>
                    </div>


                    <div className="cadastro">
                
                        <input type="text" className="email" placeholder="e-mail ou cpf"/>
                        <span class="underline-email span"></span>
                        <input type="password" className="senha"placeholder="senha"/>
                        <span class="underline-senha span"></span>
                        <div className="btn">
                            <button className="btn-verde">Entrar</button>
                            <button className="btn-amarelo">Cadastrar</button> 
                        </div>
                    </div>


                </div>

                

            </div>
        )
    }
}