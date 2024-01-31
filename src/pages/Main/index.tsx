import { Element } from "react-scroll";
import { Calculator, Contact, Crypto, FAQ, Footer, Header, Navbar, Numbers, Security, Work } from "../../components/organism";
import React, { useEffect, useState } from "react";
import axios from "axios";
interface CryptoData {
  tether: {
    aed: number;
  };
  bitcoin: {
    aed: number;
  };
  ethereum: {
    aed: number;
  };
}
export default function Main() {
  const [values, setValues] = useState<CryptoData>({
    tether: {
      aed: 3.67
    },
    bitcoin: {
      aed: 106823
    },
    ethereum: {
      aed: 6791.4
    },
  });
  const currencies = [
    { title: "USDT", course: (1 / values?.tether.aed).toString(), text: "Tether" },
    { title: "AED", course: "1", text: "AED AED" },
    { title: "BTC", course: (1 / values?.bitcoin.aed).toString(), text: "Bitcoin" },
    { title: "ETH", course: (1 / values?.ethereum.aed).toString(), text: "Ethereum" },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const exm = values.bitcoin.aed > 2 ? true : false;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price",
          {
            params: {
              ids: "tether,bitcoin,ethereum",
              vs_currencies: "aed",
            },
          }
        );
        setValues(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [exm]);

  return (
    <div className="main">
      <Element name="home" >
        <Navbar />
      </Element>
      <Header />
      <Element name="conventor" >
        <Calculator currencies={currencies} />
      </Element>
      <Work />
      <Numbers />
      <Element name="product" >
        <Crypto />
      </Element>
      <Element name="about" >
        <FAQ />
      </Element>
      <Security />
      <Element name="contact" >
        <Contact />
      </Element>
      <Footer />
    </div>
  );
};
