import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import LogoFooter from '../../images/logo/logo-footer.svg'

import Logoaapv from '../../images/logo/aaapv.svg'
import Logofgrs from '../../images/logo/fgrs.svg'

import IconPlus from '../../images/icon/plusRep.svg'
import Whatsapp from '../../images/icon/whatsapp.svg'

import Instagram from '../../images/icon/instagram.svg'
import Facebook from '../../images/icon/facebook.svg'
import Cookies from '../../images/icon/cookies.svg'

import Star from '../../images/sobre/star.svg'
import Whatsimage from '../../images/sobre/whats.svg'

import Modal from '../Modal/index';

import ModalImage from '../../images/modal/image-modal.png'
import { BrowserView, MobileView } from 'react-device-detect';

import Heart from '../../images/icon/coracao-garante.svg'


export default function Footer(){

    const [ftNone,  setftNone] = useState('active')

    const [modalAssActive, setModalAssActive] = useState(false);
    const [modalFtActive, setModalFtActive] = useState(false);

    const [modalLGPD, setModalLGPD] = useState(true);
    const [activeLGPD, setActiveLGPD] = useState(null);

    useEffect(()=>{
        if(!window.localStorage.getItem('LGPD')){
            setModalLGPD(true)
            if (modalLGPD === true ) {
                setActiveLGPD('active')
            } else {
                setActiveLGPD(null)
            }
        }
    },[])

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
                                        <Link to="/politica-de-privacidade">Política de Cookies e Privacidade</Link>
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
                                        <Link onClick={(e) => setModalAssActive(true)}>Área do <b>associado</b></Link>
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
                                <a href="https://api.whatsapp.com/send?phone=551140035542" target="_blank" className="bt border-blue cl-blue f-weight-700 font-14"><img src={Whatsapp} />Associe-se pelo WhatsApp</a>
                            </div>
                            <div className="col-lg-1 col-md-12 ft-redes">
                                <a href="https://www.facebook.com/superbeneficios" target="_blank"><img src={Facebook} /></a>
                                <a href="https://www.instagram.com/superbeneficios/" target="_blank"><img src={Instagram} /></a>
                            </div>
                            <div className="col-lg-6 col-md-12 ft-contatos" align="left">
                                <BrowserView>
                                    <p className="cl-black f-weight-700">Central de Cotação / Adesão: <a className="cl-blue f-weight-400" href="tel:40035542">4003 5542 </a></p>
                                    <p className="cl-black f-weight-700">Atendimento ao Associado: <a className="cl-blue f-weight-400" href="tel:40035548">4003 5548 </a></p>
                                    <p className="cl-black f-weight-700">Assistência 24 hs Auto: <a className="cl-blue f-weight-400" href="tel:08009402121">0800 940 2121</a> | <a className="cl-blue f-weight-400" href="tel:08009402122">0800 940 2122</a> </p>
                                    <p className="cl-black f-weight-700">Assistência 24 hs Saúde: <a className="cl-blue f-weight-400" href="tel:08006002853">0800 600 2853</a></p>
                                    <p className="cl-black f-weight-700">Furto e roubo 24h: <a className="cl-blue f-weight-400" href="tel:08007614418">0800 761 4418</a> </p>
                                </BrowserView>

                                <MobileView>
                                    <p className="cl-black f-weight-700">Central de Cotação / Adesão: <a className="cl-blue f-weight-400" href="tel:40035542">4003 5542 </a></p>
                                    <p className="cl-black f-weight-700">Atendimento ao Associado: <a className="cl-blue f-weight-400" href="tel:40035548">4003 5548 </a></p>
                                    <p className="cl-black f-weight-700">Assistência 24 hs Auto: <a className="cl-blue f-weight-400" href="tel:08009402121">0800 940 2121</a> <a className="cl-blue f-weight-400" href="tel:08009402122">0800 940 2122</a></p>
                                    <p className="cl-black f-weight-700">Assistência 24 hs Saúde: <a className="cl-blue f-weight-400" href="tel:08006002853">0800 600 2853</a></p>
                                    <p className="cl-black f-weight-700"> Furto e roubo 24h: <a className="cl-blue f-weight-400" href="tel:08007614418">0800 761 4418 </a></p>
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
                                <a href="https://api.whatsapp.com/send?phone=551140035542" target="_blank" className="cl-blue bt border-blue"><img src={Whatsimage} /> Fale conosco</a>
                            </div>
                        </div>
                    </BrowserView>
                    <MobileView>
                        <div className="row">
                            <div className="col-12 buttons">
                                <Link onClick={(e) => setModalFtActive(true)} className="cl-white bg-blue bt" ><img src={Star} />Faça sua cotação online</Link> 
                                <a href="https://api.whatsapp.com/send?phone=551140035542" target="_blank" className="cl-blue bt border-blue"><img src={Whatsimage} /> Fale conosco</a>
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
                        <a href="/form-auto" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Auto</a>
                        <Link to="/form-saude" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Saúde</Link>
                        <Link to="/form-casa" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Residência</Link>
                        <Link to="/form-pet" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Pet</Link>
                        <Link to="/form-dental" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Odonto</Link>
                    </div>
                </BrowserView>
                <MobileView>
                    <div className="buttons">
                        <a href="/form-auto" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Auto</a>
                        <a href="/form-saude" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Saúde</a>
                        <a href="/form-casa" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Residência</a>
                        <a href="/form-pet" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Pet</a>
                        <a href="/form-dental" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Odonto</a>
                    </div>
                </MobileView>
            </div>

            <div id="line-garante">
                <div className="content">
                    <div className="row">
                        <div className="col-12">
                            <div className="box-2">
                                <img src={Heart} />
                                <span className="cl-blue font-28 f-weight-700">Entenda como a Super<br /> garante seus benefícios</span>
                                <Link to="/super-garante" className="cl-blue border-blue bt">Saiba mais</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>

        <Modal width="wd-600" modalActive={modalAssActive}>
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

        <div id="modallgpd" className={activeLGPD}>
            <div>
                <div id="modal-ini">
                        <img src={Cookies} />
                        <p>
                            Usamos cookies para personalizar e melhorar a sua experiência no site. Ao continuar navegando, você concorda com a nossa <Link to="/politica-de-privacidade">Política de Cookies e privacidade.</Link>
                        </p>
                        <button onClick={(e) => window.localStorage.setItem('LGPD', false) & setActiveLGPD(false)} className="fechar">Continuar e fechar</button>
                </div>
            </div>
        </div>


        </footer>


    );
}
