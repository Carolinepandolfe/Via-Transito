import React from 'react';
import '../Quiz/Quiz.css';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import {Card, CardActionArea, CardMedia,  } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import logoHeader from "../../assets/car.png"

class Quiz extends React.Component{
    render(){
        return(
            <div className="pergunta">
                <AppBar position="static"  style={{ background: '#fff' }}> 
                   <Toolbar>
                        <img class="fa fa-thumbs-up" className="logo-header" src={logoHeader} alt=""/>
                        <h2 className="nome-header">Via<span className="span-header">Trânsito</span></h2>    
                    </Toolbar>
                </AppBar>
                
                <div className="pergunta-quiz">

                    <div className="perguntas">
                        <div className="pergunta1">
                            <p>Embriaguez só pode ser constatada com o bafômetro?</p>
                            <div className="div-btn">
                                <button className="btn-v format">Verdadeiro</button>
                                <button className="btn-f format">Falso</button>
                            </div>
                            <p className="none">
                            Falso. O agente de trânsito também pode basear a autuação na observação de sinais de alteração na capacidade psicomotora
                            </p>

                        </div>
                        
                    </div>

                    <div className="perguntas">
                        <div className="pergunta1">
                            <p>Quem come um bombom com licor ou usa antisséptico bucal que contenha álcool pode ser pego no bafômetro?</p>
                            <div className="div-btn">
                                <button className="btn-v format">Verdadeiro</button>
                                <button className="btn-f format">Falso</button>
                            </div>
                            <p className="none">
                            Falso. Já foram realizadas testes e, em nenhuma circunstância, foi detectado álcool. O aparelho etilômetro realiza a medição do teor alcoólico existente no ar expelido dos pulmões, assim, o uso de antisséptico bucal que contenha álcool ou comer um bombom de licor não acusará no exame.
                            </p>

                        </div>
                        
                    </div>
                </div>

                <BottomNavigation>
                    <BottomNavigationAction icon={<SearchIcon />} />
                    <Link to="/feed">
                        <BottomNavigationAction icon={<HomeIcon />} />
                    </Link>
                    <BottomNavigationAction icon={<NotificationsIcon />} />
                </BottomNavigation>
            </div>
        )
    }
}

export default Quiz;