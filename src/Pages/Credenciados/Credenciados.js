import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import Modal from '../../Components/Modal/index';

import './Credenciados.scss';

import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import bgNaoGreenMobile from '../../images/nao-pedimos/bg-mobile1.svg'

import imageMobile from '../../images/credenciados/image-mobile.png'
import image from '../../images/credenciados/image.png'
import BgimageB from '../../images/credenciados/bg.svg'
import logosa from '../../images/credenciados/logo.png'
import iconTel from '../../images/credenciados/icon-tel.svg'
import iconLoc from '../../images/credenciados/icon-loc.svg'

import ArrowBlue from '../../images/icon/arrow-blue.svg'
import bgNaoGreen from '../../images/nao-pedimos/bg-green.svg'
import bgNaoGreen2 from '../../images/nao-pedimos/bg-green2.svg'
import bgNaoPontos from '../../images/nao-pedimos/bg-pontos.svg'
import bgNaoYellow from '../../images/nao-pedimos/bg-yellow.svg'
import bgNaoYellowM from '../../images/nao-pedimos/bg-yellowM.svg'
import bgImage from '../../images/sobre/image-analise.png'

import ModalImage from '../../images/modal/image-modal.png'

import Credenciados from './Credenciados.json'

export default function Index(props) {

    const [modalFtActive, setModalFtActive] = useState(false);
    const [result, setResult] = useState([])
    const [estados, setEstados] = useState([])
    const [filter, setFilter] = useState({
        uf: ""
    })

    useEffect( () => {

        setResult(Credenciados);

        function getEstados(){
            var ufs= [];
            Credenciados.map((item) => {
                if( !ufs.includes(item['UF']) ){
                    ufs.push(item['UF'])     
                }
            });
            setEstados(ufs);
        }
        getEstados();

    }, [props]);

    function handleFilter(e){
        filter.uf = e.target.value;
        setFilter({...filter});

        let result = Credenciados.filter((e) => e['UF'] === filter.uf);
        setResult(result);
    }

    return (
        <div id="credenciados">
            <div id="head"></div>
            <div id="search">
                <div className="content">
                    <BrowserView>
                        <div className="row">
                            <div className="col-6 text">
                                <img src={logosa} />
                                <span className="cl-black font-32 f-weight-700">
                                    Rede de oficinas e <br />
                                    Parceiros Credenciados
                                </span>
                                <p className="cl-black font-16">
                                    Selecione sua localidade e conheça nossa rede de conveniados.
                                </p>
                                <form>
                                    <label>
                                        <select name="uf" value={filter.uf} onChange={(e) => handleFilter(e)}>
                                            <option value="">Todos os estados</option>
                                            {estados.map((uf, index) => (
                                            <option key={index} value={uf}>{uf}</option>
                                            ))}
                                        </select>
                                    </label>
                                </form>
                            </div>
                            <div className="col-6 images">
                                <img className="image" src={image} />
                                <img className="bg" src={BgimageB} />
                            </div>
                        </div>
                    </BrowserView>
                </div>
                <MobileView>
                        <div className="row">
                            <div className="col-12 images" align="center">
                                <img className="logo" src={logosa} />
                                <img className="image-mobile" src={imageMobile} />
                            </div>
                            <div className="col-12 text">
                                <span className="cl-black font-32 f-weight-700">
                                    Rede de oficinas e <br />
                                    Parceiros Credenciados
                                </span>
                                <p className="cl-black font-16">
                                    Selecione sua localidade e conheça<br /> nossa rede de conveniados.
                                </p>
                                <form>
                                    <label>
                                        <select name="uf" value={filter.uf} onChange={(e) => handleFilter(e)}>
                                            <option value="">Todos os estados</option>
                                            {estados.map((uf, index) => (
                                            <option key={index} value={uf}>{uf}</option>
                                            ))}
                                        </select>
                                    </label>
                                </form>
                            </div>
                        </div>
                    </MobileView>
            </div>
            <div id="results">
                <div className="content">
                    <div className="row">
                        <div className="col-12">
                            <p className="font-16 cl-black res">Resultados encontrados:</p>
                        </div>
                    </div>

                    <div className="row boxes">

                        {result.map( (item) => (
                        <div className="col-lg-6 col-md-12">
                            <div className="box">
                                <span className="font-18 cl-black f-weight-700">
                                    {item['Nome Fantasia']}
                                </span>
                                <span className="tel font-16 cl-light-blue"><img src={iconTel} />  {item['Telefone']}</span>
                                <span className="loc font-16 cl-end-gray"><img src={iconLoc} />
                                    {item['Logradouro']}, {item['Número']} – {item['Bairro']} <br />
                                    {item['Cidade']} – {item['UF']}
                                </span>
                            </div>
                        </div>
                        ))}
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
                        <Link to="/form-saude" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Vida</Link>
                        <Link to="/form-casa" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Casa</Link>
                        <Link to="/form-pet" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Pet</Link>
                        <Link to="/form-dental" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Odonto</Link>
                    </div>
                </BrowserView>
                <MobileView>
                    <div className="buttons">
                        <a href="/form-auto" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Auto</a>
                        <a href="/form-saude" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Vida</a>
                        <a href="/form-casa" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Casa</a>
                        <a href="/form-pet" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Pet</a>
                        <a href="/form-dental" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Odonto</a>
                    </div>
                </MobileView>
            </div>
        </Modal>

        </div>
    );
}
