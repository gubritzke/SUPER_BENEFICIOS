import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import {Helmet} from "react-helmet";

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import './Form.scss';

import ArrowYellow from '../../images/icon/arrow-yellow.svg'

import IconA1 from '../../images/forms/Icona-1.svg'
import IconA2 from '../../images/forms/Icona-2.svg'
import IconA3 from '../../images/forms/Icona-3.svg'
import IconA4 from '../../images/forms/Icona-4.svg'
import IconA5 from '../../images/forms/Icona-5.svg'
import IconA6 from '../../images/forms/Icona-6.svg'
import IconA7 from '../../images/forms/Icona-7.svg'
import IconA8 from '../../images/forms/Icona-8.svg'
import IconA9 from '../../images/forms/Icona-9.svg'
import IconA10 from '../../images/forms/Icona-10.svg'
import IconA11 from '../../images/forms/Icona-11.svg'
import IconA12 from '../../images/forms/Icona-12.svg'
import ImageAuto from '../../images/forms/image-auto.png'
import LogoAuto from '../../images/forms/logo-auto.svg'


export default function Index() {

    return (
        <div id="credenciados">
            <div id="head"></div>
            <div id="formg">
                <div className="content">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 left-form" align="center">
                            <div className="carousel">
                            <Carousel                      
                            arrows
                            infinite
                            centered 
                            >
                                <img src={IconA1} />
                                <img src={IconA2} />
                                <img src={IconA3} />
                                <img src={IconA4} />
                                <img src={IconA5} />
                                <img src={IconA6} />
                                <img src={IconA7} />
                                <img src={IconA8} />
                                <img src={IconA9} />
                                <img src={IconA10} />
                                <img src={IconA11} />
                                <img src={IconA12} />
                            </Carousel>
                            </div>
                            <Link to="super-auto" className="bt border-white font-16 cl-white">Veja mais informações</Link>
                            <img className="image-auto" src={ImageAuto} />
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="box-form row no-gutters form animated fadeIn">
                                <div className="col-12 row no-gutters infos">
                                    <img src={LogoAuto} />
                                    <p font-16> 
                                        Temos vários planos para você ficar protegido e tranquilo.<br />
                                        <b className="cl-light-blue">Não fazemos análise de Perfil.</b>
                                    </p>
                                    <div className="box-bl bg-blue font-16 cl-yellow">
                                        + Receba benefícios Super Saúde com seu Super Auto! Simule e confira!
                                    </div>
                                </div>
                                <div className="col-12 row form-auto">
                                        <div className="col-12">
                                            <select id="pwrVhclTp"></select>
                                        </div>

                                        <div className="col-12">
                                            <input type="text" id="pwrAssocNm" maxlength="256" placeholder="Nome" />
                                        </div>
                                        
                                        <div className="col-lg-6 col-md-12">
                                            <input type="email" id="pwrAssocEml" maxlength="128" placeholder="E-mail" />
                                        </div>
                                        
                                        <div className="col-lg-6 col-md-12" align="right">
                                            <input type="text" id="pwrAssocPhn" maxlength="31" placeholder="Telefone" />
                                        </div>

                                        <div className="col-lg-6 col-md-12">
                                            <input type="text" maxlength="7" id="pwrVhclPlts" placeholder="Placa" />
                                        </div>

                                        <div className="col-lg-6 col-md-12" align="right">
                                            <select id="pwrVhclBrnd"><option>Marca</option></select>
                                        </div>

                                        <div className="col-lg-6 col-md-12">
                                        <select id="pwrVhclVrsn"><option>Ano Modelo</option></select>
                                        </div>
                                        
                                        <div className="col-lg-6 col-md-12" align="right">
                                        <select id="pwrVhclMdl"><option>Modelo</option></select>
                                        </div>
                                        
                                        <div className="col-lg-6 col-md-12" >
                                        <select id="pwrStt"></select>
                                        </div>
                                        
                                        <div className="col-lg-6 col-md-12" align="right">
                                        <select id="pwrCty" data-placeholder="Selecione a cidade"><option>Cidade</option></select>
                                        </div>
                                        
                                        <div className="ipt-check col-12">
                                            <input type="checkbox"  name="" id="pwrWorkVhcl" /> <span>Taxi ou Uber?</span>
                                        </div>
                                        
                                        <div className="ipt-check col-12">
                                            <button id="pwrActnSnd">Receber cota&ccedil;&atilde;o <img src={ArrowYellow} /></button>
                                        </div>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
