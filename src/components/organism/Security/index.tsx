
import SecurityImg from "../../../assets/image/security.png"
import Server from "../../../assets/image/server.png"
import Key from "../../../assets/image/key.png"
import Fa from "../../../assets/image/2fa.png"
import { useTranslation } from "react-i18next"
export default function Security() {
    const { t } = useTranslation();

    return (
        <div id="security">
            <div className="title_box">
                <h1 className="title">{t("security_title")}</h1>
            </div>
            <div className="background">
                <div className="number_box">
                    <img src={SecurityImg} className="section_img" alt="security" />
                    <div className="count_box" >
                        <div className="card">
                            <div className="card_top">
                                <h1 className="title">{t("security_card_first_title")}</h1>
                                <img src={Key} alt="speed" className="img" />
                            </div>
                            <p className="text">{t("security_card_first_text")}</p>
                        </div>
                        <div className="card">
                            <div className="card_top">
                                <h1 className="title">{t("security_card_second_title")}</h1>
                                <img src={Server} alt="speed" className="img" />
                            </div>
                            <p className="text">{t("security_card_second_text")}</p>
                        </div>
                        <div className="card">
                            <div className="card_top">
                                <h1 className="title">{t("security_card_third_title")}</h1>
                                <img src={Fa} alt="speed" className="img" />
                            </div>
                            <p className="text">{t("security_card_third_text")}</p>
                        </div>
                        <div className="card none">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
