import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import Modal from '../../Components/Modal/index';

import './Credenciados.scss';

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
import bgImage from '../../images/sobre/image-analise.png'

import Credenciados from './Credenciados.json'

export default function Index(props) {

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
                </div>
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
                        <div className="col-6">
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
