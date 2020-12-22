import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import LogoFooter from '../../images/logo/logo-footer.svg'

import Logoaapv from '../../images/logo/aaapv.svg'
import Logofgrs from '../../images/logo/fgrs.svg'

import IconPlus from '../../images/icon/plusRep.svg'
import Whatsapp from '../../images/icon/whatsapp.svg'

import Instagram from '../../images/icon/instagram.svg'
import Facebook from '../../images/icon/facebook.svg'

import Star from '../../images/sobre/star.svg'
import Whatsimage from '../../images/sobre/whats.svg'

import Modal from '../Modal/index';

import ModalImage from '../../images/modal/image-modal.png'
import { BrowserView, MobileView } from 'react-device-detect';


export default function Footer(){

    const [ftNone,  setftNone] = useState('active')

    const [modalFtActive, setModalFtActive] = useState(false);

    return(
        <footer id="footer" className={window.location.href == window.location.origin + "/desconto" ? 'active' : ' '} >
            <div id="footer-1">
                <div className="content">
                    <div className="row no-gutters">
                        <div className="col-lg-2 col-md-12">
                            <img className="logo-footer" src={LogoFooter} />
                        </div>
                        <div className="col-lg-5 col-md-12">
                            <div className="uls-menus">
                                <ul className="cl-white font-16 ">
                                    <li>
                                        <Link to="/sobre">Sobre</Link>
                                    </li>
                                    <li>
                                        <Link to="/super-auto">Planos</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Política de Cookies e Privacidade</Link>
                                    </li>
                                </ul>

                                <ul className="cl-white font-16 ">
                                    <li>
                                        <Link to="/desconto">Descontos</Link>
                                    </li>
                                    <li>
                                        <a href="https://app.powercrm.com.br/login" target="_black">Área do <b>consultor</b></a>
                                    </li>
                                    <li>
                                        <Link to="">Área do <b>associado</b></Link>
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12 bd-left imgs-footer">
                            <img src={Logoaapv} />
                            <img src={Logofgrs} />
                        </div>

                        <div className="col-lg-12 col-md-12 row no-gutters ft-line2">
                            <div className="col-lg-5 col-md-12 ft-buttons">
                                <Link to="/representante" className="bt border-blue cl-blue f-weight-700 font-14"><img src={IconPlus} />Seja um representante</Link>
                                <Link className="bt border-blue cl-blue f-weight-700 font-14"><img src={Whatsapp} />Associe-se pelo WhatsApp</Link>
                            </div>
                            <div className="col-lg-2 col-md-12 ft-redes">
                                <Link><img src={Facebook} /></Link>
                                <Link><img src={Instagram} /></Link>
                            </div>
                            <div className="col-lg-5 col-md-12 ft-contatos">
                                <BrowserView>
                                    <p className="cl-black f-weight-700">Central de vendas: <Link className="cl-blue f-weight-400">(31) 4003 5542 </Link></p>
                                    <p className="cl-black f-weight-700">Atendimento ao Associado: <Link className="cl-blue f-weight-400">(31) 4003 5548 </Link></p>
                                    <p className="cl-black f-weight-700">Assistência 24h: <Link className="cl-blue f-weight-400">0800 940 2121</Link> | Furto e roubo 24h: <Link className="cl-blue f-weight-400">0800 761 4418</Link> </p>
                                </BrowserView>

                                <MobileView>
                                    <p className="cl-black f-weight-700">Central de vendas: <Link className="cl-blue f-weight-400">(31) 4003 5542 </Link></p>
                                    <p className="cl-black f-weight-700">Atendimento ao Associado: <Link className="cl-blue f-weight-400">(31) 4003 5548 </Link></p>
                                    <p className="cl-black f-weight-700">Assistência 24h: <Link className="cl-blue f-weight-400">0800 940 2121</Link></p>
                                    <p className="cl-black f-weight-700"> Furto e roubo 24h: <Link className="cl-blue f-weight-400">0800 761 4418 </Link></p>
                                </MobileView>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer-2">
                <div className="content">
                    <div className="row no-gutters">
                        <div className="col-md-12 col-lg-6" align="left">
                            <p className="font-14 cl-black">© <b>2020 Super Benefícios.</b> Todos os direitos reservados</p>
                        </div>
                        <div className="col-md-12 col-lg-6" align="right">
                            <p className="prod font-14 cl-black">Produzido por <a href="https://tropa.digital" target="_blank" className="f-wheight-600 cl-black"> Tropa Digital </a> e <a href="https://somocollab.com.br" className="f-wheight-600 cl-black" to="">SOMO Collab</a> </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="tudo" className="animated fadeInUp">
                <div className="content">
                    <BrowserView>
                        <div className="row">
                            <div className="col-7 texts">
                                <p className="cl-black">Tudo isso por preços que cabem no seu bolso  | <span className="cl-light-blue"><b>Atendemos 24 horas em todo Brasil</b></span></p>
                            </div>
                            <div className="col-lg-5 col-md-12 buttons">
                                <Link onClick={(e) => setModalFtActive(true)} className="cl-white bg-blue bt" ><img src={Star} />Faça sua cotação online</Link> 
                                <Link className="cl-blue bt border-blue"><img src={Whatsimage} /> Fale conosco</Link>
                            </div>
                        </div>
                    </BrowserView>
                    <MobileView>
                        <div className="row">
                            <div className="col-12 buttons">
                                <Link onClick={(e) => setModalFtActive(true)} className="cl-white bg-blue bt" ><img src={Star} />Faça sua cotação online</Link> 
                                <Link className="cl-blue bt border-blue"><img src={Whatsimage} /> Fale conosco</Link>
                            </div>
                        </div>
                    </MobileView>
                </div>
            </div>

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

        </footer>


    );
}
