import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

import Modal from '../../Components/Modal/index';

import './Desconto.scss';

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


export default function Index() {

    return (
        <div id="desconto">
            <div id="head"></div>
            <iframe src="https://www.clubeike.com.br/" class="uk-height-viewport" frameborder="0"> </iframe>
        </div>
    );
}
