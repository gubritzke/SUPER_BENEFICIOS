import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import './Form.scss';

import ArrowYellow from '../../images/icon/arrow-yellow.svg'

import { FiLoader } from 'react-icons/fi';
import swal from 'sweetalert';


import { api } from '../../Api/app'

import IconD1 from '../../images/forms/Icond-1.svg'
import IconD2 from '../../images/forms/Icond-2.svg'
import IconD3 from '../../images/forms/Icond-3.svg'
import IconD4 from '../../images/forms/Icond-4.svg'
import IconD5 from '../../images/forms/Icond-5.svg'
import IconD6 from '../../images/forms/Icond-6.svg'
import IconD7 from '../../images/forms/Icond-7.svg'
import IconD8 from '../../images/forms/Icond-8.svg'
import IconD9 from '../../images/forms/Icond-9.svg'
import IconD10 from '../../images/forms/Icond-10.svg'
import Image from '../../images/forms/image-dental.png'
import Logo from '../../images/forms/logo-odonto.svg'

import ImageMobile from '../../images/forms/form-saude-mobal.png'

import InputMask from 'react-input-mask';
import { BrowserView, MobileView } from 'react-device-detect';


export default function Index() {

    const [stepLoad, setstepLoad] = useState(false)
    const [camposFormulario, setCamposFormularios] = useState({
        nome: '',
        telefone: '',
        email: '',
        mensagem: '',
    })

    async function handleSend(event)
    {

        event.preventDefault()

        var data = camposFormulario

        setstepLoad(true)

             var response =  await api.post('/form-odonto', data)

            if  ( response.data.error == true){
                alert( response.data.message )
            }  else {
                swal("Enviado com sucesso!");
            }

            setTimeout(function(){
                setstepLoad(false)
            })

        

        console.log( response )

    }

    function changeInputMult(e)
    {

        var meusdados = camposFormulario
        meusdados[e.target.name] = e.target.value
        setCamposFormularios({...meusdados})

        console.log( meusdados )

    }


    return (
        <div id="credenciados">
            <div id="head"></div>
            <div id="formg">
                <div className="content">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 left-form" >
                            <span className="txt-odonto font-32 cl-white">
                                <b className="f-weight-600">Cuide bem da sua saúde bucal</b><br /> 
                                por apenas R$ 00,00/mensal<br /></span>
                            <div className="carousel-vida">
                            <Carousel                      
                            arrows
                            infinite
                            centered 
                            >
                                <img src={IconD1} />
                                <img src={IconD2} />
                                <img src={IconD3} />
                                <img src={IconD4} />
                                <img src={IconD5} />
                                <img src={IconD6} />
                                <img src={IconD7} />
                                <img src={IconD8} />
                                <img src={IconD9} />
                                <img src={IconD10} />
                            </Carousel>
                            </div>
                            <BrowserView>
                                <img className="image-dental" src={Image} />
                            </BrowserView>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="box-form row no-gutters form animated fadeIn">
                                <div className="col-12 row no-gutters infos">
                                    <img src={Logo} />
                                    <p font-16> 
                                    A qualidade de vida que sua família merece não precisa custar caro!<br />
                                        <b className="cl-light-blue">Não fazemos análise de Perfil.</b>
                                    </p>
                                </div>
                                <div className="col-12 row no-gutters">
                                    <form className="col-12 row no-gutters" method="post" onSubmit={handleSend}>
                                        <div className="col-12">
                                            <input type="text" required value={camposFormulario.nome} onChange={(e) => changeInputMult(e)} name="nome" placeholder="Nome completo"/>
                                        </div>

                                        <div className="col-12">
                                        <InputMask mask="(99) 99999-9999" required  type="text" value={camposFormulario.telefone} onChange={(e) => changeInputMult(e)} name="telefone" placeholder="Telefone" />
                                        </div>
                                        
                                        <div className="col-12" align="right">
                                            <input type="text" required name="email" value={camposFormulario.email} onChange={(e) => changeInputMult(e)} placeholder="E-mail" />
                                        </div>

                                        <div className="col-12">
                                            <textarea placeholder="Mensagem" required value={camposFormulario.mensagem} onChange={(e) => changeInputMult(e)} name="mensagem">
                                                Mensagem
                                            </textarea>
                                        </div>
                                        
                                        
                                        <div className="ipt-check col-12">
                                            <button type="submit">{stepLoad === true ? <FiLoader /> : "Quero mais informações"} <img src={ArrowYellow} /> </button>
                                        </div>
                                    </form>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
                <MobileView>
                    <div className="row">
                        <div className="col-12">
                                <img className="image-saude-bottom" src={Image} />
                        </div>
                    </div>
                    </MobileView>
            </div>
        </div>
    );
}
