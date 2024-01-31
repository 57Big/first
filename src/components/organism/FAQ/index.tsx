import { data } from "./data"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import Coins from "../../../assets/image/coins.png"
import { useTranslation } from "react-i18next";
export default function FAQ() {
    const { t } = useTranslation();
    const [open, setOpen] = useState({
        id: 0,
        state: false
    })
    const handleOpen = (id: number) => {
        if (id !== open.id) {
            setOpen({
                id,
                state: true
            });
        } else {
            setOpen({
                id,
                state: !open.state
            });
        }
    }
    return (
        <div id="faq">
            <div className="faq_box">
                <div className="faq_main">
                    <h1 className="main_title">{t(data.title)}</h1>
                    <div className="item_box">
                        {data.questions.map((e) => {
                            return (
                                <div key={e.id} className={`item ${open.state && open.id === e.id ? "active" : ""}`}>
                                    <div className="title_box" onClick={() => { handleOpen(e.id) }}>
                                        <h2 className="title">{t(e.title)}</h2>
                                        <ArrowForwardIosIcon className="icon" />
                                    </div>
                                    <div className="text_box" onClick={() => { handleOpen(e.id) }}>
                                        <p className="text">{t(e.text)}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <img src={Coins} className="faq_img" alt="coins" />
            </div>
        </div>
    )
}