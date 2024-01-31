import { Coin } from "src/components/malekula";
import Tether from "../../../assets/image/tether.png"
import Binace from "../../../assets/image/binace.png"
import Etherium from "../../../assets/image/etherium.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
export default function Crypto() {
    const { t } = useTranslation();
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: window.innerWidth > 414 ? true : false,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div id="crypto">
            <Slider {...settings}>
                <Coin text={t("crypto_card_first_text")} title={t("crypto_card_first_title")} img={Etherium} />
                <Coin text={t("crypto_card_second_text")} title={t("crypto_card_second_title")} img={Binace} />
                <Coin text={t("crypto_card_third_text")} title={t("crypto_card_third_title")} img={Tether} />
            </ Slider >
        </div>
    );
};
