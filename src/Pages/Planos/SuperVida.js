import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import Modal from '../../Components/Modal/index';

import './Planos.scss';

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

import ImageSuperAuto from '../../images/planos/super-vida/image-super-auto.svg'
import LogoSuperAuto from  '../../images/planos/super-vida/logo-super-auto.svg'

import ImageLink1 from '../../images/planos/super-vida/box-link1.png'
import ImageLink2 from '../../images/planos/super-vida/box-link2.png'

import ArrowBlue from '../../images/icon/arrow-blue.svg'
import bgNaoGreen from '../../images/nao-pedimos/bg-green.svg'
import bgNaoGreen2 from '../../images/nao-pedimos/bg-green2.svg'
import bgNaoPontos from '../../images/nao-pedimos/bg-pontos.svg'
import bgNaoYellow from '../../images/nao-pedimos/bg-yellow.svg'
import bgImage from '../../images/sobre/image-analise.png'

import icon1 from '../../images/planos/super-vida/icon1.svg'
import icon2 from '../../images/planos/super-vida/icon2.svg'
import icon3 from '../../images/planos/super-vida/icon3.svg'
import icon4 from '../../images/planos/super-vida/icon4.svg'
import icon5 from '../../images/planos/super-vida/icon5.svg'
import icon6 from '../../images/planos/super-vida/icon6.svg'
import icon7 from '../../images/planos/super-vida/icon7.svg'
import icon8 from '../../images/planos/super-vida/icon8.svg'
import icon9 from '../../images/planos/super-vida/icon9.svg'

import ModalImage from '../../images/modal/image-modal.png'

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
                                <span className="cl-blue font-32 f-wheight-700 valor">R$ 23,90<span className="font-16 cl-gray f-wheight-500">/mês</span></span>
                                <Link to="javascript:;" className="bt f-wheight-600  bg-p-blue1 cl-white font-18">Solicitar Cartão <img src={ArrowYellow} /></Link>
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
                                <span className="cl-blue font-32 f-wheight-700 valor">R$ 29,90<span className=" font-16 cl-gray f-wheight-500">/mês</span></span>
                                <Link to="javascript:;" className="bt f-wheight-600  bg-p-blue2 cl-white font-18">Solicitar Cartão <img src={ArrowYellow} /></Link>
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
                                <span className="cl-blue font-32 f-wheight-700 valor">R$ 34,90<span className="font-16 cl-gray f-wheight-500">/mês</span></span>
                                <Link to="javascript:;" className="bt f-wheight-600  bg-p-blue3 cl-white font-18">Solicitar Cartão <img src={ArrowYellow} /></Link>
                            </div>
                        </div>
                        </ScrollAnimation>
                    </div>

                    <img className="points" src={Points} />
                </div>
            </div>
        </div>

        <div id="qualdiade">
            <div className="content">
                <div className="row">
                    <div className="col-12" align="center">
                        <span className="cl-light-blue f-weight-700 font-32">
                        A qualidade de vida que sua família <br />
                        merece não precisa custar caro!
                        </span>
                    </div>
                    <div className="col-12 row cts">
                        <div className="col-6 texts">
                            <div className="box">
                                <span className="cl-white font-18 f-weight-400">E muito mais:</span>
                                <p className="cl-white font-24 f-weight-700">
                                    Orientação médica por telefone <br />
                                    <span className="cl-yellow">24h por dia, 7 dias por semana!</span> 
                                </p>
                            </div>
                            <p className="cl-gray font-18">Você garante <b>preços muito mais baixos </b>em consultas, exames, remédios e ainda conta com assistência odontológica e funeral.</p>
                        </div>
                        <div className="col-6">
                            <img src={ImageQualidade} />
                        </div>
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
                </div>
            </div>

            <div id="line-spa">
                <div className="content">
                    <div className="row">
                        <div className="col-8">
                            <img src={ImageSuperAuto} className="image-super" />
                        </div>
                        <div className="col-4">
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
                        <div className="col-12 row">
                            
                            <div className="col-6 al-center">
                                <div className="box row">
                                    <div className="col-6">
                                        <img src={ImageLink1} />
                                    </div>
                                    <div className="col-6">
                                        <span className="cl-gray font-40">Super <span className="cl-blue f-weight-700"> Casa</span></span>
                                        <p className="cl-gray font-18">Seu lar merece segurança <br /><b> e muitas vantagens!</b></p>
                                        <Link to="form-casa" className="cl-white bg-light-blue font-18 bt">Saiba mais <img src={ArrowYellow} /></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 al-center">
                                <div className="box row">
                                    <div className="col-6">
                                        <img src={ImageLink2} />
                                    </div>
                                    <div className="col-6">
                                        <span className="cl-gray font-40">Super <span className="cl-blue f-weight-700" > Pet</span></span>
                                        <p className="cl-gray font-18">Seu amigo merece os<br /> <b>melhores benefícios!</b></p>
                                        <Link to="form-casa" className="cl-white bg-light-blue font-18 bt">Saiba mais <img src={ArrowYellow} /></Link>
                                    </div>
                                </div>
                            </div>
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
                            <Link onClick={(e) => setModalFtActive(true)}  className="cl-blue border-yellow bt font-18">Solicite sua cotação online <img className="icon" src={ArrowBlue} /></Link>
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
