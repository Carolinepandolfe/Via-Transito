import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import '../Login/Login.css';

class Login extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="login">

                    <div className="nome-logo">
                        <img className="logo" src={logo} alt=""/>
                        <h1 className="nome">VIA<span className="span-nome">TRÂNSITO</span></h1>
                    </div>


                    <div className="cadastro">
                
                        <input type="text" className="email" placeholder="e-mail ou cpf"/>
                        <span className="underline-email span"></span>
                        <input type="password" className="senha"placeholder="senha"/>
                        <span className="underline-senha span"></span>

                        <div className="btn">

                            

                                <Link to="/feed"><button className="button">Entrar</button>
                                </Link>


                            <button className="button">Cadastrar</button> 
                            
                        </div>
                    </div>


                </div>

                
            </div>
        )
    }
}

export default Login;