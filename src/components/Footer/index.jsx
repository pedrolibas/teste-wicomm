import { ContainerFooter } from "./style";
import { StyledButton } from "../Button/style";
import logo from "../../assets/logos/logo.svg";
import facebookIcon from "../../assets/socialMediaIcons/facebook.png";
import instagramIcon from "../../assets/socialMediaIcons/instagram.png";
import youtubeIcon from "../../assets/socialMediaIcons/youtube.png";
import twitterIcon from "../../assets/socialMediaIcons/twitter.png";
import tiktokIcon from "../../assets/socialMediaIcons/tiktok.png";
import mercadoLivreIcon from "../../assets/paymentsIcon/mercadoLivre.png";
import visaIcon from "../../assets/paymentsIcon/visa.png";
import mastercardIcon from "../../assets/paymentsIcon/mastercard.png";
import hipercardIcon from "../../assets/paymentsIcon/hipercard.png";
import pixIcon from "../../assets/paymentsIcon/pix.png";
import amexIcon from "../../assets/paymentsIcon/amex.png";
import dinersClubIcon from "../../assets/paymentsIcon/dinersClub.png";
import eloIcon from "../../assets/paymentsIcon/elo.png";
import boletoIcon from "../../assets/paymentsIcon/boleto.png";
import bitIcon from "../../assets/segurityIcon/bit.png";
import vtexIcon from "../../assets/segurityIcon/vtex.png";
import wicommLogo from "../../assets/footerImage/wicomm.png";
import vtexLogo from "../../assets/footerImage/vtex.png";

export const Footer = () => {
  return (
    <ContainerFooter>
      <section>
        <div className="container-footer">
          <div className="contacts">
            <img src={logo} alt="" className="logo" />
            <div>
              <h3 className="type11">Nos siga:</h3>
              <ul>
                <li>
                  <img src={facebookIcon} alt="" />
                </li>
                <li>
                  <img src={instagramIcon} alt="" />
                </li>
                <li>
                  <img src={youtubeIcon} alt="" />
                </li>
                <li>
                  <img src={twitterIcon} alt="" />
                </li>
                <li>
                  <img src={tiktokIcon} alt="" />
                </li>
              </ul>
            </div>
          </div>
          <div className="infos">
            <div className="container-infos">
              <ul>
                <h2 className="type7">Blackskull USA</h2>
                <li className="type11">Sobre Nós</li>
                <li className="type11">Black Skull é confiável?</li>
                <li className="type11">Atletas Black Skull</li>
                <li className="type11">Nosso Blog</li>
                <li className="type11">Seja um Revendedor</li>
                <li className="type11">Entre em Contato</li>
              </ul>
              <ul>
                <h2 className="type7">Institucional</h2>
                <li className="type11">Trocas e Devoluções</li>
                <li className="type11">Política de Entregas</li>
                <li className="type11">Política de Privacidade</li>
                <li className="type11">Política de Cancelamentos</li>
              </ul>
              <ul>
                <h2 className="type7">Afiliados</h2>
                <li className="type11">Programa de Afiliados</li>
                <li className="type11">Desconto para Militares</li>
                <li className="type11">
                  Benefícios para Profissionais da Saúde
                </li>
                <li className="type11">
                  Benefícios para Profs. de Educação Física
                </li>
                <li className="type11">Assinaturas</li>
              </ul>
            </div>
            <div className="payment">
              <h2 className="type7">Formas de Pagamento</h2>
              <ul>
                <li>
                  <img src={mercadoLivreIcon} alt="" />
                </li>
                <li>
                  <img src={visaIcon} alt="" />
                </li>
                <li>
                  <img src={mastercardIcon} alt="" />
                </li>
                <li>
                  <img src={hipercardIcon} alt="" />
                </li>
                <li>
                  <img src={pixIcon} alt="" />
                </li>
                <li>
                  <img src={amexIcon} alt="" />
                </li>
                <li>
                  <img src={dinersClubIcon} alt="" />
                </li>
                <li>
                  <img src={eloIcon} alt="" />
                </li>
                <li>
                  <img src={boletoIcon} alt="" />
                </li>
              </ul>
            </div>
            <div className="segurity">
              <h2 className="type7">Segurança</h2>
              <ul>
                <li>
                  <img src={vtexIcon} alt="" />
                </li>
                <li>
                  <img src={bitIcon} alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="form-footer">
          <h2 className="type15 roboto">
            FIQUE POR <strong>DENTRO</strong>
          </h2>
          <p className="type11">
            Inscreva-se e seja o primeiro a saber sobre as novidades, promoções
            e muito mais!
          </p>
          <form>
            <input type="text" placeholder="Digite seu nome" />
            <input type="text" placeholder="Digite seu e-mail" />
            <StyledButton className="type3">Enviar</StyledButton>
          </form>
        </div>
      </section>
      <div className="bottom-footer">
        <h2 className="type6">
          Black Skull 2022. Todos os direitos reservados.
        </h2>
        <div>
          <img src={wicommLogo} alt="" />
          <img src={vtexLogo} alt="" />
        </div>
      </div>
    </ContainerFooter>
  );
};
