import React, { useState, useEffect, useHistory } from 'react';
import { Link } from 'react-router-dom';
import { pwr } from '../../Api/pwr'
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
import {api} from "../../Api/app";
import swal from "sweetalert";


export default function Index() {
    const [history, setHistory] = useState(useHistory);
    const [passo1, setPasso1] = useState('');
    const [passo2, setPasso2] = useState('display-none');
    const [passo3, setPasso3] = useState('display-none');

    const [nome, setNome] = useState('');
    const [email , setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [tipo, setTipo] = useState('');
    const [placa, setPlaca] = useState('');
    const [marca, setMarca] = useState('');
    const [anoModelo, setAnoModelo] = useState('');
    const [modelo, setModelo] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [code, setCode] = useState('');



    const dadosPasso1 = useState({})


    async function insertPasso1(){

        let slsmnId = null;
        let slsmnNwId = null;


        let response =  await pwr.post('/qttnStep1',{
            h: 'sp beneficios507',
            slsmnId: slsmnId,
            slsmnNwId: slsmnNwId,
            name: nome,
            email: email,
            phone: telefone
        });

        setCode(response.data.back)

        setPasso(2);

    }

    async function insertPasso2(){
        let response  = await pwr.post('/qttnStep2',{
            code: code,
            h: 'sp beneficios507',
            vhclTyp: tipo,
            vhclModel: modelo,
            //pwrVhclPlts: placa,
            //pwrVhclVrsn:anoModelo,
            //pwrVhclMdl:modelo,
            cty: cidade,
            //pwrStt:estado,
            vhclYear: anoModelo,
        });

        if(response.data){
            swal("Enviado com sucesso!");
            setTimeout(function(){
                window.location.href = '/form-auto';
            },2000)
        }

        //swal("Enviado com sucesso!");
    }

    async function setPasso(passo){
        if(passo === 1 ){
            setPasso1('')
            setPasso2('display-none')
            setPasso3('display-none')
        }else if(passo === 2){
            setPasso1('display-none')
            setPasso2('')
            setPasso3('display-none')
        }else if(passo === 3){
            setPasso1('display-none')
            setPasso2('display-none')
            setPasso3('')
        }
    }

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

                                <div className={'col-12 row form-auto '+passo1}>


                                        <div className="col-12">
                                            <input type="text" id="pwrAssocNm" maxlength="256" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" />
                                        </div>
                                        
                                        <div className="col-12">
                                            <input type="email" id="pwrAssocEml" maxlength="128" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
                                        </div>
                                        
                                        <div className="col-12" align="right">
                                            <input type="text" id="pwrAssocPhn" maxlength="31" value={telefone} onChange={(e) => setTelefone(e.target.value)} placeholder="Telefone" />
                                        </div>
                                        
                                        <div className="ipt-check col-12">
                                            <button id="pwr_step_1_next" onClick={() => insertPasso1()}>Próximo  Passo<img src={ArrowYellow} /></button>
                                        </div>
                                </div>

                                <div className={'col-12 row form-auto '+passo2}>
                                    <div className="col-12">
                                        <select id="pwrVhclTp" onChange={(e) => setTipo(e.target.value)} ></select>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <input type="text" onChange={(e) => setPlaca(e.target.value)} maxLength="7" id="pwrVhclPlts" placeholder="Placa"/>
                                    </div>

                                    <div className="col-lg-6 col-md-12" align="right">
                                        <select onChange={(e) => setPlaca(e.target.value)}  id="pwrVhclBrnd">
                                            <option>Marca</option>
                                        </select>
                                    </div>

                                    <div className="col-lg-6 col-md-12">
                                        <select onChange={(e)=> setAnoModelo(e.target.value)} id="pwrVhclVrsn">
                                            <option>Ano Modelo</option>
                                        </select>
                                    </div>

                                    <div className="col-lg-6 col-md-12" align="right">
                                        <select onChange={(e)=> setModelo(e.target.value)} id="pwrVhclMdl">
                                            <option>Modelo</option>
                                        </select>
                                    </div>

                                    <div className="col-lg-6 col-md-12">
                                        <select id="pwrStt" onClick={(e) => setEstado(e.target.value)} ></select>
                                    </div>

                                    <div className="col-lg-6 col-md-12" align="right">
                                        <select id="pwrCty" onClick={(e) => setCidade(e.target.value)} data-placeholder="Selecione a cidade">
                                            <option>Cidade</option>
                                        </select>
                                    </div>

                                    <div className="ipt-check col-12">
                                        <input type="checkbox" name="" id="pwrWorkVhcl"/> <span>Taxi ou Uber?</span>
                                    </div>

                                    <div className="ipt-check col-12">
                                        <button id="pwr_step_2" onClick={() => insertPasso2()}>Receber cota&ccedil;&atilde;o <img src={ArrowYellow}/>
                                        </button>
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
