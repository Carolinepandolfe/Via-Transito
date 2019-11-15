import React from 'react';
import '../Feed/Feed.css';
import { Link } from "react-router-dom";
import logoHeader from "../../assets/car.png"
import perfil from "../../assets/perfil.png";
import auto from "../../assets/acionar.png";
import info from "../../assets/info.png";
import detran from "../../assets/detran.png";
import filtro from "../../assets/filtro.png";
import quiz from "../../assets/quiz.png";
import home from "../../assets/home.png";

class Feed extends React.Component{
    render(){
        return(
            <div>
                <div className="header">
                    <header>
                        <img className="logo-feed" src={logoHeader} alt=""/>
                        <h2 className="nome-header">Via<span className="span-header">Trânsito</span></h2>
                    </header>
                </div>

                <div className="icons">
                    <div className="top">

                        <div className="div-perfil">
                            <Link to="/perfil">
                                <img className="perfil" src={perfil} alt=""/>
                                <p>Perfil</p>
                            </Link>
                        </div>

                        <div className="div-detran">
                        <a href="https://www.detran.sp.gov.br/wps/portal/portaldetran/cidadao/home/!ut/p/z1/jdBdi4JQEAbgX-Ot8-qROHZ3-tK1Fbdi085NWNhRUE-orX-_aGNhoaS5m-F5Z2BIUkKyTn8KlXaFrtPy1u_kaB-sMPV9bn9Ga8_FioeRZ29sIGQU3wFelADJd_IDQA6vj0neCXOwcSeWAJ9vFxB8zRbWPLKxxAP8nfCs2RTCdZzwI1gyuOwBBo4EJFWpD7__EPWBcUWyyU5ZkzXmpbmN8647t2MDBvq-N5XWqszMo64MPIvkuu0o-S_pXH0nKL6qmLfiCmRqh2E!/dz/d5/L2dBISEvZ0FBIS9nQSEh/">
                                <img className="detran" src={detran} alt=""/>
                                <p>Detran</p>
                        </a>
                            
                        </div>

                    </div>

                    <div className="meio">
                        <div className="div-auto">
                            <Link>
                                <img className="auto" src={auto} alt=""/>
                                <p>Ajuda</p>
                            </Link>
                        </div>

                        <div className="div-filtro">
                            <Link>
                                <img className="filtro" src={filtro} alt=""/>
                                <p>Filtro</p>
                            </Link>
                        </div>    

                    </div>

                    <div className="baixo">
                        
                        <div className="div-info">
                            <Link>
                                <img className="info" src={info} alt=""/>
                                <p>Info</p>
                            </Link>
                        </div>


                        <div className="div-quiz">
                            <Link>
                                <img className="quiz" src={quiz} alt=""/>
                                <p>Quiz</p>
                            </Link>
                        </div>
                        
                    </div>

                </div>

                {/* <footer>
                    <img className="home" src={home} alt=""/>
                </footer> */}
            </div>
        )
    }
}

export default Feed;