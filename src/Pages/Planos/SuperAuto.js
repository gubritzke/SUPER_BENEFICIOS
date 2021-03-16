import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import Modal from '../../Components/Modal/index';

import './Planos.scss';

import Carousel, { Dots } from '@brainhubeu/react-carousel';

import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import bgNaoGreenMobile from '../../images/nao-pedimos/bg-mobile1.svg'

import BgBanner from '../../images/planos/super-auto/banner-full2.png'
import LogoSuper from '../../images/planos/super-auto/logo-super.png'

import IconNosso from '../../images/sobre/icon-nosso.svg'
import ArrowYellow from '../../images/icon/arrow-yellow.svg'

import ArrowBlue from '../../images/icon/arrow-blue.svg'
import bgNaoGreen from '../../images/nao-pedimos/bg-green.svg'
import bgNaoGreen2 from '../../images/nao-pedimos/bg-green2.svg'
import bgNaoPontos from '../../images/nao-pedimos/bg-pontos.svg'
import bgNaoYellow from '../../images/nao-pedimos/bg-yellow.svg'
import bgNaoYellowM from '../../images/nao-pedimos/bg-yellowM.svg'
import bgImage from '../../images/sobre/image-analise.png'

import Prod1 from '../../images/produtos/moto.png'
import Prod3 from '../../images/produtos/carro.png'
import Prod6 from '../../images/planos/super-auto/image-suv.png'
import Prod8 from '../../images/produtos/carroseg.png'

import icon1 from '../../images/planos/super-auto/icon1.svg'
import icon2 from '../../images/planos/super-auto/icon2.svg'
import icon3 from '../../images/planos/super-auto/icon3.svg'
import icon4 from '../../images/planos/super-auto/icon4.svg'
import icon5 from '../../images/planos/super-auto/icon5.svg'
import icon6 from '../../images/planos/super-auto/icon6.svg'
import icon7 from '../../images/planos/super-auto/icon7.svg'
import icon8 from '../../images/planos/super-auto/icon8.svg'
import icon9 from '../../images/planos/super-auto/icon9.svg'
import icon10 from '../../images/planos/super-auto/icon10.svg'
import icon11 from '../../images/planos/super-auto/icon11.svg'
import icon12 from '../../images/planos/super-auto/icon12.svg'

import Heart from '../../images/icon/coracao-garante.svg'

import ModalImage from '../../images/modal/image-modal.png'


export default function Index() {

    const [modalActive, setModalActive] = useState(false);
    const [modalFtActive, setModalFtActive] = useState(false);

    return (
        <div id="super-auto">
            <div id="banner">
                <img src={BgBanner} className="animated fadeInDown" />
                <div className="content">
                    <div className="row conteudos">
                        <div className="col-12">
                            <img className="img animated fadeInLeft" src={LogoSuper} />
                        </div>
                    </div> 
                </div>
            </div>

            
            <div id="produtos">
                <div className="content">
                    <div className="row">
                        <div className="col-12 row no-gutters">
                        <ScrollAnimation  className="col-lg-4 col-md-12" animateIn='fadeIn'>
                            <a href="/form-auto"  className="box">
                                    <img src={Prod1}></img>
                                    <span className="produto cl-gray font-28">Super Auto | <span className="cl-blue font-28">Motos</span></span>
                                    <span className="cl-gray font-16 font-p-mobal1">Planos a partir de</span>
                                    <span className="cl-blue font-32 f-weight-700 font-p-mobal">R$ 39,90<span className="cl-gray font-16 f-weight-400">/mensais</span></span>
                                    <a href="/form-auto" className="bg-light-blue cl-white bt font-18">Cotação Online <img className="icon" src={ArrowYellow} /></a>
                                    <MobileView>
                                        <div className="line-bottom bg-green">
                                            <p className="cl-blue font-32"><span className="cl-yellow">+</span> <b>Benefícios</b> Super Auto</p>
                                        </div>
                                    </MobileView>
                                </a>
                            </ScrollAnimation>

                            <ScrollAnimation className="col-lg-4 col-md-12" animateIn='fadeIn'>
                            <a href="/form-auto" className="box">
                                    <img src={Prod3}></img>
                                    <span className="produto cl-gray font-28">Super Auto | <span className="cl-blue font-28">Carros</span></span>
                                    <span className="cl-gray font-16 font-p-mobal1">Planos a partir de</span>
                                    <span className="cl-blue font-32 f-weight-700 font-p-mobal">R$ 39,90<span className="cl-gray font-16 f-weight-400">/mensais</span></span>
                                    <a href="/form-auto" className="bg-light-blue cl-white bt font-18">Cotação Online <img className="icon" src={ArrowYellow} /></a>
                                    <MobileView>
                                        <div className="line-bottom bg-green">
                                            <p className="cl-blue font-32"><span className="cl-yellow">+</span> <b>Benefícios</b> Super Auto</p>
                                        </div>
                                    </MobileView>
                                </a>
                            </ScrollAnimation>


                            <ScrollAnimation className="col-lg-4 col-md-12" animateIn='fadeIn'>
                                <a href="/form-auto" className="box">
                                    <img src={Prod8}></img>
                                    <span className="produto pdspc cl-gray font-28">Super Auto | <span className="cl-blue font-28">Segurança</span></span>
                                    <span className=" cl-gray font-28 sub-tit">Furto e Roubo<br/>+ Assistência 24h</span>
                                    <span className="cl-light-blue font-16 font-p-mobal1 tb-fipe">100% da tabela FIPE até R$ 15.000</span>
                                    <span className="cl-blue font-32 f-weight-700 font-p-mobal">R$ 54,90<span className="cl-gray font-16 f-weight-400">/mensais</span></span>
                                    <a href="/form-auto" className="bg-light-blue cl-white bt font-18">Cotação Online <img className="icon" src={ArrowYellow} /></a>
                                    <MobileView>
                                        <div className="line-bottom bg-green">
                                            <p className="cl-blue font-32"><span className="cl-yellow">+</span> <b>Benefícios</b> Super Auto</p>
                                        </div>
                                    </MobileView>
                                </a>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>

            <div id="banner-novo">
                <div className="content">
                    <div className="row line-full line-bg no-gutters">
                        <div className="novidade">
                            <span>Novidade!</span>
                        </div>
                        <div className="col-lg-3 col-md-12 titles">
                            <span className="cl-blue f-weight-700 font-37 dp-bl">SUPER COMBO</span>
                            <span className="cl-light-blue f-weight-700 font-30 dp-bl">Auto + Saúde</span>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <p className="cl-blue font-16">
                                <BrowserView>
                                    • Benefícios Super Auto<br/>
                                    <b><span className="cl-yellow">+</span> Rede completa com descontos em consultas, exames, vacinas e mais<br/>
                                    <span className="cl-yellow">+</span> Vídeoconsulta com médico 24 horas por dia, 7 dias na semana</b>
                                </BrowserView>
                                <MobileView>
                                    • Benefícios Super Auto<br/>
                                    <b><span className="cl-yellow">+</span> Rede completa com descontos<br/> em consultas, exames, vacinas e mais<br/>
                                    <span className="cl-yellow">+</span> Vídeoconsulta com médico<br/> 24 horas por dia, 7 dias na semana</b>
                                </MobileView>
                            </p>
                        </div>
                        <div className="col-lg-3  col-md-12 valor">
                            <span className="cl-blue font-16 font-p-mobal1 dp-bl">Por apenas</span>
                            <span className="cl-blue font-32 f-weight-700 font-p-mobal dp-bl">+R$ 1,99<span className="cl-blue font-16 f-weight-400">/mensais</span></span>
                            <a href="/form-auto" className="bg-yellow cl-black bt font-18 hover-ajuste">Quero esse benefício!</a>
                        </div>
                    </div>
                </div>

            </div>

            <BrowserView>
            <div id="vantauto">
                <div className="content">
                    <div className="row">
                        <div className="col-2 image">
                            <img src={icon1} />
                        </div>
                        <div className="col-2 image">
                            <img src={icon2} />
                        </div>
                        <div className="col-2 image">
                            <img src={icon3} />
                        </div>
                        <div className="col-2 image">
                            <img src={icon4} />
                        </div>
                        <div className="col-2 image">
                            <img src={icon5} />
                        </div>
                        <div className="col-2 image">
                            <img src={icon6} />
                        </div>
                        <div className="col-2 image">
                            <img src={icon7} />
                        </div>
                        <div className="col-2 image">
                            <img src={icon8} />
                        </div>
                        <div className="col-2 image">
                            <img src={icon9} />
                        </div>
                        <div className="col-2 image">
                            <img src={icon10} />
                        </div>
                        <div className="col-2 image">
                            <img src={icon11} />
                        </div>
                        <div className="col-2 image">
                            <img src={icon12} />
                        </div>
                    </div>
                </div>
            </div>
            </BrowserView>

            <MobileView>
            <div id="vantauto">
                        <div className="row">
                        <Carousel     
                                infinite
                                centered 
                                slidesPerPage={4}
                                >
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
                            <div className="image">
                                <img src={icon11} />
                            </div>
                            <div className="image">
                                <img src={icon12} />
                            </div>
                            </Carousel>
                        </div>
            </div>
            </MobileView>

            <div id="line-garante">
                <div className="content">
                    <div className="row">
                        <div className="col-12">
                            <div className="box">
                                <img src={Heart} />
                                <span className="cl-blue font-28 f-weight-700">Entenda como a Super garante seus benefícios</span>
                                <Link to="/super-garante" className="cl-blue border-blue bt font-16">Saiba mais</Link>
                            </div>
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

        </div>
    );
}
