import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

import Logo from '../../images/logo/logo.svg' 
import ArrowWhite from '../../images/icon/arrow-white.svg'

export default function Header(){
    return(
        <>
        <BrowserView>
        <header id="header" className="bg-purple animated fadeIn">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
            
            <div className="content">
                <div className="row no-gutters">
                    <div className="col-2 logo">
                        <Link to="/"><img src={Logo} alt="Logo Super Beneficios" /></Link>
                    </div>
                    
                    <div className="col-6">
                        <ul className="menu">
                            <li>
                                <Link to="/sobre" className="cl-white font-16">Sobre</Link>
                            </li>
                            <li>
                                <Link to="/super-auto" className="cl-white  font-16">Planos</Link>
                            </li>
                            <li>
                                <Link to="/credenciados" className="cl-white  font-16">Rede de credenciados</Link>
                            </li>
                            <li>
                                <Link to="/desconto" className="cl-white  font-16">Descontos</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-4">
                        <ul className="menu-right">
                            <li>
                                <Link to="/contato" className="cl-white  font-16">Seja um representante</Link>
                            </li>
                            <li>
                                <Link to="/Login" className="cl-white bt border-white font-16">Área do associado <img className="icon" src={ArrowWhite} /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        </BrowserView>
        <MobileView>
        <header id="header" className="bg-purple">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
            <div className="content">
                <div className="row no-gutters">
                    <div className="logo">
                        <Link to="/"><img  /></Link>
                    </div>
                    
                    <Menu className="menu-mobile" right width={ '500px' }>
                        <Link to="/checkout" className="cl-white f-wheight-700 bg-green bt">Ache seu plano ideal</Link>
                        <Link to="/beneficios" className="cl-white">Benefícios</Link>
                        <Link to="/faq" className="cl-white">Sobre a live saúde</Link>
                        <Link to="/faq" className="cl-white">Dúvidas frequentes</Link>
                        <Link to="/consulta" className="cl-white">Consulte a rede</Link>
                        <Link to="/contato" className="cl-white">Contato</Link>
                        <Link to="/Login" className="cl-white bt f-wheight-700 border-white ">Fazer login</Link>
                    </Menu>
                </div>
            </div>
        </header>
        </MobileView>
        </>
    );
}
