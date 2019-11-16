import React from 'react';
import '../Feed/Feed.css';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {Card, CardActionArea, CardMedia,  } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import logoHeader from "../../assets/car.png"
import perfil from "../../assets/perfil.png";
import auto from "../../assets/acionar.png";
import info from "../../assets/info.png";
import detran from "../../assets/detran.png";
import filtro from "../../assets/filtro.png";
import quiz from "../../assets/quiz.png";

class Feed extends React.Component{
    render(){
        return(
            <div className="main">
                <AppBar position="static"  style={{ background: '#fff' }}> 
                   <Toolbar>
                        <img class="fa fa-thumbs-up" className="logo-feed" src={logoHeader} alt=""/>
                        <h2 className="nome-header">Via<span className="span-header">Trânsito</span></h2>    
                    </Toolbar>
                </AppBar>
                
                <div className="icons">
                    <div className="top">
                        <Card className="div-auto">  
                            <CardActionArea>
                                <CardMedia>
                                    <Link to="/perfil">
                                        <img className="perfil" src={perfil} alt=""/>
                                        <p>Perfil</p>
                                    </Link>
                                </CardMedia>
                            </CardActionArea>
                        </Card>


                        <Card className="div-detran">  
                            <CardActionArea>
                                <CardMedia>
                                    <a href="https://www.detran.sp.gov.br">
                                            <img className="detran" src={detran} alt=""/>
                                            <p>Detran</p>
                                    </a>
                                </CardMedia>
                            </CardActionArea>
                        </Card>
                        

                    </div>

                    <div className="meio">
                        <Card className="div-auto">  
                            <CardActionArea>
                                <CardMedia>
                                    <Link>
                                        <img className="auto" src={auto} alt=""/>
                                        <p>Ajuda</p>
                                    </Link>
                                </CardMedia>
                            </CardActionArea>
                        </Card>

                        <Card className="div-filtro">  
                            <CardActionArea>
                                <CardMedia>
                                    <Link>
                                        <img className="filtro" src={filtro} alt=""/>
                                        <p>Filtro</p>
                                    </Link>
                                </CardMedia>
                            </CardActionArea>
                        </Card>  

                    </div>

                    <div className="baixo">

                        <Card className="div-info">  
                                <CardActionArea>
                                    <CardMedia>
                                        <Link>
                                            <img className="info" src={info} alt=""/>
                                            <p>Info</p>
                                        </Link>
                                    </CardMedia>
                                </CardActionArea>
                            </Card>

                            <Card className="div-quiz">  
                                <CardActionArea>
                                    <CardMedia>
                                    <Link>
                                        <img className="quiz" src={quiz} alt=""/>
                                        <p>Quiz</p>
                                    </Link>
                                    </CardMedia>
                                </CardActionArea>
                            </Card>
                        
                    </div>

                </div>

                <BottomNavigation>
                    <BottomNavigationAction icon={<SearchIcon />} />
                    <BottomNavigationAction icon={<HomeIcon />} />
                    <BottomNavigationAction icon={<NotificationsIcon />} />
                </BottomNavigation>
            </div>
        )
    }
}

export default Feed;