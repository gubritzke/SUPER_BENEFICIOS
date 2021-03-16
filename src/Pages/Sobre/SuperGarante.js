import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import Modal from '../../Components/Modal/index';

import FaqCp from "react-faq-component";

import ArrowOpen from '../../images/sobre/Seta_aberta.svg';
import ArrowClose from '../../images/sobre/Seta_fechada.svg';

import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import bgNaoGreenMobile from '../../images/nao-pedimos/bg-mobile1.svg'

import './Sobre.scss';

import BgBanner from '../../images/sobre/banner-garante-full.png'
import Map from '../../images/sobre/map.svg'

import IconGarante from '../../images/sobre/icon-garante.png'

import IconNosso from '../../images/sobre/icon-nosso.svg'

import ArrowBlue from '../../images/icon/arrow-blue.svg'
import bgNaoGreen from '../../images/nao-pedimos/bg-green.svg'
import bgNaoGreen2 from '../../images/nao-pedimos/bg-green2.svg'
import bgNaoPontos from '../../images/nao-pedimos/bg-pontos.svg'
import bgNaoYellow from '../../images/nao-pedimos/bg-yellow.svg'
import bgNaoYellowM from '../../images/nao-pedimos/bg-yellowM.svg'
import bgImage from '../../images/sobre/image-analise.png'

import ModalImage from '../../images/modal/image-modal.png'

import Heart from '../../images/icon/coracao-garante.svg'

export default function Index() {

    const [modalFtActive, setModalFtActive] = useState(false);

    const [faq, setFaqList] = useState([]);
    
    const data = {
        rows: [
            {
                title: "O QUE É O FGRS?",
                content: "O Fundo Garantidor contra Riscos Sistêmicos (FGRS) é uma associação civil sem fins lucrativos, com personalidade jurídica de direito privado, instituída e mantida pela Agência de Autorregulamentação das Entidades de Autogestão de Planos de Proteção contra Riscos Patrimoniais (AAAPV).",
            },
            {
                title: "QUAL A FINALIDADE DO FGRS?",
                content: "Proteger, no caso de insolvência de uma Entidade de Autogestão de Planos de Proteção contra Riscos Patrimoniais (EAPP) filiada, os associados e/ou cooperados que utilizam o sistema proteção mútua para cobertura de seu patrimônio. Na prática, caso uma EAPP filiada entre em estado de insolvência, o FGRS atuará cobrindo os eventos de perda parcial, total ou roubo/furto que estejam abertos e ainda não indenizados, sempre agindo de acordo com os limites de garantia ordinária previstos no Regulamento Interno.",
            },
            {
                title: "QUAIS OS BENEFÍCIOS QUE O FGRS TRAZ AO MERCADO?",
                content: "Segurança para todos os envolvidos no sistema de Proteção Mútua do Brasil. Com o advento do fundo, os associados e/ou cooperados das EAPPs filiadas possuem uma garantia necessária, porém inédita nesse segmento, o que trás mais credibilidade e melhora a percepção do mercado com relação às Mútuas.",
            },
            {
                title: "QUAL O VALOR DAS CONTRIBUIÇÕES FEITAS AO FGRS?",
                content: "O fator de contribuição é de 0,00525% sobre o valor de tabela FIPE do veículo. Exemplificando: um automóvel avaliado em R$ 30.000,00 (trinta mil reais) terá a contribuição estipulada em R$ 1,57 (um real e cinquenta e sete centavos).",
            },
            {
                title: "ENQUANTO NÃO HOUVER UTILIZAÇÃO DO FGRS, O QUE SERÁ FEITO COM OS RECURSOS EM CAIXA?",
                content: "Os valores disponíveis em caixa serão rentabilizados através de um fundo de investimentos do qual o FGRS é o titular de todas as quotas. A política de investimentos adotada está prevista no Estatuto Social do FGRS e deverá ser seguida à risca.",
            },
            {
                title: "QUAL A LIGAÇÃO DO FGRS COM A AAAPV?",
                content: "Embora sejam duas instituições distintas, a AAAPV é a criadora e mantenedora do FGRS, por esse motivo, somente serão aceitos no FGRS EAPPs que sejam filiadas à AAAPV.",
            },
            {
                title: "O FGRS ATUARÁ SOMENTE EM CASOS DE INSOLVÊNCIA?",
                content: "Na cobertura das garantias ordinárias, sim. O FGRS também realizará o monitoramento das EAPPs filiadas com o intuito de acompanhar a saúde financeira e propor medidas a serem adotadas com o intuito de reduzir os riscos de insolvência.",
            },
            {
                title: "QUEM DECLARA A INSOLVÊNCIA DE UM EAPP FILIADA?",
                content: "A própria EAPP filiada. Obviamente, o FGRS terá à sua disposição ferramentas que possibilitem saber que determinada EAPP está indo para um caminho de risco, mas a função do fundo, nesse caso, será de advertir a EAPP para que a insolvência seja evitada.",
            },
            {
                title: "QUAIS MECANISMOS DE DEFESA CONTRA FRAUDES O FGRS TEM A SUA DISPOSÇÃO?",
                content: "Como já citado anteriormente o FGRS terá, à sua disposição, ferramentas que possibilitarão o acompanhamento da saúde da operação das EAPPs filiadas, tendo acesso aos dados necessários para realizar o Cálculo de Probabilidade de Ruína. Além disso, haverá um corpo técnico com profissionais capacitados para analisar e auditar esses dados e, dessa forma, prevenir fraudes. O FGRS também pode, de acordo com seu Regulamento Interno, instalar auditoria a qualquer tempo para apurar as operações da EAPP filiada no que diz respeito à sua saúde financeira e risco de insolvência. O FGRS, detectando uma conduta que coloque em risco a operação da EAPP filiada poderá, com base em critérios técnicos, advertir a mesma e indicar uma mudança de postura. Caso a EAPP não adote as recomendações do FGRS e continue agindo de maneira a colocar em risco sua operação, o FGRS poderá, seguindo as normas estatutárias e regimentais, proceder com a exclusão da EAPP, cabendo recurso e direito ao contraditório a ser exercido pela mesma.",
            },
            {
                title: "O FGRS TEM PODER DE INTERVENÇÃO, COMO POR EXEMPLO O DE DECRETAR DIREÇÃO FISCAL NUMA EAPP FILIADA?",
                content: "Não. O FGRS pode auditar, advertir, instruir e até mesmo excluir, mas nunca interferir de forma ativa na gestão de uma EAPP filiada, a não ser que a EAPP em questão procure o FGRS para declarar sua insolvência e acionar o mesmo para que os seus associados e/ou cooperados com eventos abertos possam receber as garantias ordinárias, respeitando os limites para cada tipo de evento e veículo estipulados no Regulamento Interno.",
            },
            {
                title: "APÓS DETERMINADO TEMPO CONTRIBUINDO, AS EAPP FILIADAS PODERÃO EFETUAR RESGATES DOS VALORES DEPOSITADOS NO FGRS?",
                content: "Não. O FGRS é constituído para amparar os associados e/ou cooperados no caso de insolvência. As contribuições são feitas nesse sentido e o objetivo não é se tornar um investimento. O FGRS é similar às próprias mútuas filiadas nesse aspecto: quando um associado e/ou cooperado deseja se desligar ou passa algum tempo sem utilizar os benefícios da proteção mútua, o mesmo não possui o direito de solicitar o recebimento dos valores já pagos, pois durante o período em que ele contribuiu, ele estava amparado. A situação é a mesma.",
            },
            {
                title: "AS MÚTUAS VÃO CONTRIBUIR ETERNAMENTE PAR AO FGRS?",
                content: "Não. De acordo com o Regulamento, quando o fundo atingir 2% da FIPE EXPOSTA, as contribuições serão interrompidas e assim permanecerão enquanto o nível se mantiver em 2% da FIPE exposta.",
            },
            {
                title: "PODERÁ HAVER UM OUTRO DESTINO PARA O FUNDO NO FUTURO?",
                content: "Sim. A intenção dos fundadores - e isso ficou consignado na ata de fundação - é que, num futuro a médio prazo, quando o FGRS estiver suficientemente robusto ele se transforme em uma resseguradora. Então, cada participante será acionista dessa futura sociedade anônima, proporcionalmente ao seu quinhão de contribuições vertidas para o FGRS.",
            }
        ],
    };
     
    const styles = {
        // bgColor: 'white',
        titleTextColor: "blue",
        rowTitleColor: "blue",
        // rowContentColor: 'grey',
        // arrowColor: "red",
    };

    const config = {
        // animate: true,
         arrowIcon: <img src={ArrowOpen} />,
        // tabFocus: true
    };


    return (
        <div id="garante">
            <div id="banner">
                <img src={BgBanner} className="animated fadeInDown" />
                <div className="content">
                    <div className="row conteudos">
                        <div className="col-12 title">
                            <img src={IconGarante} /> <span className="cl-blue font-32"><b>Entenda como a Super garante seus benefícios:</b></span>
                        </div>
                        <div className="col-12">
                            <p className="font-16 cl-gray">
                                <b>A SUPER BENEFÍCIOS faz parte da AAAPV, e isso traz segurança pra você e credibilidade e solidez para que possamos oferecer os mais diversos benefícios e trazer mais qualidade de vida aos associados.</b>
                                <br /><br />
                                <b>O Fundo Garantidor contra Riscos Sistêmicos</b> (FGRS) é uma iniciativa da AAAPV (Agência de Autorregulamentação das Entidades de Autogestão de Planos de Proteção Contra Riscos Patrimoniais) para consolidar ainda mais a atuação das mútuas no segmento de proteção patrimonial em nosso país. Com a missão de amparar o associado/cooperado no caso de insolvência de alguma mútua filiada. 
                                <br /><br />
                                A <b>Super Benefícios,</b> como filiada é acompanhada e auditada com frequência pela AAAPV. Seguimos regras de compliance e de gestão estabelecidas por ela e pelo FGRS e assim mantemos nosso selo. Com monitoramento frequente e participamos de orientações para detectar riscos de insolvência. Todavia, caso ocorra, o FGRS cobrirá, dentro dos limites estabelecidos no regulamento do fundo, os eventos que estiverem abertos, sejam eles de perda parcial, total ou roubo/furto.
                            </p>
                        </div>

                        <div className="col-12" align="center">
                            <a href="https://fgrs.com.br" target="_blank" className="cl-blue bt border-blue font-16"><b>Acesse o site da AAAPV</b></a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="video">
                <div className="content">
                    <div className="row">
                        <div className="col-12">
                            <iframe width="1865" height="770" src="https://www.youtube.com/embed/DPRkXrSNsM0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div id="faq-list">
                
                <div className="content">
                    <div className="row">
                        <div className="col-12" align="center">
                            <p className="cl-blue font-32 title"><b>Perguntas frequentes</b></p>
                        </div>
                    </div>


                    <FaqCp data={data} styles={styles} config={config} />


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
                        <Link to="/form-saude" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Saúde</Link>
                        <Link to="/form-casa" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Residência</Link>
                        <Link to="/form-pet" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Pet</Link>
                        <Link to="/form-dental" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Odonto</Link>
                    </div>
                </BrowserView>
                <MobileView>
                    <div className="buttons">
                        <a href="/form-auto" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Auto</a>
                        <a href="/form-saude" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Saúde</a>
                        <a href="/form-casa" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Residência</a>
                        <a href="/form-pet" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Pet</a>
                        <a href="/form-dental" onClick={(e) => setModalFtActive(false)} className="font-16 cl-white border-white bt">Super Odonto</a>
                    </div>
                </MobileView>
            </div>

            <div id="line-garante">
                <div className="content">
                    <div className="row">
                        <div className="col-12">
                            <div className="box-2">
                                <img src={Heart} />
                                <span className="cl-blue font-28 f-weight-700">Entenda como a Super<br /> garante seus benefícios</span>
                                <Link to="/super-garante" className="cl-blue border-blue bt">Saiba mais</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
        </div>
    );
}
