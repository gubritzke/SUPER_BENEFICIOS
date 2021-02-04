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
                            <Link to="/politica-de-privacidade" className="bt border-white cl-white font-16">Política de privacidade</Link>
                            <Link to="/como-usamos-seus-dados" className="bt border-white cl-white font-16">Como usamos seus dados?</Link>
                        </div>
                    </div>
                </div>
                <div className="conteudo">
                    <div className="content">
                        <br /><br />
                        <span className="cl-blue font-32 font-weight-400 titles">Nossa</span>
                        <h2 className="cl-blue font-32 font-weight-800 titles" >Política de Cookies</h2>
                        <br /><br />
                        <p className="font-18 cl-gray font-weight-500">

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris gravida placerat nisl sit amet rhoncus. Ut semper arcu mollis felis luctus vehicula ac egestas lacus. Suspendisse potenti. Morbi dictum vel lacus et sollicitudin. Praesent posuere sodales justo, in condimentum nunc tincidunt ut. Sed enim dui, sodales id maximus eu, sagittis vel magna. Aliquam fermentum risus et diam consequat, vel ullamcorper odio sagittis. Morbi semper tristique purus, eget iaculis risus faucibus et.
                            <br /><br />
                            Sed dictum sit amet metus a convallis. Nulla ullamcorper porta leo, sit amet euismod orci tincidunt at. Nam ut sagittis urna. Suspendisse quam quam, pretium id diam ac, luctus tincidunt ipsum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris felis sapien, ornare vel sapien at, imperdiet fringilla lectus. Phasellus ac ullamcorper ex. Maecenas cursus velit faucibus, dictum ligula nec, finibus elit. In nec vulputate felis.
                            <br /><br />
                            Fusce sollicitudin iaculis nulla sed facilisis. Pellentesque vehicula rhoncus vestibulum. Donec elementum neque sed odio ornare, a varius ex rutrum. Nunc molestie pharetra lobortis. Vestibulum ut suscipit enim, eget eleifend mi. Vivamus eu ornare erat. Ut vel rhoncus neque. Sed eget luctus lectus, et faucibus risus. Proin sit amet accumsan ipsum. Nunc aliquam orci sem, sit amet iaculis sapien aliquet eu. Integer convallis, nisl ac vehicula maximus, neque arcu congue arcu, at pharetra mauris dui in leo. Fusce nec tristique leo. Duis viverra bibendum sagittis. Duis nec mi volutpat, mollis lectus sit amet, pellentesque urna.
                            <br /><br />
                            Etiam lobortis vitae arcu quis interdum. Sed vehicula mauris at nunc tincidunt ultricies. Nullam maximus varius nulla, malesuada fermentum augue laoreet rhoncus. Sed rhoncus ac lectus eu volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ornare velit ut augue consectetur suscipit. Etiam ac pharetra ligula. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam volutpat iaculis erat, in tristique diam ultrices at. Aenean augue orci, aliquam quis odio vel, dapibus condimentum sem. Aliquam eu malesuada lacus. Donec imperdiet ligula vitae lacinia lobortis. Donec blandit erat non nisl viverra consequat. Cras at tincidunt ligula, facilisis dapibus ante.
                            <br /><br />
                            Nam imperdiet tempus tincidunt. Proin volutpat elit nec tortor cursus mollis. Donec non massa massa. Vestibulum fringilla ac erat sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in urna vel eros tincidunt gravida. Nullam iaculis, tellus sit amet dictum tempus, erat augue varius metus, nec aliquam orci eros eget ante. Aliquam sed euismod nulla. Duis a ultrices ipsum. Maecenas accumsan, risus in aliquam hendrerit, nisl velit aliquet orci, sed commodo massa metus quis neque. Quisque consectetur urna vel convallis mattis.
                            
                        </p>
                        <br /><br />
                        <br /><br />
                    </div>
                </div>
            </div>
        </>
    );
}
