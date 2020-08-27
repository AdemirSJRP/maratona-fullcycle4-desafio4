import React from 'react';

import logoTop from './assets/logo-top.png';
import LogoFullCycle from './assets/logo-fullcycle.png';
import LogoLinkedIn from './assets/logo_linkedin.png';
import logoGithub from './assets/logo_github.png';
import logoTwitter from './assets/logo_twitter.png';

import './App.css';
import './styles';
import {
  AppContainer,
  Header,
  Content,
  TextHeader,
  Footer,
  FooterText01,
  FooterImagesContainer,
  ImageFooter,
} from './styles';
import Routes from './routes';

function App() {
  return (
    <AppContainer>
      <Header>
        <img src={logoTop} alt="logo" />
        <img src={LogoFullCycle} alt="logo" />
        <TextHeader>Desafio 04 - Utilizando React.js</TextHeader>
      </Header>
      <Content>
        <Routes />
      </Content>
      <Footer>
        <FooterText01>Desenvolvido por</FooterText01>
        <a href="mailto:ademiritumbiara@outlook.com">
          Ademir Rodrigues da Silva
        </a>
        <FooterImagesContainer>
          <a
            href="https://github.com/AdemirSJRP"
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
          >
            <ImageFooter src={logoGithub} alt="Logo GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/ademir-rodrigues-da-silva-517a0b65/"
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
          >
            <ImageFooter src={LogoLinkedIn} alt="Logo Linkedin" />
          </a>
          <a
            href="https://twitter.com/ademiritumbiara"
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
          >
            <ImageFooter src={logoTwitter} alt="Logo Tweeter" />
          </a>
        </FooterImagesContainer>
      </Footer>
    </AppContainer>
  );
}

export default App;
