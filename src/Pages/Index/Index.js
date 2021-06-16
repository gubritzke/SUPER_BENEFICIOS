import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import './Index.scss'

import Modal from '../../Components/Modal/index';

import BgBanner1 from '../../images/backgrounds/banner-left.svg'
import BgBanner2 from '../../images/backgrounds/banner-right.svg'

import Banner1 from '../../images/banner/banner-novo.png'

import Prod1 from '../../images/produtos/moto.png'
import Prod2 from '../../images/produtos/cachorro.png'
import Prod3 from '../../images/produtos/carro.png'
import Prod4 from '../../images/produtos/casa.png'
import Prod5 from '../../images/produtos/pessoa.png'
import Prod6 from '../../images/produtos/suv.png'
import Prod7 from '../../images/produtos/odonto.png'
import Prod8 from '../../images/produtos/carroseg.png'

import BgProd1 from '../../images/backgrounds/prod-1.svg'
import BgProd2 from '../../images/backgrounds/prod-2.svg'
import BGmobile from '../../images/banner/bg-mobilefull.png'

import ArrowWhite from '../../images/icon/arrow-white.svg'
import ArrowYellow from '../../images/icon/arrow-yellow.svg'
import ArrowBlue from '../../images/icon/arrow-blue.svg'

import bgNaoGreen from '../../images/nao-pedimos/bg-green.svg'
import bgNaoGreen2 from '../../images/nao-pedimos/bg-green2.svg'
import bgNaoPontos from '../../images/nao-pedimos/bg-pontos.svg'
import bgNaoYellow from '../../images/nao-pedimos/bg-yellow.svg'
import bgNaoYellowM from '../../images/nao-pedimos/bg-yellowM.svg'
import bgImage from '../../images/nao-pedimos/imagem.png'
import bgImageM from '../../images/nao-pedimos/imagem-mobile.png'
import bgNaoGreenMobile from '../../images/nao-pedimos/bg-mobile1.svg'

import ModalMoto from '../../images/produtos/modal/produtos.png'
import IconCar from '../../images/produtos/modal/icon-car.png'

import Heart from '../../images/icon/coracao-garante.svg'

import ModalImage from '../../images/modal/image-modal.png'
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";


export default function Index() {

    const [modalActive, setModalActive] = useState(false);

    useEffect(()=>{
        if(!window.localStorage.getItem('modal')){
            setModalActive(true)
            window.localStorage.setItem('modal', true)
        }
    },[])

    const [modalFtActive, setModalFtActive] = useState(false);

    return (
        <div id="home">
            <div id="banner">
                <BrowserView>
                    <img id="bg-banner1" className="animated fadeInLeft" src={BgBanner1} />
                    <img id="bg-banner2" className="animated fadeInRight" src={BgBanner2} />
                </BrowserView>

                <MobileView>
                    <img id="bg-banner1" className="animated fadeIn" src={BgBanner1} />
                    <img id="bg-banner2" className="animated fadeIn" src={BgBanner2} />
                </MobileView>

                <MobileView>
                    <img id="bg-mobile" className="animated fadeIn" src={BGmobile} />
                </MobileView>
                
                <BrowserView>
                <div className="content">
                    <div className="row no-gutters">
                        <div className="col-5 texto-banner">
                            <span className="font-48 f-weight-500 cl-white">
                                <span className="cl-yellow f-weight-500">
                                    Proteção Integral <br />24h em todo Brasil!
                               </span>
                            </span>
                            <p className="font-24 cl-white">
                                Proteja o que realmente importa <br />
                                para você. Sua família, sua casa, <br />
                                seu carro, sua saúde e seu pet.<br />
                                E o melhor tudo em um só lugar. 
                            </p>
                            <a href="https://api.whatsapp.com/send?phone=551140035542" target="_blank" className="bt border-white cl-white font-16">ou fale conosco no WhatsApp <img className="icon" src={ArrowWhite} /></a>
                        </div>
                        <div className="col-7">
                            <img className="cr-img animated fadeIn" src={Banner1} alt="Baixe nosso APP" />
                        </div>
                    </div>
                </div>
                </BrowserView>

                <MobileView>
                <div className="content">
                    <div className="row no-gutters">
                        <div className="col-12 texto-banner">
                        <span className="font-48 f-weight-500 cl-white">
                            <span className="cl-yellow f-weight-500">
                                    Proteção Integral <br />24h em todo Brasil!
                               </span>
                            </span>
                            <p className="font-24 cl-white">
                                Proteja o que realmente <br />
                                importa para você. <br />
                                Sua família, sua casa, <br />
                                seu carro, sua saúde e <br />
                                seu pet. E o melhor  <br /> 
                                tudo em um só lugar. 
                                <br />
                                <br />
                            </p>
                            <a href="https://api.whatsapp.com/send?phone=551140035542" target="_blank" className="bt border-white cl-white font-16">ou fale por WhatsApp <img className="icon" src={ArrowWhite} /></a>
                        </div>
                    </div>
                </div>
                </MobileView>


            </div>

            <div id="produtos">
                <div className="content">
                    <div className="row">
                        <div className="col-12 title" align="center">
                            <ScrollAnimation animateIn='fadeIn activeprod1' offset={320} animateOnce initiallyVisible={false} >
                                <img id="bg-banner1" src={BgProd1} />
                            </ScrollAnimation>
                            <ScrollAnimation  animateIn='fadeIn activeprod2' offset={320} animateOnce initiallyVisible={false} >
                                <img id="bg-banner2" src={BgProd2} />
                            </ScrollAnimation>
                            <h2 className="cl-black font-48">Você quer benefícios?</h2>
                            <span className="bg-yellow cl-black bt font-22"><b>Atendemos 24 horas</b> em todo Brasil</span>
                        </div>
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
                                <a href="/form-auto" className="box box-blue">
                                    <div className="bg-yellow" align="center">
                                        <span className="cl-black font-20 f-wheight-700">Novidade!</span>
                                    </div>
                                    <span className="cl-blue font-42 f-wheight-700 tit">
                                        SUPER COMBO <br/>
                                        <span className="cl-light-blue font-34">Auto + Saúde</span>
                                    </span>
                                    <p className="cl-blue font-16">
                                        • Benefícios Super Auto<br/>
                                        <b><span className="cl-yellow">+</span> Rede completa com descontos<br/> em consultas, exames, vacinas e mais<br/>
                                        <span className="cl-yellow">+</span> Vídeoconsulta com médico<br/> 24 horas por dia, 7 dias na semana</b>
                                    </p>
                                    <span className="cl-blue font-16 font-p-mobal1">Por apenas</span>
                                    <span className="cl-blue font-32 f-weight-700 font-p-mobal">+R$ 1,99<span className="cl-blue font-16 f-weight-400">/mensais</span></span>
                                    <a href="/form-auto" className="bg-light-blue cl-white bt font-18">Cotação Online <img className="icon" src={ArrowYellow} /></a>
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

                            <ScrollAnimation className="col-lg-4 col-md-12" animateIn='fadeIn'>
                                <a href="/super-vida" className="box">
                                    <img src={Prod6}></img>
                                    <span className="produto cl-gray font-28">Super <span className="cl-blue font-28">Saúde</span></span>
                                    <span className="cl-gray font-16 font-p-mobal1">Planos a partir de</span>
                                    <span className="cl-blue font-32 f-weight-700 font-p-mobal">R$ 29,90<span className="cl-gray font-16 f-weight-400">/mensais</span></span>
                                    <Link to="form-saude" className="bg-light-blue cl-white bt font-18">Cotação Online <img className="icon" src={ArrowYellow} /></Link>
                                    <MobileView>
                                        <div className="line-bottom bg-green">
                                            <p className="cl-blue font-32"><span className="cl-yellow">+</span> <b>Benefícios</b> Super Saúde</p>
                                        </div>
                                    </MobileView>
                                </a>
                            </ScrollAnimation>

                            <ScrollAnimation className="col-lg-4 col-md-12" animateIn='fadeIn'>
                                <Link to="form-casa" className="box  line-box">
                                    <img src={Prod4}></img>
                                    <span className="produto cl-gray font-28">Super <span className="cl-blue font-28">Residência</span></span>
                                    <span className="cl-gray font-18 txt-pc font-p-mobal1" align="center">Seu lar merece segurança<br />
e muitas vantagens!</span>
                                    <Link  to="form-casa" className="bg-light-blue cl-white bt font-18">Saiba mais <img className="icon" src={ArrowYellow} /></Link>
                                 </Link>
                            </ScrollAnimation>

                            <ScrollAnimation className="col-lg-4 col-md-12" animateIn='fadeIn'>
                                <Link to="form-dental" className="box  line-box">
                                    <img src={Prod7}></img>
                                    <span className="produto cl-gray font-28">Super <span className="cl-blue font-28">Odonto</span></span>
                                    <span className="cl-gray font-18 txt-pc font-p-mobal1" align="center">serviços para cuidar de <br />
                                    você e sua família!</span>
                                    <Link  to="form-dental" className="bg-light-blue cl-white bt font-18">Saiba mais <img className="icon" src={ArrowYellow} /></Link>
                                 </Link>
                            </ScrollAnimation>

                            <ScrollAnimation className="col-lg-4 col-md-12" animateIn='fadeIn'>
                                <Link to="form-pet" className="box  line-box">
                                    <img src={Prod2} className="img-pet"></img>
                                    <span className="produto cl-gray font-28">Super <span className="cl-blue font-28">Pet</span></span>
                                    <span className="cl-gray font-18 txt-pc font-p-mobal1" align="center">Seu amigo merece os<br />
melhores benefícios!</span>
                                    <Link  to="form-pet" className="bg-light-blue cl-white bt font-18">Saiba mais <img className="icon" src={ArrowYellow} /></Link>
                                </Link>
                            </ScrollAnimation>

                            <ScrollAnimation className="col-lg-4 col-md-12 super-garante" animateIn='fadeIn'>
                                <Link to="/super-garante" className="box  line-box" align="center">
                                    <div className="titulo cl-blue font-20">Tranquilidade pra você</div>
                                    <span className="asp font-34 cl-light-blue f-weight-700">
                                        A Super<br />
                                        <span className="font-42 cl-blue">GARANTE</span><br />
                                        seus benefícios!
                                    </span>
                                    <p className="cl-blue font-16">
                                        Saiba como o <b>FGRS</b><br />
                                        (Fundo Garantidor contra Riscos Sistêmicos)<br />
                                        traz <b>total segurança</b> para os associados<br />
                                        da Super Benefícios.
                                    </p>
                                    <Link  to="/super-garante" className="asp-button bg-blue cl-white bt font-18"> Conheça </Link>
                                </Link>
                            </ScrollAnimation>
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

                        <div className="col-lg-8 col-md-12 left-sr">
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

                        <div className="col-lg-8 col-md-12 left-sr">
                            <ScrollAnimation animateOnce animateIn='fadeIn'>
                                <img className="image" src={bgImageM} />
                                <img className="bg-slyellow" src={bgNaoYellowM} />
                            </ScrollAnimation>
                                <img className="bg-green2" src={bgNaoGreen2} />
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



            <Modal modalActive={modalActive}>
                <div id="modal-ini" className="bg-blue">
                    <button onClick={(e) => setModalActive(false)} className="fechar"></button>
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
