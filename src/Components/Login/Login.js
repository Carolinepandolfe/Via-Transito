import React from 'react';
import { BrowserRouter ,Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import '../Login/Login.css';

class Login extends React.Component{
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

                            < BrowserRouter >

                                <Link to="/feed"><button className="btn-verde">Entrar</button>
                                </Link>

                            </BrowserRouter >

                            <button className="btn-amarelo">Cadastrar</button> 
                            
                        </div>
                    </div>


                </div>

                
            </div>
        )
    }
}

export default Login;