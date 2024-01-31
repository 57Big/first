import Group1 from "../../../assets/image/group1.png"
import Group2 from "../../../assets/image/group2.png"
import Group3 from "../../../assets/image/group3.png"
import Group4 from "../../../assets/image/group4.png"
import Group5 from "../../../assets/image/group5.png"
import Group6 from "../../../assets/image/group6.png"
import Arrow from "../../../assets/image/arrow.png"
import Logo from "../../../assets/image/logo_silver.png"
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react"
import { Link } from "react-scroll";
import { ReactComponent as Phone } from "../Footer/icons/phone.svg"
import { ReactComponent as Whatsapp } from "../Footer/icons/whatsap.svg"
export default function Header() {
  const { t } = useTranslation();
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setScrollPosition(currentPosition);


  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const phoneNumber = "+971554455909";
  const encodedPhoneNumber = encodeURIComponent(phoneNumber);
  const whatsAppURL = `https://api.whatsapp.com/send?phone=${encodedPhoneNumber}`;

  return (
    <div id="header">
      <div className="socials">
        <Link to={"home"} duration={500} smooth={true}>
          <button className={`button_navigate ${scrollPosition > 0 ? "active" : ""}`}>
            <img src={Arrow} className="img_navigate" alt="Group1" />
          </button>
        </Link>

        <a href="tel:+97144107167" rel="noopener noreferrer" className="social_lick" >
          <Phone />
        </a>

        <a href={whatsAppURL} target="_blank" rel="noopener noreferrer" className="social_lick">
          <Whatsapp />
        </a>

      </div>
      <div className="background">
        <div className="title_box">
          <div className="logo_box">
            <h1 className="title">{t("header_title")} </h1>
            <img src={Logo} className="img" alt="logo" />
          </div>
          <div className="group_box">
            <img src={Group1} className="group_img" alt="Group1" />
            <img src={Group2} className="group_img" alt="Group2" />
            <img src={Group3} className="group_img" alt="Group3" />
            <img src={Group4} className="group_img" alt="Group4" />
            <img src={Group5} className="group_img" alt="Group5" />
            <img src={Group6} className="group_img" alt="Group6" />
          </div>
        </div>
      </div>
    </div>
  );
};

