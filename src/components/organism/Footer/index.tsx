import React from "react";
import Logo from "src/assets/image/logo.png"
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { ReactComponent as Telegram } from "./icons/telegram.svg"
import { ReactComponent as Instagram } from "./icons/instagram.svg"
import { ReactComponent as Twitter } from "./icons/twitter.svg"
import { ReactComponent as Phone } from "./icons/phone.svg"
import { ReactComponent as Whatsapp } from "./icons/whatsap.svg"
import { ReactComponent as Email } from "./icons/email.svg"
export default function Footer() {
  const { t } = useTranslation();
  const phoneNumber = "+971554455909";
  const encodedPhoneNumber = encodeURIComponent(phoneNumber);
  const whatsAppURL = `https://api.whatsapp.com/send?phone=${encodedPhoneNumber}`;
  const emailAddress = "btcbay1@gmail.com";
  const encodedEmailAddress = encodeURIComponent(emailAddress);
  const emailURL = `mailto:${encodedEmailAddress}`;
  const telegramUsername1 = "btcbay";
  return (
    <div id="footer">
      <div className="footer_main">
        <div className="logo_box">
          <img src={Logo} alt="" className="logo" />
          <p className="logo_text"> © 2023 BTC BAY. {t("footer_reserved")}</p>
        </div>
        <div className="map_box">
          <h1 className="map_title">{t("footer_platform_title")}</h1>
          <div className="text_box">
            <Link to={"home"} duration={500} smooth={true}>
              <p className="map_text">{t("footer_home")}</p>
            </Link>
            <Link to={"conventor"} duration={500} smooth={true}>
              <p className="map_text">{t("footer_conventor")}</p>
            </Link>
            <Link to={"product"} duration={500} smooth={true}>
              <p className="map_text">{t("footer_product")}</p>
            </Link>
            <Link to={"about"} duration={500} smooth={true}>
              <p className="map_text">{t("footer_about")}</p>
            </Link>
          </div>
        </div>
        <div className="social_box">
          <h1 className="social_title">{t("footer_socials_title")}</h1>
          <div className="socials">
            <a href="tel:+97144107167" rel="noopener noreferrer" className="social_lick" >
              <Phone />
            </a>
            <a href={`https://t.me/${telegramUsername1}`} target={"new_blank"} rel="noopener noreferrer" className="social_lick">
              <Telegram />
            </a>

            <a href="https://instagram.com/btcbay.ae?igshid=MzRlODBiNWFlZA==" target={"new_blank"} rel="noopener noreferrer" className="social_lick" >
              <Instagram />
            </a>
            <a href="https://twitter.com/BTCBAY1?t=eaUGEaFFIPTS0Shw2KdPTQ&s=09" rel="noopener noreferrer" target={"new_blank"} className="social_lick" >
              <Twitter />
            </a>
            <a href={whatsAppURL} target="_blank" rel="noopener noreferrer" className="social_lick">
              <Whatsapp />
            </a>
            <a href={emailURL} className="social_lick">
              <Email />
            </a>
          </div>
          <div className="adress">
            <p className="adress_text">  The Prism Tower 139, Al Mustaqbal Street Business Bay, Dubai</p>
          </div>
        </div>
      </div>
    </div>
  );
};
