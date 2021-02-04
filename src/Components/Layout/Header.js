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

import ModalCarros from '../../images/modal/carros.png'
import ModalCasa from '../../images/modal/casa.png'
import ModalOdonto from '../../images/modal/odonto.png'
import ModalPet from '../../images/modal/pet.png'
import ModalSaude from '../../images/modal/saude.png'

import ImageContato from '../../images/icon/Mascote-chat.svg'

export default function Header(){
    const [modalFtActive, setModalFtActive] = useState(false);
    const [modalAssActive, setModalAssActive] = useState(false);
    const [modalCtActive, setModalCtActive] = useState(false);

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
                                <a  href="https://api.whatsapp.com/send?phone=551140035542" target="_blank" className="cl-white bt border-white "><img src={Whatsimage} className="whta" /> Fale conosco</a>
                    </Menu>
                </div>
            </div>
        </header>
        </MobileView>

        <div id="contatos">
            <a onClick={(e) => setModalCtActive(true)} className="contato-image animated zoomIn"><img src={ImageContato} /></a>
        </div>


        <Modal width="wd-600" modalActive={modalAssActive}>
            <div className="row form" id="loginass">
                <div className="col-12">
                <button onClick={(e) => setModalAssActive(false)} className="fechar"></button>
                    
                    <form action="https://taiga.hinova.com.br/sga/area/4.1/login.action.php" method="post" >
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
                        <input type="hidden" name="dfsChave" id="dfsChave" value="33503858d3ccc8a4d3dcaa4987f92b2791cf03ba3be5328c9107fdd2adf8da361aa60731d8e96cc9dc05c2adf8e99d564a38e60575d7d6253b7ea6e66418a44a" /> 
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
                        <a href="/form-auto" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Auto</a>
                        <Link to="/form-saude" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Vida</Link>
                        <Link to="/form-casa" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Casa</Link>
                        <Link to="/form-pet" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Pet</Link>
                        <Link to="/form-dental" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Odonto</Link>
                    </div>
                </BrowserView>
                <MobileView>
                    <div className="buttons">
                        <a href="/form-auto" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Auto</a>
                        <a href="/form-saude" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Vida</a>
                        <a href="/form-casa" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Casa</a>
                        <a href="/form-pet" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Pet</a>
                        <a href="/form-dental" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Odonto</a>
                    </div>
                </MobileView>
            </div>
        </Modal>

        <Modal width="wd-600" modalActive={modalCtActive}>
            <div id="modal-contatos" className="bg-white" align="left">
                <button onClick={(e) => setModalCtActive(false)} className="fechar"></button>
                <span className="font-20 cl-light-blue f-weight-600">Entre em contato e vamos te ajudar :)</span>

                <div className="row box-md no-gutters lines-3">
                    <div className="col-3">
                        <img src={ModalCarros} />
                    </div>
                    <div className="col-9">
                        <span className="font-20 cl-light-blue f-weight-600">Super Auto</span>
                        <p className="font-18 cl-end-gray">Assistência 24h: <a className="cl-black font-18" href="tel:08009402121">0800 940 2121</a></p>
                        <p className="font-18 cl-end-gray">Assistência 24h: <a className="cl-black font-18" href="tel:08009402121">0800 940 2122</a></p>
                        <p className="font-18 cl-end-gray">Furto e roubo 24h: <a className="cl-black font-18" href="tel:08007614418">0800 761 4418</a></p>
                    </div>
                </div>

                <div className="row box-md no-gutters">
                    <div className="col-3">
                        <img src={ModalSaude} />
                    </div>
                    <div className="col-9">
                        <span className="font-18 cl-light-blue f-weight-600">Super Sáude</span>
                        <p className="font-16 cl-end-gray">Assistência 24h: <a className="cl-black font-16" href="tel:08006002853">0800 600 2853</a></p>
                    </div>
                </div>

                <div className="row box-md no-gutters desk-none mb-none">
                    <div className="col-3">
                        <img src={ModalCasa} />
                    </div>
                    <div className="col-9">
                        <span className="font-18 cl-light-blue f-weight-600">Super Residência</span>
                        <p className="font-16 cl-end-gray">Label: <a className="cl-black font-16" href="">0800 xxx xxxx</a></p>
                        <p className="font-16 cl-end-gray">Label: <a className="cl-black font-16" href="">0800 xxx xxxx</a></p>
                    </div>
                </div>

                <div className="row box-md no-gutters desk-none mb-none">
                    <div className="col-3">
                        <img src={ModalOdonto} />
                    </div>
                    <div className="col-9">
                        <span className="font-18 cl-light-blue f-weight-600">Super Odonto</span>
                        <p className="font-16 cl-end-gray">Label: <a className="cl-black font-16" href="">0800 xxx xxxx</a></p>
                        <p className="font-16 cl-end-gray">Label: <a className="cl-black font-16" href="">0800 xxx xxxx</a></p>
                    </div>
                </div>

                <div className="row box-md no-gutters desk-none mb-none">
                    <div className="col-3">
                        <img src={ModalPet} />
                    </div>
                    <div className="col-9">
                        <span className="font-18 cl-light-blue f-weight-600">Super Pet</span>
                        <p className="font-16 cl-end-gray">Label: <a className="cl-black font-16" href="">0800 xxx xxxx</a></p>
                        <p className="font-16 cl-end-gray">Label: <a className="cl-black font-16" href="">0800 xxx xxxx</a></p>
                    </div>
                </div>
                
            </div>
        </Modal>

        </>
    );
}
