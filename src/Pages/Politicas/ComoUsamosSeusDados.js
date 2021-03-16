import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import Modal from '../../Components/Modal/index';

import './Politicas.scss';

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
        <>
            <div id="politicas">
                <div id="menu">
                    <div className="content">
                        <div className="line-menu">
                            <Link to="/politica-de-privacidade" className="bt border-white cl-white font-16">Política de privacidade e Cookies</Link>
                            <Link to="/como-usamos-seus-dados" className="bt border-white cl-white font-16">Como usamos seus dados?</Link>
                        </div>
                    </div>
                </div>
                <div className="conteudo">
                    <div className="content">
                        <br /><br />
                        <span className="cl-blue font-32 font-weight-400 titles">Como</span>
                        <h2 className="cl-blue font-32 font-weight-800 titles">usamos seus dados?</h2>
                        <br />
                        <p className="font-18 cl-gray font-weight-500">
                            A segurança de suas informações e privacidade são muito importantes para o Super Benefícios. Saiba como utilizamos seus dados.                            
                        </p>
                        <br />
                        <span className="font-18 cl-light-blue font-weight-800">Nome</span>
                        <p className="font-18 cl-gray font-weight-500">Seu nome é utilizado para identificação e validação do cadastro em nossa plataforma.</p>
                        <br />
                        <span className="font-18 cl-light-blue font-weight-800">Telefone</span>
                        <p className="font-18 cl-gray font-weight-500">Seu telefone é utilizado para que possamos enviar comunicações sobre os produtos e serviços disponibilizados.</p>
                        <br />
                        <span className="font-18 cl-light-blue font-weight-800">E-mail</span>
                        <p className="font-18 cl-gray font-weight-500">Utilizamos seu e-mail para o envio de comunicações relativas ao andamento da sua cotação e também para ofertas de produtos.</p>
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </>
    );
}
