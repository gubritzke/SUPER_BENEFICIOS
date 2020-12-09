import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import './Form.scss';

import ArrowYellow from '../../images/icon/arrow-yellow.svg'

import IconS1 from '../../images/forms/Icons-1.svg'
import IconS2 from '../../images/forms/Icons-2.svg'
import IconS3 from '../../images/forms/Icons-3.svg'
import IconS4 from '../../images/forms/Icons-4.svg'
import IconS5 from '../../images/forms/Icons-5.svg'
import IconS6 from '../../images/forms/Icons-6.svg'
import IconS7 from '../../images/forms/Icons-7.svg'
import IconS8 from '../../images/forms/Icons-8.svg'
import IconS9 from '../../images/forms/Icons-9.svg'
import Image from '../../images/forms/image-casa.png'
import Logo from '../../images/forms/logo-vida.svg'



export default function Index() {

    return (
        <div id="credenciados">
            <div id="head"></div>
            <div id="formg">
                <div className="content">
                    <div className="row">
                        <div className="col-6 left-form" >
                            <div className="text">
                                <div className="breve bg-yellow cl-black font-16 f-weight-700">
                                    <span>Em <br />
                                    breve!</span>
                                </div>
                                <span className="txt font-32 cl-white font-weight-700">
                                    Sua casa mais segura, <br />
                                    bem cuidada e bonita.
                                </span>
                                <p className="cl-white font-24">
                                Receba todos os benefícios que<br />
                                a Super está preparando em primeira mão!
                                </p>
                            </div>
                            <img className="image-casa" src={Image} />
                        </div>
                        <div className="col-6">
                            <div className="box-form row no-gutters form animated fadeIn">
                                <div className="col-12 row no-gutters infos">
                                    <img src={Logo} />
                                    <p font-16> 
                                    A qualidade de vida que sua família merece não precisa custar caro!<br />
                                        <b className="cl-light-blue">Não fazemos análise de Perfil.</b>
                                    </p>
                                </div>
                                <div className="col-12 row no-gutters">
                                    <form className="col-12 row no-gutters">
                                        <div className="col-12">
                                            <input type="text" maxlength="7" name="nome" placeholder="Nome completo"/>
                                        </div>

                                        <div className="col-12">
                                        <input type="text" name="telefone" placeholder="Telefone" />
                                        </div>
                                        
                                        <div className="col-12" align="right">
                                            <input type="text" name="email" placeholder="E-mail" />
                                        </div>

                                        <div className="col-12">
                                            <textarea name="text">
                                                Mensagem
                                            </textarea>
                                        </div>
                                        
                                        
                                        <div className="ipt-check col-12">
                                            <button type="submit">Quero mais informações <img src={ArrowYellow} /></button>
                                        </div>
                                    </form>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
