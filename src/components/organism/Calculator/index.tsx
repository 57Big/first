import { FormControl, IconButton, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
interface Currency {
    title: string;
    course: string;
    text: string;
}
interface ConverterProps {
    currencies: Currency[];
}

export default function Calculator({ currencies }: ConverterProps) {
    const [amount, setAmount] = useState<string>("");
    const [takeCurrency, setTakeCurrency] = useState<Currency>(currencies[0]);
    const [getCurrency, setGetCurrency] = useState<Currency>(currencies[1]);
    const { t } = useTranslation();
    useEffect(() => {
        function getCours() {

        }
        getCours()
    }, [currencies])
    const handleSwapCurrencies = () => {
        setTakeCurrency(getCurrency);
        setGetCurrency(takeCurrency);
    };

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const truncatedValue = value.slice(0, 10);

        setAmount(truncatedValue);
    };

    const handleTakeCurrencyChange = (event: SelectChangeEvent) => {
        const currency = currencies.find((curr) => curr.course === event.target.value as string);
        if (currency) {
            setTakeCurrency(currency);
        }
    };

    const handleGetCurrencyChange = (event: SelectChangeEvent) => {
        const currency = currencies.find((curr) => curr.course === event.target.value as string);
        if (currency) {
            setGetCurrency(currency);
        }
    };


    const convertCurrency = (amount: number): number => {
        const amountInUsdt = amount / parseFloat(takeCurrency.course);
        const convertedAmount = amountInUsdt * parseFloat(getCurrency.course);
        return isNaN(convertedAmount) ? 0 : convertedAmount;
    };
    const [isFocus, setIsFocus] = useState(false);

    function formatNumber(number: number): string {
        const decimalPlaces = (number.toString().split('.')[1] || '').length;
        const maxDecimalPlaces = 5; // Set the maximum number of decimal places you want to display

        if (decimalPlaces > maxDecimalPlaces) {
            return number.toFixed(maxDecimalPlaces);
        }

        return number.toString();
    }

    return (
        <div id="calculator">
            <div className="calculator_box">
                <div className="title_box">
                    <h1 className="title">{t("calculator_conventor")} {takeCurrency.text === "AED AED" ? t("calculator_aed") : takeCurrency.text} {t("calculator_to")} {getCurrency.text === "AED AED" ? t("calculator_aed") : getCurrency.text} </h1>
                    <div className="cours">
                        <p className="text">{amount.length > 0 ? amount : "0"}{" "}{takeCurrency.text}</p>
                        <p className="text">=</p>
                        <p className="text">{formatNumber(convertCurrency(parseFloat(amount)))}{" "}{getCurrency.text}</p>
                    </div>
                </div>
                <div className="calculate" >
                    <div className="item">
                        <div className="input_box">
                            <TextField
                                className="field inpp"
                                color="warning"
                                label={amount.length > 0 ? "" : takeCurrency.title}
                                type="number"
                                value={amount}
                                onChange={handleAmountChange}
                            />
                        </div>
                        <div className={`select ${isFocus ? "select_of" : ""}`}>
                            <FormControl >
                                <Select
                                    onFocus={() => setIsFocus(true)}
                                    onBlur={() => setIsFocus(false)}
                                    value={takeCurrency.course} color="warning" onChange={handleTakeCurrencyChange}>
                                    {currencies.map((currency) => (
                                        <MenuItem key={currency.course} value={currency.course}>
                                            {currency.title}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className="icon_box">
                        <IconButton onClick={handleSwapCurrencies}>
                            <SwapHorizIcon />
                        </IconButton>
                    </div>
                    <div className="item">
                        <div className="input_box">
                            <TextField
                                className="field inpp"
                                color="warning"
                                label={convertCurrency(parseFloat(amount)) > 0 ? "" : `${t("contertored")} ${getCurrency.title}`}
                                type="text"
                                value={amount.length > 0 ? formatNumber(convertCurrency(parseFloat(amount))) : ""}
                            />
                        </div>
                        <div className="select">
                            <FormControl >
                                <Select value={getCurrency.course} color="warning" onChange={handleGetCurrencyChange}>
                                    {currencies.map((currency) => (
                                        <MenuItem key={currency.course} value={currency.course}>
                                            {currency.title}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
