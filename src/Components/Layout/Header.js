import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

import Modal from '../Modal/index';

import Logo from '../../images/logo/logo.svg' 
import ArrowWhite from '../../images/icon/arrow-white.svg'
import SBMini from '../../images/icon/mini-SB.svg'

export default function Header(){
    const [modalAssActive, setModalAssActive] = useState(false);

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
                            <li className="submenu">
                                <Link to="/super-auto" className="cl-white  font-16">Planos</Link>
                                <ul>
                                    <li><Link to="/super-auto" className="cl-gray font-16"><img src={SBMini} />Super<b>Auto</b></Link></li>
                                    <li><Link to="/super-vida" className="cl-gray font-16"><img src={SBMini} />Super<b>Vida</b></Link></li>
                                </ul>
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
                                <Link to="/representante" className="cl-white n-bt font-16">Seja um representante</Link>
                            </li>
                            <li>
                                <Link onClick={(e) => setModalAssActive(true)} className="cl-white bt border-white font-16">Área do associado <img className="icon" src={ArrowWhite} /></Link>
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


        <Modal modalActive={modalAssActive}>
            <div className="row form" id="loginass">
                <div className="col-12">
                <button onClick={(e) => setModalAssActive(false)} className="fechar"></button>
                    
                    <form action="https://orion.hinova.com.br/sga/area/4.1/login.action.php" method="post" >
                        <h2 class="uk-modal-title uk-heading-line uk-text-center">Área do Associado SUPER</h2>
                        <div class="uk-margin">
                            <div class="uk-inline uk-width-1-1">
                                <span class="uk-form-icon" uk-icon="icon: user"></span>
                                <input class="uk-input  uk-width-1-1" type="text"  name="dfsCpf" id="dfsCpf" placeholder="Login" />
                            </div>
                        </div>
                        <div class="uk-margin">
                            <div class="uk-inline uk-width-1-1">
                                <span class="uk-form-icon" uk-icon="icon: lock"></span>
                                <input class="uk-input  uk-width-1-1" type="password" name="dfsSenha" id="dfsSenha" placeholder="Senha" />
                            </div>
                        </div>
                        <input type="hidden" name="dfsChave" id="dfsChave" value="cb2404021e853208529154e71c9cbba62087f75c2a4f6012aac868ea0719267133f49d21748b3de47b3e691ee1420a5e98e820debc949c59c039f7c29cbdc5b7" /> 
                        <div class="uk-margin">
                            <input type="submit" name="pbEntrar" value="Entrar" class="uk-button uk-button-primary uk-width-1-1" />
                        </div>
                    </form>

                </div>
            </div>
        </Modal>

        </>
    );
}
