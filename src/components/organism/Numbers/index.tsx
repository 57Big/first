import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import { useInView } from 'react-intersection-observer';

export default function Numbers() {
    const { t } = useTranslation();
    const [onCounter, setOnCounter] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0,
    });

    useEffect(() => {
        if (inView) {
            setOnCounter(true);
        }
    }, [inView]);

    return (
        <div id="numbers">
            <div className="title_box">
                <h1 className="title">{t("numbers_title")}</h1>
            </div>

            <div className="background">
                <div className="number_box">
                    <h1 className="title">$18.5 M+</h1>
                    <p className="text">{t("numbers_text")}</p>
                    <div className="count_box" ref={ref}>

                        <div className="item first">
                            <h2 className="item_title">
                                {onCounter && (
                                    <CountUp start={0} end={36} duration={3} delay={0} />
                                )} М+</h2>
                            <p className="item_text">{t("numbers_card_first")}</p>
                        </div>

                        <div className="item none"></div>

                        <div className="item second">
                            <h2 className="item_title">   {onCounter && (
                                <CountUp start={0} end={21} duration={3} delay={0} />
                            )} K+</h2>
                            <p className="item_text">{t("numbers_card_second")}</p>
                        </div>

                        <div className="item  third">
                            <h2 className="item_title"> {onCounter && (
                                <CountUp start={0} end={325} duration={3} delay={0} />
                            )} M+</h2>
                            <p className="item_text">{t("numbers_card_third")}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
