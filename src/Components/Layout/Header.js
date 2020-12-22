import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

import Modal from '../Modal/index';

import Logo from '../../images/logo/logo.svg' 
import ArrowWhite from '../../images/icon/arrow-white.svg'
import SBMini from '../../images/icon/mini-SB.svg'

import Star from '../../images/sobre/star.svg'
import Whatsimage from '../../images/sobre/whats.svg'

import ModalImage from '../../images/modal/image-modal.png'

export default function Header(){
    const [modalFtActive, setModalFtActive] = useState(false);
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
                <div className="row no-gutters ctr-logo">
                    <div className="logo">
                        <Link to="/"><img src={Logo} /></Link>
                    </div>
                    
                    <Menu className="menu-mobile" right width={ '750px' }>
                                <a href="/sobre" className="cl-white font-16">Sobre</a>
                                <a href="/super-auto" className="cl-white font-16"> Super<b>Auto</b></a>
                                <a href="/super-vida" className="cl-white font-16"> Super<b>Vida</b></a>
                                <a href="/credenciados" className="cl-white  font-16">Rede de credenciados</a>
                                <a href="/desconto" className="cl-white  font-16">Descontos</a>
                                <a href="/representante" className="cl-white n-bt font-16">Seja um representante</a>
                                <Link onClick={(e) => setModalAssActive(true)} className="cl-white bt border-white">Área do associado <img className="icon" src={ArrowWhite} /></Link>
                                <Link onClick={(e) => setModalFtActive(true)} className="cl-white bt border-white " ><img className="img-left" src={Star} />Faça sua cotação online</Link> 
                                <Link className="cl-white bt border-white "><img src={Whatsimage} className="whta" /> Fale conosco</Link>
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

        <Modal modalActive={modalFtActive}>
            <div id="modal-ini" className="bg-blue">
                <button onClick={(e) => setModalFtActive(false)} className="fechar"></button>
                <img src={ModalImage} />
                <BrowserView>
                    <div className="buttons">
                        <Link to="/form-auto" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Auto</Link>
                        <Link to="/form-saude" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Vida</Link>
                        <Link to="/form-casa" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Casa</Link>
                        <Link to="/form-pet" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Pet</Link>
                    </div>
                </BrowserView>
                <MobileView>
                    <div className="buttons">
                        <a href="/form-auto" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Auto</a>
                        <a href="/form-saude" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Vida</a>
                        <a href="/form-casa" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Casa</a>
                        <a href="/form-pet" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Pet</a>
                    </div>
                </MobileView>
            </div>
        </Modal>

        </>
    );
}
