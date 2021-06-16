import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Modal from '../../Components/Modal/index';

import Scrollchor from 'react-scrollchor';

import Carousel, { Dots } from '@brainhubeu/react-carousel';

import InputMask from 'react-input-mask';

import './Representante.scss';

import BgBanner from '../../images/representantes/banner.svg'
import ImageBanner1 from '../../images/representantes/image-banner-1.png'
import ImageBanner2 from '../../images/representantes/image-banner-2.svg'

import ImageNotice1 from '../../images/representantes/nt-1.png'
import ImageNotice2 from '../../images/representantes/nt-2.png'
import ImageNotice3 from '../../images/representantes/nt-3.png'

import ArrowYellow from '../../images/icon/arrow-yellow.svg'

import Icon1 from '../../images/representantes/icon-1.png'
import Icon2 from '../../images/representantes/icon-2.png'
import Icon3 from '../../images/representantes/icon-3.png'
import Icon4 from '../../images/representantes/icon-4.png'
import Icon5 from '../../images/representantes/icon-5.png'
import Icon6 from '../../images/representantes/icon-6.png'

import swal from 'sweetalert';
import { api } from '../../Api/app'


import ArrowDown from '../../images/representantes/arrow-down.svg'
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

             var response =  await api.post('/form-consultor', data)

            if  ( response.data.error == true){
                alert( response.data.message )
            }  else {
                swal("A Super Benefícios agradece o interesse. Por favor, envie seu currículo para o e-mail: rh@superbeneficios.com.");
            }

            setTimeout(function(){
                setstepLoad(false)
            })

    }

    function changeInputMult(e)
    {

        var meusdados = camposFormulario
        meusdados[e.target.name] = e.target.value
        setCamposFormularios({...meusdados})

        console.log( meusdados )

    }

    return (
        <div id="Representante">
            <div id="banner">
                <img src={BgBanner} className="animated fadeInDown" />
                <div className="content">
                    <div className="row conteudos">
                        <div className="col-lg-6 col-md-12 image animated fadeIn">
                            <img src={ImageBanner1} />
                        </div>
                        
                        <div className="col-lg-6 col-md-12 ">
                            <div className="texts">
                                <span className="cl-light-blue font-48 f-weight-700">
                                    Torne-se um <br />
                                    Super Consultor!
                                </span>
                                <p className="cl-gray font-24 f-weight-700">É a oportunidade de gerar um faturamento expressivo vendendo um serviço essencial em nosso país!</p>
                                <p className="cl-gray font-16">A Super disponibiliza planos para quem possui vans, motos convencionais e de baixa cilindrada, carros com sinistro, utilitários e muito mais.</p>
                                <img src={ImageBanner2} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="notice">
                <div className="content">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="box">
                                <img src={ImageNotice1} />
                                <div className="texts">
                                    <span className="cl-light-blue f-weight-700 font-32">Renda Extra</span>
                                    <p className="cl-gray font-16">A oportunidade de gerar um <b>faturamento expressivo</b> oferecendo um <b>serviço de qualidade.</b></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="box">
                                <img src={ImageNotice2} />
                                <div className="texts">
                                    <span className="cl-light-blue f-weight-700 font-32">Liberdade Financeira</span>
                                    <p className="cl-gray font-16">Está difícil para pagar as contas? <br /><b>A sua tão sonhada liberdade financeira começa aqui!</b> Entre em contato.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="box">
                                <img src={ImageNotice3} />
                                <div className="texts">
                                    <span className="cl-light-blue f-weight-700 font-32">Negócio Próprio</span>
                                    <p className="cl-gray font-16">Aumentar a sua renda é possível, conheça os benefícios de se tornar um representante Super.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div id="video">
                <div className="content">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="video-box">
                                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/z-Brwo4js0I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 texts">
                            <span className="cl-balck font-32 f-weight-700">Quer ter um Super Faturamento extra?</span>
                            <p className="cl-black font-18">É a sua <span className="cl-light-blue">Liberdade Financeira</span> a partir de um serviço que atinge cerca de <b>75% da frota nacional automotiva.</b></p>
                            <Scrollchor to="#contatoa" className="cl-blue border-blue font-16 bt">Seja um representante <img src={ArrowDown} /></Scrollchor>
                        </div>
                    </div>
                </div>
            </div>

            <div id="icons">
                <BrowserView>
                    <div className="content">
                        <div className="row">
                            <div className="col-4">
                                <div className="box">
                                    <img src={Icon1} />
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="box">
                                    <img src={Icon2} />
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="box">
                                    <img src={Icon3} />
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="box">
                                    <img src={Icon4} />
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="box">
                                    <img src={Icon5} />
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="box">
                                    <img src={Icon6} />
                                </div>
                            </div>
                        </div>
                    </div>
                </BrowserView>
                <MobileView>
                    <Carousel     
                    infinite
                    centered 
                    slidesPerPage={2}
                    >
                        <div className="box">
                            <img src={Icon1} />
                        </div>

                        <div className="box">
                            <img src={Icon2} />
                        </div>

                        <div className="box">
                            <img src={Icon3} />
                        </div>

                        <div className="box">
                            <img src={Icon4} />
                        </div>

                        <div className="box">
                            <img src={Icon5} />
                        </div>

                        <div className="box">
                            <img src={Icon6} />
                                </div>
                    </Carousel>
                </MobileView>
            </div>

            <div id="contatoa"></div>
            <div id="contato">
                <div className="content">
                    <div className="row">
                        <div className="box col-12 bg-light-blue row no-gutters">
                            <div className="col-lg-5 col-md-12 texts">
                                <span className="font-32 cl-white f-weight-700">Cadastre agora mesmo e <br />seja um <span className="cl-yellow">Super Consultor!</span></span>
                                <BrowserView>
                                <p className="font-16 cl-white">Nunca foi tão fácil ter seu próprio negócio.Faça agora <br />mesmo o seu cadastro e aumente as suas chances de <br />faturamento. Seja Super!</p>
                               </BrowserView>
                               <MobileView>
                                <p className="font-16 cl-white">Nunca foi tão fácil ter seu próprio negócio.Faça agora mesmo o seu cadastro e aumente as suas chances de faturamento. Seja Super!</p>
                               </MobileView>
                            </div>
                            <div className="col-lg-7 col-md-12">
                                <form method="post" className="row" onSubmit={handleSend}>
                                    <label className="col-12">
                                        <input required value={camposFormulario.nome} onChange={(e) => changeInputMult(e)} name="nome" placeholder="Nome Completo" />
                                    </label>
                                    <label className="col-6">
                                        <input required value={camposFormulario.email} onChange={(e) => changeInputMult(e)} name="email" placeholder="Email" />
                                    </label>
                                    <label  className="col-6">
                                        <InputMask mask="(99) 99999-9999" required  type="text" value={camposFormulario.telefone} onChange={(e) => changeInputMult(e)} name="telefone" placeholder="Telefone" />
                                    </label>
                                    <label className="col-12">
                                        <textarea required value={camposFormulario.mensagem} onChange={(e) => changeInputMult(e)} name="mensagem" placeholder="Mensagem"></textarea>
                                    </label>
                                    
                                    <label className="col-12" align="right">
                                        <button type="submit" className="bt cl-white">Cadastrar <img src={ArrowYellow} /></button>
                                    </label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
