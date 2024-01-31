import { CoinProp } from "./interface";

export default function Coin({ img, title, text }: CoinProp) {

    return (
        <div id="coin">
            <div className="section_box">
                <div className="section_main">
                    <div className="title_box">
                        <h1 className="title"> {title}</h1>
                    </div>
                    <div className="item">
                        <h2 className="item_title">{text}</h2>

                    </div>
                </div>
                <img src={img} className="img" alt="crypto" />
            </div>
        </div>
    );
};
