import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import Modal from '../../Components/Modal/index';

import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import bgNaoGreenMobile from '../../images/nao-pedimos/bg-mobile1.svg'

import './Sobre.scss';

import BgBanner from '../../images/sobre/banner-full.png'
import Map from '../../images/sobre/map.svg'

import IconNosso from '../../images/sobre/icon-nosso.svg'

import ArrowBlue from '../../images/icon/arrow-blue.svg'
import bgNaoGreen from '../../images/nao-pedimos/bg-green.svg'
import bgNaoGreen2 from '../../images/nao-pedimos/bg-green2.svg'
import bgNaoPontos from '../../images/nao-pedimos/bg-pontos.svg'
import bgNaoYellow from '../../images/nao-pedimos/bg-yellow.svg'
import bgNaoYellowM from '../../images/nao-pedimos/bg-yellowM.svg'
import bgImage from '../../images/sobre/image-analise.png'

import ModalImage from '../../images/modal/image-modal.png'

import Heart from '../../images/icon/coracao-garante.svg'
import ImageGarante from '../../images/sobre/image-garante.png'

export default function Index() {

    const [modalFtActive, setModalFtActive] = useState(false);

    return (
        <div id="sobre">
            <div id="banner">
                <img src={BgBanner} className="animated fadeInDown" />
                <div className="content">
                    <div className="row conteudos">
                        <MobileView>
                            <div className="col-lg-5 col-md-12">
                                <img className="imgmap animated fadeIn" src={Map} />
                            </div>
                        </MobileView>
                        <div className="col-lg-7 col-md-12 texts animated fadeIn">
                            <span className="font-32">
                                Muito mais que benefícios, <br />
                                <b>deixamos sua vida mais fácil!</b>
                            </span>
                            <p className="font-16 cl-black">
                                A Super Benefícios é hoje uma das maiores plataformas digitais de Proteção e Benefícios do Brasil. Com milhares de associados, nós garantimos proteção completa para você e sua família em todo território nacional!
                                <br /><br />
                                Proteger a sua família de forma integral é o nosso compromisso. Contamos com planos de proteção residencial, saúde, pet e veicular. E o melhor, tudo isso em um só lugar, com valores acessíveis, que cabem no seu bolso.
                                <br /><br />
                                A inovação e a busca constante pela excelência no atendimento e gestão, são o norte do nosso negócio. O senso de urgência, a geração de valor e o cuidado com os nossos associados se faz presente em todas as  nossas ações.
                                <br /><br />
                                Atendimento humanizado para você e quem você ama 24 horas por dia, nos 365 dias do ano. E tem mais! Todos os nossos associados contam com uma plataforma de descontos com os maiores e-commerces, farmácias, restaurantes, faculdades e muito mais. 
                                <br /><br />
                                Vem ser Super!
                            </p>
                        </div>
                        <BrowserView>
                        <div className="col-5">
                            <img className="imgmap animated fadeInRight" src={Map} />
                        </div>
                        </BrowserView>
                    </div>
                </div>
            </div>

            <div id="supergarantesobre">
                <div className="content">
                    <div className="row">
                        <div className="col-12 title">
                            <img src={Heart} />
                            <p className="font-28 cl-blue f-weight-700">Entenda como a Super garante seus benefícios</p>
                        </div>
                    </div>
                    <div className="row mg-top-sobre">
                        <div className="col-2 image mb-none">
                            <img src={ImageGarante} />
                        </div>
                        <div className="col-md-12 col-lg-10 text">
                            <p className="cl-gray font-16  ">
                                <b>A SUPER BENEFÍCIOS faz parte da AAAPV, e isso traz segurança pra você e credibilidade e solidez para que possamos oferecer os mais diversos benefícios e trazer mais qualidade de vida aos associados.</b>
                                <br /><br />
                                <b>O Fundo Garantidor contra Riscos Sistêmicos</b> (FGRS) é uma iniciativa da AAAPV (Agência de Autorregulamentação das Entidades de Autogestão de Planos de Proteção Contra Riscos Patrimoniais) para consolidar ainda mais a atuação das mútuas no segmento de proteção patrimonial em nosso país. Com a missão de amparar o associado/cooperado no caso de insolvência de alguma mútua filiada. 
                                <br /><br />
                                A Super Benefícios, como filiada é acompanhada e auditada com frequência pela AAAPV. Seguimos regras de compliance e de gestão estabelecidas por ela e pelo FGRS e assim mantemos nosso selo. Com monitoramento frequente e participamos de orientações para detectar riscos de insolvência. Todavia, caso ocorra, o FGRS cobrirá, dentro dos limites estabelecidos no regulamento do fundo, os eventos que estiverem abertos, sejam eles de perda parcial, total ou roubo/furto.
                            </p>
                        </div>

                        <div className="col-12" align="center">
                            <a href="https://fgrs.com.br" target="_blank" className="cl-blue bt border-blue font-16"><b>Acesse o site da AAAPV</b></a>
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
