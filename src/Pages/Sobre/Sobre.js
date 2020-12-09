import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import Modal from '../../Components/Modal/index';

import './Sobre.scss';

import BgBanner from '../../images/sobre/banner-full.png'
import Map from '../../images/sobre/map.svg'

import IconNosso from '../../images/sobre/icon-nosso.svg'

import ArrowBlue from '../../images/icon/arrow-blue.svg'
import bgNaoGreen from '../../images/nao-pedimos/bg-green.svg'
import bgNaoGreen2 from '../../images/nao-pedimos/bg-green2.svg'
import bgNaoPontos from '../../images/nao-pedimos/bg-pontos.svg'
import bgNaoYellow from '../../images/nao-pedimos/bg-yellow.svg'
import bgImage from '../../images/sobre/image-analise.png'

export default function Index() {

    return (
        <div id="sobre">
            <div id="banner">
                <img src={BgBanner} className="animated fadeInDown" />
                <div className="content">
                    <div className="row conteudos">
                        <div className="col-7 texts animated fadeIn">
                            <span className="font-32">
                                Muito mais que benefícios, <br />
                                <b>deixamos sua vida mais fácil!</b>
                            </span>
                            <p className="font-16 cl-black">
                                A <b>SUPER BENEFÍCIOS</b> vem estabelecer uma nova forma de relacionar com nossos associados, de forma competitiva diante do mercado, priorizando um Atendimento diferenciado com Agilidade e Qualidade.
                                <br />
                                <br />
                                Acreditamos que esta proximidade proporcionará um atendimento personalizado para que nosso Associado sinta Segurança em suas necessidades em relação a proteção de seu Patrimônio.
                                <br />
                                <br />
                                <b>Além disso, temos o compromisso de oferecer a melhor Proteção e os melhores Benefícios, com abrangência nacional.</b>
                            </p>
                        </div>
                        <div className="col-5">
                            <img className="imgmap animated fadeInRight" src={Map} />
                        </div>
                    </div>
                </div>
            </div>
            <div id="nosso-manifesto">
                <div className="content">
                    <div className="row no-gutters box-blue bg-blue">
                        <div className="col-12">
                            <span className="cl-yellow"><img src={IconNosso} /> Nosso Manifesto</span>
                            <p className="cl-white">
                                A <b>Super Benefícios</b> visa entregar aos seus associados os <b>melhores benefícios nas mais diversas áreas,</b> proporcionando segurança, facilidades e vantagens financeiras, que resultarão em <b>mais economia, tempo e qualidade de vida.</b>
                                <br /><br />
                                Com <b>inovação, busca por excelência no atendimento e gestão, foco e senso de urgência e de valor,</b> almejamos, muito em breve, sermos reconhecidos como a maior Plataforma Digital de Proteção e Benefícios.
                            </p>
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
                            
                            <span className="cl-white font-56 f-weight-700">
                            Sem análise<br />
                            de perfil, Sem <br />
                            complicação.
                            </span>
                            <p className="cl-white font-24 f-weight-700">
                            Queremos simplificar sua vida. <br />
                            Vem com a gente!
                            </p>
                            <Link className="cl-blue border-yellow bt font-18">Solicite sua cotação online <img className="icon" src={ArrowBlue} /></Link>
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
        </div>
    );
}
