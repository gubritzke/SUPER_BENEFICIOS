import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useEffect } from 'react';
import ScrollToTop from '../src/Scroll'

import Layout from "./Components/Layout/Layout";

import Index from './Pages/Index/Index';
import Sobre from './Pages/Sobre/Sobre';
import SobreGarante from './Pages/Sobre/SuperGarante';
import Credenciados from './Pages/Credenciados/Credenciados';
import SuperAuto from './Pages/Planos/SuperAuto'
import SuperSaude from './Pages/Planos/SuperVida'
import SuperOdonto from './Pages/Planos/SuperOdonto'
import Desconto from './Pages/Desconto/Desconto'
import Representante from './Pages/Representante/Representante'
import FormAuto from './Pages/Form/Form-auto'
import FormSaude from './Pages/Form/Form-saude'
import FormCasa from './Pages/Form/Form-casa'
import FormPet from './Pages/Form/Form-pet'
import FormDental from './Pages/Form/Form-dental'
import PoliticaPrivacidade from './Pages/Politicas/PoliticasDePrivacidade'
import PoliticaCookies from './Pages/Politicas/PoliticaDeCookies'
import ComoUsamosDados from './Pages/Politicas/ComoUsamosSeusDados'


export default function Routes(){

    return(
        <BrowserRouter>
            <ScrollToTop>
                <Switch>
                    <Layout>
                        <Route path="/" exact component={Index} />
                        <Route path="/sobre" exact component={Sobre} />
                        <Route path="/super-garante" exact component={SobreGarante} />
                        <Route path="/credenciados" exact component={Credenciados} />
                        <Route path="/super-auto" exact component={SuperAuto} />
                        <Route path="/super-vida" exact component={SuperSaude} />
                        <Route path="/super-odonto" exact component={SuperOdonto} />
                        <Route path="/desconto" exact component={Desconto} />
                        <Route path="/representante" exact component={Representante} />
                        <Route path="/form-auto" exact component={FormAuto} />
                        <Route path="/form-saude" exact component={FormSaude} />
                        <Route path="/form-casa" exact component={FormCasa} />
                        <Route path="/form-pet" exact component={FormPet} />
                        <Route path="/form-dental" exact component={FormDental} />
                        <Route path="/politica-de-privacidade" exact component={PoliticaPrivacidade} />
                        <Route path="/politica-de-cookies" exact component={PoliticaCookies} />
                        <Route path="/como-usamos-seus-dados" exact component={ComoUsamosDados} />
                    </Layout>
                    
                </Switch>
            </ScrollToTop>
        </BrowserRouter>
    );
}
