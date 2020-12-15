import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import './Index.scss'

import Modal from '../../Components/Modal/index';

import BgBanner1 from '../../images/backgrounds/banner-left.svg'
import BgBanner2 from '../../images/backgrounds/banner-right.svg'

import Banner1 from '../../images/banner/banner-1.png'

import Prod1 from '../../images/produtos/moto.png'
import Prod2 from '../../images/produtos/cachorro.png'
import Prod3 from '../../images/produtos/carro.png'
import Prod4 from '../../images/produtos/casa.png'
import Prod5 from '../../images/produtos/pessoa.png'
import Prod6 from '../../images/produtos/suv.png'

import BgProd1 from '../../images/backgrounds/prod-1.svg'
import BgProd2 from '../../images/backgrounds/prod-2.svg'

import ArrowWhite from '../../images/icon/arrow-white.svg'
import ArrowYellow from '../../images/icon/arrow-yellow.svg'
import ArrowBlue from '../../images/icon/arrow-blue.svg'

import bgNaoGreen from '../../images/nao-pedimos/bg-green.svg'
import bgNaoGreen2 from '../../images/nao-pedimos/bg-green2.svg'
import bgNaoPontos from '../../images/nao-pedimos/bg-pontos.svg'
import bgNaoYellow from '../../images/nao-pedimos/bg-yellow.svg'
import bgImage from '../../images/nao-pedimos/imagem.png'

import ModalMoto from '../../images/produtos/modal/produtos.png'
import IconCar from '../../images/produtos/modal/icon-car.png'

import ModalImage from '../../images/modal/image-modal.png'

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
                <img id="bg-banner1" className="animated fadeInLeft" src={BgBanner1} />
                <img id="bg-banner2" className="animated fadeInRight" src={BgBanner2} />
                <div className="content">
                    <div className="row no-gutters">
                        <div className="col-5 texto-banner">
                            <span className="font-40 cl-white">Um mundo de vantagens na <b>palma da sua mão!</b></span>
                            <p className="font-24 cl-white">Acessar seus boletos, Alteração de dados cadastrais, Acesso direto aos nossos canais de contato e muito mais?</p>
                            <Link className="bt border-white cl-white font-16">Baixar App <img className="icon" src={ArrowWhite} /></Link>
                        </div>
                        <div className="col-7">
                            <img className="cr-img animated fadeIn" src={Banner1} alt="Baixe nosso APP" />
                        </div>
                    </div>
                </div>
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
                            <ScrollAnimation  className="col-4" animateIn='fadeIn'>
                                <Link to="form-auto"  className="box">
                                    <img src={Prod1}></img>
                                    <span className="produto cl-gray font-28">Super Auto | <span className="cl-blue font-28">Motos</span></span>
                                    <span className="cl-gray font-16">Planos a partir de</span>
                                    <span className="cl-blue font-32 f-weight-700">R$ 39,90<span className="cl-gray font-16 f-weight-400">/mensais</span></span>
                                    <Link to="form-auto" className="bg-light-blue cl-white bt font-18">Cotação Online <img className="icon" src={ArrowYellow} /></Link>
                                </Link>
                            </ScrollAnimation>

                            <ScrollAnimation className="col-4" animateIn='fadeIn'>
                                <Link to="form-auto" className="box">
                                    <img src={Prod3}></img>
                                    <span className="produto cl-gray font-28">Super Auto | <span className="cl-blue font-28">Carros</span></span>
                                    <span className="cl-gray font-16">Planos a partir de</span>
                                    <span className="cl-blue font-32 f-weight-700">R$ 39,90<span className="cl-gray font-16 f-weight-400">/mensais</span></span>
                                    <Link to="form-auto" className="bg-light-blue cl-white bt font-18">Cotação Online <img className="icon" src={ArrowYellow} /></Link>
                                </Link>
                            </ScrollAnimation>

                            <ScrollAnimation className="col-4" animateIn='fadeIn'>
                                <Link to="form-auto" className="box">
                                    <img src={Prod6}></img>
                                    <span className="produto cl-gray font-28">Super Auto | <span className="cl-blue font-28">SUvs</span></span>
                                    <span className="cl-gray font-16">Planos a partir de</span>
                                    <span className="cl-blue font-32 f-weight-700">R$ 44,90<span className="cl-gray font-16 f-weight-400">/mensais</span></span>
                                    <Link to="form-auto" className="bg-light-blue cl-white bt font-18">Cotação Online <img className="icon" src={ArrowYellow} /></Link>
                                </Link>
                            </ScrollAnimation>

                            <ScrollAnimation className="col-4" animateIn='fadeIn'>
                                <Link to="form-saude" className="box">
                                    <img src={Prod5}></img>
                                    <span className="produto cl-gray font-28">Super <span className="cl-blue font-28">Saúde</span></span>
                                    <span className="cl-gray font-16">Planos a partir de</span>
                                    <span className="cl-blue font-32 f-weight-700">R$ 23,90<span className="cl-gray font-16 f-weight-400">/mensais</span></span>
                                    <Link to="form-saude" className="bg-light-blue cl-white bt font-18">Cotação Online <img className="icon" src={ArrowYellow} /></Link>
                                </Link>
                            </ScrollAnimation>

                            <ScrollAnimation className="col-4" animateIn='fadeIn'>
                                <Link to="form-casa" className="box">
                                    <img src={Prod4}></img>
                                    <span className="produto cl-gray font-28">Super <span className="cl-blue font-28">Casa</span></span>
                                    <span className="cl-gray font-18 txt-pc" align="center">Seu lar merece segurança<br />
e muitas vantagens!</span>
                                    <Link  to="form-casa" className="bg-light-blue cl-white bt font-18">Saiba mais <img className="icon" src={ArrowYellow} /></Link>
                                 </Link>
                            </ScrollAnimation>

                            <ScrollAnimation className="col-4" animateIn='fadeIn'>
                                <Link to="form-pet" className="box">
                                    <img src={Prod2} className="img-pet"></img>
                                    <span className="produto cl-gray font-28">Super <span className="cl-blue font-28">Pet</span></span>
                                    <span className="cl-gray font-18 txt-pc" align="center">Seu amigo merece os<br />
melhores benefícios!</span>
                                    <Link  to="form-pet" className="bg-light-blue cl-white bt font-18">Saiba mais <img className="icon" src={ArrowYellow} /></Link>
                                </Link>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>

            <div id="solicite">
                <div className="content">
                    <div className="row">
                        <div className="col-4 left-sl">
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
                        <div className="col-8 left-sr">
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

            <Modal modalActive={modalActive}>
                <div id="modal-ini" className="bg-blue">
                    <button onClick={(e) => setModalActive(false)} className="fechar"></button>
                    <img src={ModalImage} />
                    <div className="buttons">
                        <Link to="/form-auto" className="font-16 cl-white border-white bt">Super Auto</Link>
                        <Link to="/form-saude" className="font-16 cl-white border-white bt">Super Vida</Link>
                        <Link to="/form-casa" className="font-16 cl-white border-white bt">Super Casa</Link>
                        <Link to="/form-pet" className="font-16 cl-white border-white bt">Super Pet</Link>
                    </div>
                </div>
            </Modal>
            
            <Modal modalActive={modalFtActive}>
            <div id="modal-ini" className="bg-blue">
                <button onClick={(e) => setModalFtActive(false)} className="fechar"></button>
                <img src={ModalImage} />
                <div className="buttons">
                    <Link to="/form-auto" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Auto</Link>
                    <Link to="/form-saude" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Vida</Link>
                    <Link to="/form-casa" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Casa</Link>
                    <Link to="/form-pet" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Pet</Link>
                </div>
            </div>
        </Modal>

        </div>
    );
}
