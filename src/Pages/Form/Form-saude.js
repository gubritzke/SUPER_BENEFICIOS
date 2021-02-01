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

import IconS1 from '../../images/forms/Icons-1.svg'
import IconS2 from '../../images/forms/Icons-2.svg'
import IconS3 from '../../images/forms/Icons-3.svg'
import IconS4 from '../../images/forms/Icons-4.svg'
import IconS5 from '../../images/forms/Icons-5.svg'
import IconS6 from '../../images/forms/Icons-6.svg'
import IconS7 from '../../images/forms/Icons-7.svg'
import IconS8 from '../../images/forms/Icons-8.svg'
import IconS9 from '../../images/forms/Icons-9.svg'
import Image from '../../images/forms/image-saude.png'
import Logo from '../../images/forms/logo-vida.svg'

import ImageMobile from '../../images/forms/form-saude-mobal.png'

import InputMask from 'react-input-mask';
import { BrowserView, MobileView } from 'react-device-detect';


export default function Index() {

    const [stepLoad, setstepLoad] = useState(false)
    const [camposFormulario, setCamposFormularios] = useState({
        nome: '',
        telefone: '',
        email: '',
        plano: '',
        mensagem: '',
    })

    async function handleSend(event)
    {

        event.preventDefault()

        var data = camposFormulario

        setstepLoad(true)

             var response =  await api.post('/form-saude', data)

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
                            <div className="carousel-vida">
                            <Carousel                      
                            arrows
                            infinite
                            centered 
                            >
                                <img src={IconS1} />
                                <img src={IconS2} />
                                <img src={IconS3} />
                                <img src={IconS4} />
                                <img src={IconS5} />
                                <img src={IconS6} />
                                <img src={IconS7} />
                                <img src={IconS8} />
                                <img src={IconS9} />
                            </Carousel>
                            </div>
                            <Link to="super-vida" className="bt border-white font-16 cl-white inf-saude">Veja mais informações</Link>
                            <BrowserView>
                                <img className="image-saude" src={Image} />
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
                                    <form className="col-12 row " onSubmit={handleSend} method="post">
                                        <div className="col-12">
                                            <select name="plano" required onChange={(e) => changeInputMult(e)} >
                                                <option value="">Plano</option>
                                                <option value="Super Essencial | 23,90/mensais">Super Essencial | 23,90/mensais</option>
                                                <option value="Super Saude+ | 29,90/mensais">Super Saude+ | 29,90/mensais</option>
                                                <option value="Super Premium | 34,90/mensais">Super Premium | 34,90/mensais</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <input type="text" required value={camposFormulario.nome} onChange={(e) => changeInputMult(e)}  name="nome" placeholder="Nome completo"/>
                                        </div>

                                        <div className="col-lg-6 col-md-12">
                                            <InputMask mask="(99) 99999-9999" required  type="text" value={camposFormulario.telefone} onChange={(e) => changeInputMult(e)} name="telefone" placeholder="Telefone" />
                                        </div>
                                        
                                        <div className="col-lg-6 col-md-12" align="right">
                                            <input type="text" required value={camposFormulario.email} onChange={(e) => changeInputMult(e)}  name="email" placeholder="E-mail" />
                                        </div>

                                        <div className="col-12">
                                            <textarea value={camposFormulario.mensagem} required onChange={(e) => changeInputMult(e)}  name="mensagem" placeholder="Mensagem">
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
                                <img className="image-saude-bottom" src={ImageMobile} />
                        </div>
                    </div>
                    </MobileView>
            </div>
        </div>
    );
}
