import React from 'react';
import '../Info/Info.css';
// import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import {Card, CardActionArea, CardMedia,  } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import logoHeader from "../../assets/car.png"

class Info extends React.Component{
    render(){
        return(
            <div className="info-text">
                <AppBar position="static"  style={{ background: '#fff' }}> 
                   <Toolbar>
                        <img class="fa fa-thumbs-up" className="logo-header" src={logoHeader} alt=""/>
                        <h2 className="nome-header">Via<span className="span-header">Trânsito</span></h2>    
                    </Toolbar>
                </AppBar>
                
                <h1>Álcool e Trânsito</h1>

                <div className="text">

                    <p>
                    O uso nocivo de álcool é um dos fatores de risco de maior impacto para a morbidade, mortalidade e incapacidades, estando relacionado a cerca de 3,3 milhões de mortes a cada ano em todo o mundo. 
                    </p>
                    <p>
                    Dentre os prejuízos sociais associados, os acidentes de trânsito são um problema de preocupação mundial que acarretam um número excessivo de mortes e prejuízos por ano.
                    </p>
                    <p>
                    Ainda, a população mais exposta ao risco de acidentes fatais no trânsito é paradoxalmente composta por aqueles que representam em grande parte o futuro da nação: os jovens.
                    </p>

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

export default Info;