import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface ContactForm {
    name: string;
    telephone: string;
    email: string;
}

export default function SendInfo() {
    const { t } = useTranslation();
    const chat_id = "-805561178";
    const tgtoken = "6037507225:AAGqahnZyXA6Xt4X6VTZ-5TSMRRHwzZHK0k"

    const {
        register,
        handleSubmit,
        reset,

    } = useForm<ContactForm>({
        mode: "onChange",
    });
    const toLogin = async (value: ContactForm) => {
        const my_text = `Result is: %0A - Name:  ${value.name} %0A - telephone:${value.telephone} %0A - Email:  ${value.email}`;
        const newTgUrl = `https://api.telegram.org/bot${tgtoken}/sendMessage?chat_id=${chat_id}&text=${my_text}`;
        await fetch(newTgUrl);
        reset();
    };

    return (
        <div id="send_info">
            <div className="main_contact">
                <div className="section_box">
                    <h1 className="title">{t("contact_title")}</h1>
                    <h4 className="text">{t("contact_text")}</h4>
                    <form onSubmit={handleSubmit(toLogin)} className="input_box">
                        <TextField
                            className="field inp"
                            label={t("contact_name")}
                            type="text"
                            color="warning"
                            {...register("name", { required: "Write your name" })}

                        />
                        <TextField
                            className="field inp"
                            label={t("contact_telephone")}
                            color="warning"
                            type="number"
                            {...register("telephone", {
                                required: "Write your telephone number",
                            })}
                        />

                        <TextField
                            className="field inp"
                            label={t("contact_email")}
                            type="email"
                            color="warning"
                            {...register("email", { required: "Write your email" })}
                        />
                        <Button
                            type="submit"
                            className="inp button"
                            size="large"
                            variant="contained"
                        >
                            {t("contact_send")}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

