import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import './Form.scss';

import swal from 'sweetalert';
import { FiLoader } from 'react-icons/fi';
import { api } from '../../Api/app'

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
import Image from '../../images/forms/image-pet.png'
import Logo from '../../images/forms/logo-vida.svg'

import ImagePetMobile from '../../images/forms/image-pet-mobile.png'

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

             var response =  await api.post('/form-pet', data)

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
                            <div className="text">
                                <div className="breve-pet bg-yellow cl-black font-16 f-weight-700">
                                    <span>Em <br />
                                    breve!</span>
                                </div>
                                <BrowserView>
                                    <span className="txt font-32 cl-white font-weight-700">
                                        Todos os <br />
                                        membros da <br />
                                        família merece<br />
                                        o melhor!<br />
                                        <b>Os de 4 patas <br />
                                        também!</b>
                                    </span>
                                </BrowserView>
                                <MobileView>
                                    <span className="txt font-32 cl-white font-weight-700">
                                        Todos os
                                        membros da<br />
                                        família merece
                                        o melhor!<br />
                                        <b>Os de 4 patas
                                        também!</b>
                                    </span>
                                </MobileView>
                            </div>
                            <MobileView>
                                <img className="image-pet-mobile" src={ImagePetMobile} />
                            </MobileView>
                            <BrowserView>
                                <img className="image-pet" src={Image} />
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
                                            <input type="text" value={camposFormulario.nome} onChange={(e) => changeInputMult(e)} name="nome" placeholder="Nome completo"/>
                                        </div>

                                        <div className="col-12">
                                        <InputMask mask="(99) 99999-9999"  type="text" value={camposFormulario.telefone} onChange={(e) => changeInputMult(e)} name="telefone" placeholder="Telefone" />
                                        </div>
                                        
                                        <div className="col-12" align="right">
                                            <input type="text" name="email" value={camposFormulario.email} onChange={(e) => changeInputMult(e)} placeholder="E-mail" />
                                        </div>

                                        <div className="col-12">
                                            <textarea placeholder="Mensagem" value={camposFormulario.mensagem} onChange={(e) => changeInputMult(e)} name="mensagem">
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
            </div>
        </div>
    );
}
