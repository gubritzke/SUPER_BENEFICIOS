import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import Modal from '../../Components/Modal/index';

import './Planos.scss';

import Carousel, { Dots } from '@brainhubeu/react-carousel';

import BgBanner from '../../images/planos/super-odonto/banner-full.png'
import LogoSuper from '../../images/planos/super-odonto/logo-super.svg'

import IconNosso from '../../images/sobre/icon-nosso.svg'
import ArrowYellow from '../../images/icon/arrow-yellow.svg'

import ArrowBlue from '../../images/icon/arrow-blue.svg'
import bgNaoGreen from '../../images/nao-pedimos/bg-green.svg'
import bgNaoGreen2 from '../../images/nao-pedimos/bg-green2.svg'
import bgNaoPontos from '../../images/nao-pedimos/bg-pontos.svg'
import bgNaoYellow from '../../images/nao-pedimos/bg-yellow.svg'
import bgNaoYellowM from '../../images/nao-pedimos/bg-yellowM.svg'
import bgImage from '../../images/sobre/image-analise.png'

import icon1 from '../../images/planos/super-odonto/icon-1.svg'
import icon2 from '../../images/planos/super-odonto/icon-2.svg'
import icon3 from '../../images/planos/super-odonto/icon-3.svg'
import icon4 from '../../images/planos/super-odonto/icon-4.svg'
import icon5 from '../../images/planos/super-odonto/icon-5.svg'
import icon6 from '../../images/planos/super-odonto/icon-6.svg'
import icon7 from '../../images/planos/super-odonto/icon-7.svg'
import icon8 from '../../images/planos/super-odonto/icon-8.svg'
import icon9 from '../../images/planos/super-odonto/icon-9.svg'
import icon10 from '../../images/planos/super-odonto/icon-10.svg'

import ModalImage from '../../images/modal/image-modal.png'
import { BrowserView, MobileView } from 'react-device-detect';
import bgNaoGreenMobile from '../../images/nao-pedimos/bg-mobile1.svg'

export default function Index() {

    const [modalActive, setModalActive] = useState(false);
    const [modalFtActive, setModalFtActive] = useState(false);


    return (
        <div id="super-odonto">
            <div id="banner">
                <img src={BgBanner} className="animated fadeInDown" />
                <div className="content">
                    <div className="row conteudos">
                        <div className="col-12">
                            <img className="img animated fadeInLeft" src={LogoSuper} />
                            <span className="cl-gray">
                                Uma rede com mais de <b>30 mil consultórios</b> em <br />
                                todo Brasil com extensa gama de serviços para cuidar<br />
                                de <b>você e sua família.</b>
                            </span>
                        </div>
                    </div> 
                </div>
            </div>

            <div id="vantavida">
                <div className="content">
                    <div className="row">
                        <div className="col-12" align="center">
                            <span className="cl-black font-32 title">Muito mais <b className="cl-light-blue">Benefícios!</b></span>
                        </div>
                    </div>

                    <div className="row line">
                        <div className="image">
                            <img src={icon1} />
                        </div>
                        <div className="image">
                            <img src={icon2} />
                        </div>
                        <div className="image">
                            <img src={icon3} />
                        </div>
                        <div className="image">
                            <img src={icon4} />
                        </div>
                        <div className="image">
                            <img src={icon5} />
                        </div>
                    </div>
                    <div className="row line2">
                        <div className="image">
                            <img src={icon6} />
                        </div>
                        <div className="image">
                            <img src={icon7} />
                        </div>
                        <div className="image">
                            <img src={icon8} />
                        </div>
                        <div className="image">
                            <img src={icon9} />
                        </div>
                        <div className="image">
                            <img src={icon10} />
                        </div>
                    </div>
                </div>
            </div>

            <BrowserView>
            <div id="solicite">
                <div className="content">
                    <div className="row">
                            <div className="col-lg-4 col-md-12 left-sl">
                                <ScrollAnimation animateOnce animateIn='fadeIn'>
                                    <img className="bg-slgrenn" src={bgNaoGreen} />
                                </ScrollAnimation>
                                <ScrollAnimation animateOnce delay={250} animateIn='fadeIn'>
                                    <img className="bg-pontos" src={bgNaoPontos} />
                                </ScrollAnimation>
                                
                                <span className="cl-white font-64 f-weight-700">
                                    Não
                                    pedimos
                                    análise<br />
                                    de perfil.
                                </span>
                                <Link onClick={(e) => setModalFtActive(true)} className="cl-blue border-yellow bt font-18">Solicite sua cotação online <img className="icon" src={ArrowBlue} /></Link>
                            </div>

                        <div className="col-lg-8 col-md-12 left-sr left-srot">
                            <ScrollAnimation animateOnce animateIn='fadeIn'>
                                <img className="image" src={bgImage} />
                                <img className="bg-slyellow" src={bgNaoYellow} />
                            </ScrollAnimation>
                            <ScrollAnimation animateOnce animateIn='fadeInRight'>
                                <img className="bg-green2" src={bgNaoGreen2} />
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
            </BrowserView>

            <MobileView>
            <div id="solicite">
                <div className="content">
                    <div className="row">

                        <div className="col-lg-8 col-md-12 left-sr left-srot">
                            <ScrollAnimation animateOnce animateIn='fadeIn'>
                                <img className="image image-sobre" src={bgImage} />
                                <img className="bg-slyellow" src={bgNaoYellowM} />
                            </ScrollAnimation>
                            <ScrollAnimation animateOnce animateIn='fadeInRight'>
                                <img className="bg-green2" src={bgNaoGreen2} />
                            </ScrollAnimation>
                        </div>
                        <div className="col-lg-4 col-md-12 left-sl">
                                <img className="bg-green-mobile" src={bgNaoGreenMobile} />
                                <img className="bg-pontos" src={bgNaoPontos} />
                                <span className="cl-white font-64 f-weight-700">
                                    Não
                                    pedimos<br />
                                    análise
                                    de perfil.
                                </span>
                                <Link onClick={(e) => setModalFtActive(true)} className="cl-blue border-yellow bt font-18">Solicite sua cotação online <img className="icon" src={ArrowBlue} /></Link>
                            </div>
                    </div>
                </div>
            </div>
            </MobileView>

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
        </div>
    );
}
