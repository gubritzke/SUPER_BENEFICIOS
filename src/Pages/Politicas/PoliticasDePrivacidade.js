import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import Modal from '../../Components/Modal/index';

import './Politicas.scss';

import Carousel, { Dots } from '@brainhubeu/react-carousel';

import BgBanner from '../../images/planos/super-odonto/banner-full.png'
import LogoSuper from '../../images/planos/super-odonto/logo-super.svg'

import IconNosso from '../../images/sobre/icon-nosso.svg'
import ArrowYellow from '../../images/icon/arrow-yellow.svg'

import ArrowBlue from '../../images/icon/arrow-blue.svg'
import bgNaoGreen from '../../images/nao-pedimos/bg-green.svg'
import bgNaoGreen2 from '../../images/nao-pedimos/bg-green2.svg'
import bgNaoPontos from '../../images/nao-pedimos/bg-pontos.svg'
import bgNaoYellow from '../../images/nao-pedimos/bg-yellow.svg'
import bgNaoYellowM from '../../images/nao-pedimos/bg-yellowM.svg'
import bgImage from '../../images/sobre/image-analise.png'

import icon1 from '../../images/planos/super-odonto/icon-1.svg'
import icon2 from '../../images/planos/super-odonto/icon-2.svg'
import icon3 from '../../images/planos/super-odonto/icon-3.svg'
import icon4 from '../../images/planos/super-odonto/icon-4.svg'
import icon5 from '../../images/planos/super-odonto/icon-5.svg'
import icon6 from '../../images/planos/super-odonto/icon-6.svg'
import icon7 from '../../images/planos/super-odonto/icon-7.svg'
import icon8 from '../../images/planos/super-odonto/icon-8.svg'
import icon9 from '../../images/planos/super-odonto/icon-9.svg'
import icon10 from '../../images/planos/super-odonto/icon-10.svg'

import ModalImage from '../../images/modal/image-modal.png'
import { BrowserView, MobileView } from 'react-device-detect';
import bgNaoGreenMobile from '../../images/nao-pedimos/bg-mobile1.svg'

export default function Index() {

    const [modalActive, setModalActive] = useState(false);
    const [modalFtActive, setModalFtActive] = useState(false);


    return (
        <>
            <div id="politicas">
                <div id="menu">
                    <div className="content">
                        <div className="line-menu">
                            <Link to="/politica-de-privacidade" className="bt border-white cl-white font-16">Política de privacidade e Cookies</Link>
                            <Link to="/como-usamos-seus-dados" className="bt border-white cl-white font-16">Como usamos seus dados?</Link>
                        </div>
                    </div>
                </div>
                <div className="conteudo">
                    <div className="content">
                        <br /><br />
                        <span className="cl-blue font-32 font-weight-400 titles">Nossa</span>
                        <h2 className="cl-blue font-32 font-weight-800 titles">Política de Privacidade e Cookies</h2>
                        <br /><br />
                        <p className="font-18 cl-gray font-weight-500">

<p>POL&Iacute;TICAS DE PRIVACIDADE</p>
<p>&nbsp;</p>
<p>Esta Pol&iacute;tica de Privacidade tem como objetivo informar voc&ecirc; (doravante &ldquo;Usu&aacute;rio&rdquo;), que acessa a p&aacute;gina da Super Benef&iacute;cios, quais informa&ccedil;&otilde;es s&atilde;o coletadas, como elas s&atilde;o tratadas, bem como as formas de compartilhamento e de exclus&atilde;o desses dados.</p>
<p>&nbsp;</p>
<p>A presente Pol&iacute;tica de Privacidade &eacute; aplic&aacute;vel ao presente site da Super Benef&iacute;cios.</p>
<p>Com a aceita&ccedil;&atilde;o desta Pol&iacute;tica de Privacidade pelo Usu&aacute;rio, este concorda e permite o acesso as suas informa&ccedil;&otilde;es a partir do seu primeiro acesso ao site.</p>
<p>Caso reste alguma d&uacute;vida, ap&oacute;s a leitura desta Pol&iacute;tica de Privacidade, entre em contato conosco, entre em contato.</p>
<p>&nbsp;</p>
<p>1) Quais informa&ccedil;&otilde;es coletamos:</p>
<p>Para os fins desta Pol&iacute;tica de Privacidade, aplicam-se as seguintes defini&ccedil;&otilde;es:</p>
<p>N&oacute;s coletamos todas as informa&ccedil;&otilde;es inseridas pelo Usu&aacute;rio quando de sua utiliza&ccedil;&atilde;o do Site, como, por exemplo, no preenchimento dos formul&aacute;rios que disponibilizamos no Site, bem como na realiza&ccedil;&atilde;o de cadastros ou eventuais coment&aacute;rios. Em s&iacute;ntese, s&atilde;o todas as informa&ccedil;&otilde;es ativamente disponibilizadas pelo Usu&aacute;rio na utiliza&ccedil;&atilde;o do Site.</p>
<p>&nbsp;</p>
<p>N&oacute;s tamb&eacute;m coletamos informa&ccedil;&otilde;es automaticamente quando o Usu&aacute;rio acessa o Site, tais como caracter&iacute;sticas do dispositivo, do navegador, Protocolo de Internet (IP, com data e hora), origem do IP, informa&ccedil;&otilde;es sobre cliques, p&aacute;ginas acessadas, as p&aacute;ginas seguintes acessadas ap&oacute;s a sa&iacute;da do Site, ou qualquer termo de busca digitado no Site ou em refer&ecirc;ncia a esse, dentre outros. Tamb&eacute;m podemos utilizar outras tecnologias, como cookies, pixel tags, beacons e local shared objects, para coletar informa&ccedil;&otilde;es do Usu&aacute;rio e melhorar sua experi&ecirc;ncia de navega&ccedil;&atilde;o.</p>
<p>&nbsp;</p>
<p>&Eacute; facultado ao Usu&aacute;rio bloquear a coleta de alguns tipos de informa&ccedil;&otilde;es, tais como cookies. Caso essa configura&ccedil;&atilde;o seja implementada, no entanto, &eacute; poss&iacute;vel que algumas ferramentas ou tecnologias oferecidas pelo Site n&atilde;o funcionem corretamente.</p>
<p>&nbsp;</p>
<p>Assim, o Usu&aacute;rio desde j&aacute; se encontra ciente acerca das informa&ccedil;&otilde;es coletadas pelo Site e expressa consentimento livre, expresso e informado com rela&ccedil;&atilde;o &agrave; coleta de tais informa&ccedil;&otilde;es.</p>
<p>&nbsp;</p>
<p>2. Como utilizamos as informa&ccedil;&otilde;es coletadas</p>
<p>As informa&ccedil;&otilde;es coletadas por meio do Site ser&atilde;o utilizadas para:</p>
<p>1. O fornecimento de produtos ou servi&ccedil;os solicitados no Site.</p>
<p>2. Facilitar a identifica&ccedil;&atilde;o do perfil e necessidades dos Usu&aacute;rios, a fim de aprimorar a oferta de produtos e/ou servi&ccedil;os.</p>
<p>3. Enviar informativos sobre produtos e/ou servi&ccedil;os de interesse aos usu&aacute;rios.</p>
<p>4. Divulgar altera&ccedil;&otilde;es, inova&ccedil;&otilde;es ou promo&ccedil;&otilde;es sobre os produtos e servi&ccedil;os.</p>
<p>5. Ofertar produtos e servi&ccedil;os da nossa empresa.</p>
<p>&nbsp;</p>
<p>Utilizamos em nosso Site recursos de campanhas de publicidade baseadas em interesses, listas de remarketing, informa&ccedil;&otilde;es demogr&aacute;ficas e de local de destino. As campanhas de publicidade n&atilde;o associam identifica&ccedil;&otilde;es individuais &agrave;s listas de remarketing, cookies, dados de feeds ou outros identificadores an&ocirc;nimos. Da mesma forma, os recursos aplicados em campanhas n&atilde;o s&atilde;o associados a informa&ccedil;&otilde;es coletadas na p&aacute;gina de nosso site e an&uacute;ncios. Ainda, as informa&ccedil;&otilde;es de identifica&ccedil;&atilde;o individual n&atilde;o s&atilde;o compartilhadas com nenhum Site ou parceiro por meio da tag de remarketing ou qualquer feed de dados que possam estar associados aos nossos an&uacute;ncios.</p>
<p>O Usu&aacute;rio d&aacute; o consentimento livre, expresso e informado para que utilizemos as informa&ccedil;&otilde;es coletadas por meio do Site para fins publicit&aacute;rios, dentro do pr&oacute;prio Site e por meio das informa&ccedil;&otilde;es de contato fornecidas pelo Usu&aacute;rio no Site, nos termos descritos nesta Pol&iacute;tica de Privacidade.</p>
<p>Caso n&atilde;o deseje mais receber informativos publicit&aacute;rios, envie um e-mail para n&oacute;s, entre em contato.</p>
<p>&Eacute;, ainda, importante atentar que o Site pode conter links para outras p&aacute;ginas, como redes sociais ou lojas virtuais, entre outras, que possuem Pol&iacute;tica de Privacidade com previs&otilde;es diversas das deste documento. Dessa forma, n&atilde;o se responsabiliza pela coleta, utiliza&ccedil;&atilde;o, compartilhamento e armazenamento de dados dos Usu&aacute;rios pelos respons&aacute;veis por tais p&aacute;ginas.</p>
<p>&nbsp;</p>
<p>3. Com quem compartilhamos as informa&ccedil;&otilde;es coletadas</p>
<p>Poderemos compartilhar os dados em refer&ecirc;ncia com as demais empresas de parceria e com terceiros de forma anonimizada, com o que o Usu&aacute;rio desde logo concorda expressamente, o que poder&aacute; ocorrer especialmente nas seguintes hip&oacute;teses:</p>
<p>1. Caso a viabiliza&ccedil;&atilde;o dos neg&oacute;cios e/ou servi&ccedil;os oferecidos dependa do repasse de dados a parceiros.</p>
<p>2. Para prote&ccedil;&atilde;o dos interesses, em qualquer tipo de conflito, incluindo a&ccedil;&otilde;es judiciais, como, mas n&atilde;o se limitando a, quando exista a necessidade de identificar ou revelar dados de Usu&aacute;rio que esteja utilizando o Site com prop&oacute;sitos il&iacute;citos.</p>
<p>3. No caso de transa&ccedil;&otilde;es e altera&ccedil;&otilde;es societ&aacute;rias nos envolvendo.</p>
<p>4. Mediante ordem judicial ou pelo requerimento de autoridades administrativas que detenham compet&ecirc;ncia legal para sua requisi&ccedil;&atilde;o.</p>
<p>&nbsp;</p>
<p>4. Como armazenamos as informa&ccedil;&otilde;es coletadas</p>
<p>As informa&ccedil;&otilde;es coletadas s&atilde;o tratadas como sigilosas, e qualquer funcion&aacute;rio que entre em contato com elas se comprometer&aacute; a n&atilde;o desvirtuar sua utiliza&ccedil;&atilde;o, bem como em n&atilde;o as usar de modo destoante do previsto nesta Pol&iacute;tica de Privacidade. N&oacute;s empregamos todos os esfor&ccedil;os razo&aacute;veis de mercado para garantir a seguran&ccedil;a de seus sistemas na guarda de referidos dados.</p>
<p>Para que tais medidas se tornem vi&aacute;veis tomamos as seguintes precau&ccedil;&otilde;es:</p>
<p>1. Utilizamos os m&eacute;todos padr&otilde;es e de mercado para anonimizar os dados coletados.</p>
<p>2. Possu&iacute;mos software de prote&ccedil;&atilde;o contra acesso n&atilde;o autorizado aos nossos sistemas.</p>
<p>3. Somente autorizamos o acesso de pessoas previamente estabelecidas aos locais onde armazenamos as informa&ccedil;&otilde;es.</p>
<p>4. Aqueles que entrarem em contato com as informa&ccedil;&otilde;es dever&atilde;o se comprometer a manter sigilo absoluto. A quebra do sigilo acarretar&aacute; responsabilidade civil e o respons&aacute;vel ser&aacute; processado nos moldes da legisla&ccedil;&atilde;o brasileira.</p>
<p>Esta Pol&iacute;tica de Privacidade representa nossos esfor&ccedil;os no sentido de resguardar as informa&ccedil;&otilde;es dos Usu&aacute;rios que acessam nosso Site. No entanto, em raz&atilde;o da pr&oacute;pria natureza da Internet, n&atilde;o &eacute; poss&iacute;vel garantir que terceiros mal intencionados n&atilde;o logrem sucesso em acessar indevidamente as informa&ccedil;&otilde;es armazenadas por n&oacute;s.</p>
<p>&nbsp;</p>
<p>5. Quando exclu&iacute;mos as informa&ccedil;&otilde;es</p>
<p>As informa&ccedil;&otilde;es referidas na presente Pol&iacute;tica de Privacidade ser&atilde;o automaticamente exclu&iacute;das quando deixarem de ser &uacute;teis aos prop&oacute;sitos para os quais foram coletadas.</p>
<p>No entanto, caso o Usu&aacute;rio deseje antecipar essa exclus&atilde;o, poder&aacute; requer&ecirc;-la atrav&eacute;s de e-mail ou telefone. Em tal circunst&acirc;ncia, empreenderemos os melhores esfor&ccedil;os para atender a todos os pedidos no menor espa&ccedil;o de tempo poss&iacute;vel.</p>
<p>Por&eacute;m, o Usu&aacute;rio deve estar ciente de que, mesmo em caso de requisi&ccedil;&atilde;o de exclus&atilde;o, respeitaremos o prazo de armazenamento m&iacute;nimo de informa&ccedil;&otilde;es determinado pela legisla&ccedil;&atilde;o brasileira.</p>
<p>&nbsp;</p>
<p>6. Responsabilidades do usu&aacute;rio</p>
<p>O Usu&aacute;rio declara-se ciente, desde j&aacute;, que &eacute; de sua exclusiva responsabilidade:</p>
<p>1. Inserir apenas informa&ccedil;&otilde;es verdadeiras em nosso site.</p>
<p>2. Zelar pelos dados de sua identifica&ccedil;&atilde;o digital individual sempre que acessar a Internet, informando-os apenas em opera&ccedil;&otilde;es em que exista a prote&ccedil;&atilde;o de dados.</p>
<p>3. Cumprir rigorosamente todas as determina&ccedil;&otilde;es e procedimentos previstos nesta Pol&iacute;tica.</p>
<p>&nbsp;</p>
<p>7. Atualiza&ccedil;&atilde;o desta Pol&iacute;tica de Privacidade</p>
<p>Reservamo-nos o direito de alterar essa Pol&iacute;tica de Privacidade sempre que necess&aacute;rio, com o fito de fornecer maior seguran&ccedil;a e praticidade ao Usu&aacute;rio. Por isso, &eacute; importante que o Usu&aacute;rio leia a Pol&iacute;tica de Privacidade a cada novo acesso ao Site.</p>
<p>&nbsp;</p>
<p>8. Legisla&ccedil;&atilde;o e foro competentes</p>
<p>Esta Pol&iacute;tica de Privacidade ser&aacute; regida, interpretada e executada de acordo com as leis da Rep&uacute;blica Federativa do Brasil, independentemente dos conflitos dessas leis com leis de outros estados ou pa&iacute;ses, sendo competente o Foro do local de resid&ecirc;ncia do Usu&aacute;rio, no Brasil, para dirimir qualquer d&uacute;vida decorrente deste instrumento. O Usu&aacute;rio consente, expressamente, com a compet&ecirc;ncia desse ju&iacute;zo, e renuncia, neste ato, &agrave; compet&ecirc;ncia de qualquer outro foro, por mais privilegiado que seja ou venha a ser.</p>
                            
                        </p>
                        <br /><br />
                        <br /><br />
                    </div>
                </div>
            </div>
        </>
    );
}
