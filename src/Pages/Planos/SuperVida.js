import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import Modal from '../../Components/Modal/index';

import './Planos.scss';

import Carousel, { Dots } from '@brainhubeu/react-carousel';

import BgBanner from '../../images/planos/super-vida/banner-full.png'
import LogoSuper from '../../images/planos/super-vida/logo-super.svg'

import BulletMais from '../../images/planos/super-vida/icon-plus3.svg'
import BulletMais1 from '../../images/planos/super-vida/icon-plus1.svg'
import BulletMais2 from '../../images/planos/super-vida/icon-plus2.svg'

import PlanoEssencial from '../../images/planos/super-vida/super-essencial.svg'
import PlanoSaude from '../../images/planos/super-vida/super-saude.svg'
import PlanoPremium from '../../images/planos/super-vida/super-premium.svg'

import Points from '../../images/planos/super-vida/points.svg'
import PointsBene from '../../images/planos/super-vida/points-bene.svg'

import IconNosso from '../../images/sobre/icon-nosso.svg'
import ArrowYellow from '../../images/icon/arrow-yellow.svg'

import ImageQualidade from '../../images/planos/super-vida/image-qualidade.png'
import ImageQualidadeMobile from '../../images/planos/super-vida/image-qualidade-mobile.png'

import ImageSuperAuto from '../../images/planos/super-vida/image-super-auto.svg'
import LogoSuperAuto from  '../../images/planos/super-vida/logo-super-auto.svg'

import ImageLink1 from '../../images/planos/super-vida/box-link1.png'
import ImageLink2 from '../../images/planos/super-vida/box-link2.png'

import ArrowBlue from '../../images/icon/arrow-blue.svg'
import bgNaoGreen from '../../images/nao-pedimos/bg-green.svg'
import bgNaoGreen2 from '../../images/nao-pedimos/bg-green2.svg'
import bgNaoPontos from '../../images/nao-pedimos/bg-pontos.svg'
import bgNaoYellow from '../../images/nao-pedimos/bg-yellow.svg'
import bgNaoYellowM from '../../images/nao-pedimos/bg-yellowM.svg'
import bgImage from '../../images/sobre/image-analise.png'

import Heart from '../../images/icon/coracao-garante.svg'

import icon1 from '../../images/planos/super-vida/icon1.svg'
import icon2 from '../../images/planos/super-vida/icon2.svg'
import icon3 from '../../images/planos/super-vida/icon3.svg'
import icon4 from '../../images/planos/super-vida/icon4.svg'
import icon5 from '../../images/planos/super-vida/icon5.svg'
import icon6 from '../../images/planos/super-vida/icon6.svg'
import icon7 from '../../images/planos/super-vida/icon7.svg'
import icon8 from '../../images/planos/super-vida/icon8.svg'
import icon9 from '../../images/planos/super-vida/icon9.svg'

import iconM1 from '../../images/planos/super-vida/iconM1.svg'
import iconM2 from '../../images/planos/super-vida/iconM2.svg'
import iconM3 from '../../images/planos/super-vida/iconM3.svg'
import iconM4 from '../../images/planos/super-vida/iconM4.svg'
import iconM5 from '../../images/planos/super-vida/iconM5.svg'
import iconM6 from '../../images/planos/super-vida/iconM6.svg'
import iconM7 from '../../images/planos/super-vida/iconM7.svg'
import iconM8 from '../../images/planos/super-vida/iconM8.svg'
import iconM9 from '../../images/planos/super-vida/iconM9.svg'

import ModalImage from '../../images/modal/image-modal.png'
import { BrowserView, MobileView } from 'react-device-detect';
import bgNaoGreenMobile from '../../images/nao-pedimos/bg-mobile1.svg'

export default function Index() {

    const [modalActive, setModalActive] = useState(false);
    const [modalFtActive, setModalFtActive] = useState(false);


    return (
        <div id="super-vida">
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

            <div id="banner-novo" className="def-height">
                <div className="content">
                    <div className="row line-full no-gutters">
                        <div className="novidade">
                            <span>Novidade!</span>
                        </div>
                        <div className="col-lg-3 col-md-12 titles-saude">
                            <span className="cl-white f-weight-700 font-35 dp-bl">SUPER</span>
                            <span className="cl-white f-weight-300 font-35 dp-bl">Saúde Start</span>
                        </div>
                        <div className="col-lg-6 col-md-12 texts">
                            <p className="cl-blue font-16">
                                <BrowserView>
                                    <span className="cl-gray"><img src={BulletMais1} />Rede completa com <b>descontos em consultas, exames, vacinas e mais</b></span>
                                    <span className="cl-gray"><img src={BulletMais1} /><b>Vídeoconsulta com médico</b> 24 horas por dia, 7 dias na semana</span>
                                </BrowserView>
                                <MobileView>
                                    <span className="cl-gray"><img src={BulletMais1} />Rede completa com <b>descontos em consultas, exames, vacinas e mais</b></span>
                                    <span className="cl-gray"><img src={BulletMais1} /><b>Vídeoconsulta com médico</b> 24 horas por dia, 7 dias na semana</span>
                                </MobileView>
                            </p>
                        </div>
                        <div className="col-lg-3  col-md-12 valor">
                            <span className="cl-gray font-16 font-p-mobal1 dp-bl">Por apenas</span>
                            <span className="cl-blue font-32 f-weight-700 font-p-mobal dp-bl">R$ 23,90<span className="cl-gray font-16 f-weight-400">/mensais</span></span>
                            <Link to="form-saude" className="bt f-wheight-600 cl-white font-18">Cotação Online <img src={ArrowYellow} /></Link>
                        </div>
                    </div>
                </div>

            </div>

        <div id="planos">
            <div className="content">
                <div className="row">

                    <div className="col-lg-4 col-md-12">
                        <ScrollAnimation animateIn="fadeIn" delay={100} animateOnce >
                        <div className="box bx1">
                            <div className="topo bg-p-blue1">
                                <img src={PlanoEssencial} />
                            </div>
                            <div className="list">
                                <span className="cl-gray"><img src={BulletMais1} />Descontos de até 70% em consultas médicas (clínico e especialidades)</span>
                                <span className="cl-gray"><img src={BulletMais1} />Rede de descontos em diversos estabelecimentos, incluindo farmácias.</span>
                                <span className="cl-gray"><img src={BulletMais1} />Assistência odontológica</span>
                                <span className="cl-gray"><img src={BulletMais1} />Orientação médica por telefone</span>
                                <span className="cl-gray"><img src={BulletMais1} />Assistência funeral</span>
                            </div>
                            <div className="footer">
                                <p className="font-14 cl-gray f-wheight-700">Economia e tranquilidade por apenas</p>
                                <span className="cl-blue font-32 f-wheight-700 valor">R$ 29,90<span className="font-16 cl-gray f-wheight-500">/mês</span></span>
                                <Link to="form-saude" className="bt f-wheight-600  bg-p-blue1 cl-white font-18">Solicitar Cartão <img src={ArrowYellow} /></Link>
                            </div>
                        </div>
                        </ScrollAnimation>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <ScrollAnimation animateIn="fadeIn" delay={500} animateOnce >
                        <div className="box bx2">
                            <div className="topo bg-p-blue2">
                                <img src={PlanoSaude} />
                            </div>
                            <div className="list">
                                <span className="cl-gray"><img src={BulletMais2} />Descontos de até 70% em consultas médicas (clínico e especialidades)</span>
                                <span className="cl-gray"><img src={BulletMais2} />Rede de descontos em diversos estabelecimentos, incluindo farmácias.</span>
                                <span className="cl-gray"><img src={BulletMais2} />Assistência odontológica</span>
                                <span className="cl-gray"><img src={BulletMais2} />Orientação médica por telefone</span>
                                <span className="cl-gray"><img src={BulletMais2} />Assistência funeral</span>
                                <span className="cl-gray"><img src={BulletMais2} />Leva e traz em caso de emergência</span>
                                <span className="cl-gray"><img src={BulletMais2} />Check-up Médico anual</span>
                            </div>
                            <div className="footer">
                                <p className="font-14 cl-gray f-wheight-700">Economia e tranquilidade por apenas</p>
                                <span className="cl-blue font-32 f-wheight-700 valor">R$ 34,90<span className=" font-16 cl-gray f-wheight-500">/mês</span></span>
                                <Link to="form-saude" className="bt f-wheight-600  bg-p-blue2 cl-white font-18">Solicitar Cartão <img src={ArrowYellow} /></Link>
                            </div>
                        </div>
                        </ScrollAnimation>
                    </div>

                    <div className="col-lg-4 col-md-12">
                    <ScrollAnimation animateIn="fadeIn" delay={800} animateOnce >
                        <div className="box last-box bx3">
                            <div className="topo bg-p-blue3">
                                <img src={PlanoPremium} />
                            </div>
                            <div className="list">
                                <span className="cl-gray"><img src={BulletMais} />Descontos de até 70% em consultas médicas (clínico e especialidades)</span>
                                <span className="cl-gray"><img src={BulletMais} />Rede de descontos em diversos estabelecimentos, incluindo farmácias.</span>
                                <span className="cl-gray"><img src={BulletMais} />Assistência odontológica</span>
                                <span className="cl-gray"><img src={BulletMais} />Orientação médica por telefone</span>
                                <span className="cl-gray"><img src={BulletMais} />Assistência funeral</span>
                                <span className="cl-gray"><img src={BulletMais} />Leva e traz em caso de emergência</span>
                                <span className="cl-gray"><img src={BulletMais} />Check-up Médico anual</span>
                                <span className="cl-gray"><img src={BulletMais} />Orientação Nutricional</span>
                                <span className="cl-gray"><img src={BulletMais} />Orientação Fitness</span>
                            </div>
                            <div className="footer">
                                <p className="font-14 cl-gray f-wheight-700">Economia e tranquilidade por apenas</p>
                                <span className="cl-blue font-32 f-wheight-700 valor">R$ 39,90<span className="font-16 cl-gray f-wheight-500">/mês</span></span>
                                <Link to="form-saude" className="bt f-wheight-600  bg-p-blue3 cl-white font-18">Solicitar Cartão <img src={ArrowYellow} /></Link>
                            </div>
                        </div>
                        </ScrollAnimation>
                    </div>
                    <BrowserView>
                        <img className="points" src={Points} />
                    </BrowserView>
                </div>
            </div>
        </div>

        <div id="qualdiade">
            <div className="content">
                <div className="row">
                    <div className="col-12" align="center">
                        <span className="cl-light-blue f-weight-700 font-32 titulo">
                        A qualidade de vida que sua família <br />
                        merece não precisa custar caro!
                        </span>
                    </div>

                    <BrowserView>
                    <div className="col-12 row cts">
                        <div className="col-lg-6 col-md-12 texts">
                            <div className="box">
                                <span className="cl-white font-18 f-weight-400">E muito mais:</span>
                                <p className="cl-white font-24 f-weight-700">
                                    Orientação médica por telefone <br />
                                    <span className="cl-yellow">24h por dia, 7 dias por semana!</span> 
                                </p>
                            </div>
                            <p className="cl-gray font-18">Você garante <b>preços muito mais baixos </b>em consultas, exames, remédios e ainda conta com assistência odontológica e funeral.</p>
                        </div>
                        
                            <div className="col-lg-6 col-md-12">
                                <img src={ImageQualidade} />
                            </div>
                        
                    </div>
                    </BrowserView>

                    <MobileView>
                    <div className="col-12 row cts">
                        
                            <div className="col-lg-6 col-md-12">
                                <img className="mobile-image" src={ImageQualidadeMobile} />
                            </div>
                        
                        <div className="col-lg-6 col-md-12 texts">
                            <div className="box">
                                <span className="cl-white font-18 f-weight-400">E muito mais:</span>
                                <p className="cl-white font-24 f-weight-700">
                                    Orientação médica por telefone <br />
                                    <span className="cl-yellow">24h por dia, 7 dias por semana!</span> 
                                </p>
                            </div>
                            <p className="cl-gray font-18">Você garante <b>preços muito mais baixos </b>em consultas, exames, remédios e ainda conta com assistência odontológica e funeral.</p>
                        </div>
                    </div>
                    </MobileView>

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

                    <BrowserView>
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
                            <img className="obj1" src={PointsBene} />
                            <img className="obj2" src={PointsBene} />

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
                        </div>
                    </BrowserView>
                </div>
                <MobileView>
                        <div className="row line">
                            <Carousel     
                            infinite
                            centered 
                            slidesPerPage={2}
                            >
                                <div className="image">
                                    <img src={iconM1} />
                                    <span>
                                        <b>Descontos de até 70%</b><br />
                                        em consultas médicas<br />
                                        (clínico e especialidades)
                                    </span>
                                </div>
                                <div className="image">
                                    <img src={iconM2} />
                                    <span>
                                        <b>Rede de descontos em</b> <br />
                                        diversos estabelecimentos, <br />
                                        incluindo farmácias.
                                    </span>
                                </div>
                                <div className="image">
                                    <img src={iconM3} />
                                    <span>
                                        <b>Assistência</b><br />
                                        odontológica
                                    </span>
                                </div>
                                <div className="image">
                                    <img src={iconM4} />
                                    <span>
                                        <b>Orientação médica</b><br />
                                        por telefone
                                    </span>
                                </div>
                                <div className="image">
                                    <img src={iconM5} />
                                    <span>
                                        <b>Assistência</b><br />
                                        funeral
                                    </span>
                                </div>
                                <div className="image">
                                    <img src={iconM6} />
                                    <span>
                                        <b>Leva e traz</b><br />
                                        em caso de emergência*
                                    </span>
                                    <p>*Plano Saúde+ </p>
                                </div>
                                <div className="image">
                                    <img src={iconM7} />
                                    <span>
                                        <b>Check-up Médico</b><br />
                                        anual*
                                    </span>
                                    <p>*Plano Saúde+ </p>
                                </div>
                                <div className="image">
                                    <img src={iconM8} />
                                    <span>
                                        <b>Orientação</b><br />
                                        Nutricional*
                                    </span>
                                    <p>*Plano Premium  </p>
                                </div>
                                <div className="image">
                                    <img src={iconM9} />
                                    <span>
                                        <b>Orientação</b><br />
                                        Fitness*
                                    </span>
                                    <p>*Plano Premium  </p>
                                </div>
                            </Carousel>
                        </div>
                    </MobileView>
            </div>

            <div id="line-spa">
                <div className="content">
                    <div className="row">
                        <div className="col-lg-8">
                            <img src={ImageSuperAuto} className="image-super" />
                        </div>
                        <div className="col-lg-4">
                            <div className="cts">
                                <img src={LogoSuperAuto} />
                                <Link to="/super-auto" className=" bt border-blue cl-blue font-16" >
                                    Acesse <b>Super Auto</b>
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div id="links">
                <div className="content">
                    <div className="row">
                        <div className="col-12" align="center">
                            <span className="font-25 cl-black">Temos novidades vindo por aí, <b>para cuidar do que realmente importa.</b></span>
                        </div>
                        <div className="col-12 row no-gutters">
                            
                            <div className="col-lg-6 col-md-12 al-center">
                                <div className="box row">
                                    <div className="col-lg-6 col-md-12">
                                        <img src={ImageLink1} />
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <span className="cl-gray font-40">Super <span className="cl-blue f-weight-700"> Residência</span></span>
                                        <p className="cl-gray font-18">Seu lar merece segurança <br /><b> e muitas vantagens!</b></p>
                                        <Link to="form-casa" className="cl-white bg-light-blue font-18 bt">Saiba mais <img src={ArrowYellow} /></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12 al-center">
                                <div className="box row">
                                    <div className="col-lg-6 col-md-12">
                                        <img src={ImageLink2} />
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <span className="cl-gray font-40">Super <span className="cl-blue f-weight-700" > Pet</span></span>
                                        <p className="cl-gray font-18">Seu amigo merece os<br /> <b>melhores benefícios!</b></p>
                                        <Link to="form-pet" className="cl-white bg-light-blue font-18 bt">Saiba mais <img src={ArrowYellow} /></Link>
                                    </div>
                                </div>
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
