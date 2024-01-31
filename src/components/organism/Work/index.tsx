import Speed from "../../../assets/image/speed.png"
import Hotkeys from "../../../assets/image/hotkeys.png"
import Notifications from "../../../assets/image/notifications.png"
import Service from "../../../assets/image/service.png"
import { useTranslation } from "react-i18next";


export default function Work() {
    const { t } = useTranslation();
    return (
        <div id="work">
            <div className="title_box">
                <h1 className="title">{t("work_title")}</h1>
            </div>
            <div>
                <div className="card_box">
                    <div className="card">
                        <div className="card_top">
                            <h1 className="title">{t("work_card_first_title")}</h1>
                            <img src={Speed} alt="speed" className="img" />
                        </div>
                        <p className="text">{t("work_card_first_text")}</p>
                    </div>
                    <div className="card">
                        <div className="card_top">
                            <h1 className="title">{t("work_card_second_title")}</h1>
                            <img src={Hotkeys} alt="speed" className="img" />
                        </div>
                        <p className="text">{t("work_card_second_text")}</p>
                    </div>
                    <div className="card">
                        <div className="card_top">
                            <h1 className="title">{t("work_card_third_title")}</h1>
                            <img src={Notifications} alt="speed" className="img" />
                        </div>
                        <p className="text">{t("work_card_third_text")}</p>
                    </div>
                    <div className="card">
                        <div className="card_top">
                            <h1 className="title">{t("work_card_fourth_title")}</h1>
                            <img src={Service} alt="speed" className="img" />
                        </div>
                        <p className="text">{t("work_card_fourth_text")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
