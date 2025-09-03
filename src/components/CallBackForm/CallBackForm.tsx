"use client";
import React, { useState } from "react";
import { useForm } from "@mantine/form";
import { TextInput, Button, Textarea, rem, Title, useMantineTheme, Text, Container, Table } from "@mantine/core";
import { sendCustomerSupportMessage, sendMessage } from "../../../api/telegram";
import { notifications } from "@mantine/notifications";
import { IconX, IconCheck } from "@tabler/icons-react";
import { CheckBox } from "../CheckBox/CheckBox";
import { BadgesType } from "../FeaturesAsymmetrical/FeaturesAsymmetrical";
import classes from "./CallBack.module.css";
import { CallBackModeType } from "../HeroImageBackground/HeroImageBackground";
import { Result } from "@/features/formSlice";

type CallBackFormType = {
    mode: CallBackModeType;
    image?: string;
    title: string;
    country?: string;
    description?: string;
    fitted?: string;
    discount?: number;
    price?: number;
    badges?: BadgesType[];
    setClose: () => void;
};

export default function CallBackForm({
    mode,
    title,
    fitted,
    discount,
    price,
    setClose,
    ...rest
}: CallBackFormType) {
    const [submittedValues, setSubmittedValues] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);
    const [boxValue, setBoxValue] = useState<string[]>([]);
    const theme = useMantineTheme();

    const localStorageResult = localStorage.getItem("test-result");
    const localStorageResultParsed = localStorageResult !== null && JSON.parse(localStorageResult);
    const ammountOfCorrectAnswers = localStorageResultParsed.length && localStorageResultParsed.filter((item:Result) => item.quest === true);
    const persantage = (Number(ammountOfCorrectAnswers) * 100) / 10;

    const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;
    const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

    const formOne = useForm({
        mode: "controlled",
        initialValues: {
            name: "",
            tel: "",
            message: "",
        },
        validate: {
            name: (value) =>
                value.length < 2 ? "Пожалуйста, введите ваше имя. Оно должно содержать не менее 2 букв!" : null,
            tel: (value) =>
                value.length < 11 || value.length > 11
                    ? "Пожалуйста, введите номер телефона. Формат номера телефона должен начинаться с 8 -ки, а количество цифр должно быть 11!"
                    : null,
            // message: (value) => (value.length < 6 ? "Please describe in a bit more detail..." : null),
        },
    });

    const handleSubmitOne = async (values: typeof formOne.values): Promise<void> => {
        try {
            setIsLoading(true);
            const date = new Date();
            setSubmittedValues(JSON.stringify(values, null, 2));
            const line1 = `Курсы`;
            const line2 = `------------------------------`;
            const line3 = `Дата: ${date.getDate().toString().length < 2 ? `0${date.getDate()}` : date.getDate()}/${date.getMonth().toString().length < 2 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}/${date.getFullYear()}`;
            const line4 = `Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds().toString().length < 2 ? `0${date.getSeconds()}` : date.getSeconds()}`;
            const line5 = `------------------------------`;
            const line6 = `Выбранные курсы: ${boxValue.length === 0 ? "*Ничего не было выбрано" : boxValue.map((item, i) => `${i + 1}) ${item}`)}`;
            const line7 = `Имя: ${values.name}`;
            const line8 = `Телефон": ${values.tel}`;
            const line9 = `Сообщение: ${values.message ? values.message : ""}`;

            await sendMessage(line1, line2, line3, line4, line5, line6, line7, line8, line9);
            setClose();
            notifications.show({
                position: "top-center",
                title: (
                    <Title order={3} ta="center" c="green.8">
                        Успех!
                    </Title>
                ),
                message: `Форма успешно отправлена! Мы перезвоним вам в течение 10 минут, если это происходит в рабочее время 9:00 - 20:00 🌟`,
                withCloseButton: true,
                autoClose: 8000,
                color: "green.8",
                icon: checkIcon,
                loading: isLoading,
                radius: "lg",
                withBorder: true,
            });
        } catch (error) {
            // form.setFieldError("email", error as string);
            notifications.show({
                // position: "bottom-right",
                position: "top-center",
                title: "Что-то пошло не так",
                message: `Пожалуйста, проверьте Интернет подключение и попробуйте снова через несколько минут!🌟`,
                withCloseButton: true,
                autoClose: 5000,
                color: "red",
                icon: xIcon,
                loading: isLoading,
                radius: "xl",
                withBorder: true,
            });
        } finally {
            setIsLoading(false);
            // setIsOpen(false);
        }
    };

    // ------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------------

    const formTwo = useForm({
        mode: "controlled",
        initialValues: {
            name: "",
            tel: "",
            message: "",
        },
        validate: {
            name: (value) =>
                value.length < 2 ? "Пожалуйста, введите ваше имя. Оно должно содержать не менее 2 букв!" : null,
            // name: (value) =>
            //     value.length < 2 ? "Please enter your name. It should contain at least 2 letters!" : null,
            // tel: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email format!"),
            tel: (value) =>
                value.length < 11 || value.length > 11
                    ? "Пожалуйста, введите номер телефона. Формат номера телефона должен начинаться с 8 -ки, а количество цифр должно быть 11!"
                    : null,
            // subject: (value) => (value.length < 3 ? "The title must be at least 3 letters long!" : null),
            // message: (value) => (value.length < 6 ? "Please describe in a bit more detail..." : null),
        },
    });

    const handleSubmitTwo = async (values: typeof formTwo.values): Promise<void> => {
        try {
            setIsLoading(true);
            const date = new Date();
            setSubmittedValues(JSON.stringify(values, null, 2));
            const line1 = mode;
            const line2 = `------------------------------`;
            const line3 = `Дата: ${date.getDate().toString().length < 2 ? `0${date.getDate()}` : date.getDate()}/${date.getMonth().toString().length < 2 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}/${date.getFullYear()}`;
            const line4 = `Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds().toString().length < 2 ? `0${date.getSeconds()}` : date.getSeconds()}`;
            const line5 = `------------------------------`;
            const line6 = `Имя: ${values.name}`;
            const line7 = `Номер телефона:" ${values.tel}`;
            const line8 =
                mode === "Записаться c результатми теста"
                    ? `Количество точных ответов: ${ammountOfCorrectAnswers.length} из 10`
                    : "";
            const line9 =
                mode === "Записаться c результатми теста"
                    ? `Процент точных ответов: ${persantage}%`
                    : `Сообщение: ${values.message ? values.message : ""}`;

            await sendCustomerSupportMessage(line1, line2, line3, line4, line5, line6, line7, line8, line9);
            notifications.show({
                position: "top-center",
                title: (
                    <Title order={4} ta="center" c="green.8">
                        Успех!
                    </Title>
                ),
                message: `Форма успешно отправлена! Мы перезвоним вам в течение 10 минут, если это происходит в рабочее время 9:00 - 20:00 🌟`,
                withCloseButton: true,
                autoClose: 8000,
                color: "green",
                icon: checkIcon,
                loading: isLoading,
                radius: "xl",
                withBorder: true,
            });
        } catch (error) {
            // form.setFieldError("email", error as string);
            notifications.show({
                position: "top-center",
                title: "Что-то пошло не так",
                message: `Пожалуйста, проверьте Интернет подключение и попробуйте снова через несколько минут!🌟`,
                withCloseButton: true,
                autoClose: 5000,
                color: "red",
                icon: xIcon,
                loading: isLoading,
                radius: "xl",
                withBorder: true,
            });
        } finally {
            setIsLoading(false);
            setClose();
            formTwo.reset();
        }
    };

    return mode === "Записаться на определённый курс" ? (
        <form
            onSubmit={formOne.onSubmit(handleSubmitOne)}
            style={{
                paddingBottom: "16px",
                paddingLeft: "16px",
                paddingRight: "16px",
            }}
        >
            <TextInput
                withAsterisk
                size="md"
                label="Имя"
                placeholder="Иван"
                key={formOne.key("name")}
                {...formOne.getInputProps("name")}
            />
            <TextInput
                withAsterisk
                size="md"
                label="Телефон:"
                placeholder="89876544321"
                mt="md"
                key={formOne.key("tel")}
                {...formOne.getInputProps("tel")}
            />

            <Textarea
                label="Сообщение"
                size="md"
                placeholder="Дополнительная информация если необходимо..."
                mt="md"
                key={formOne.key("message")}
                {...formOne.getInputProps("message")}
            />
            <Button
                loading={isLoading}
                type="submit"
                mt="xl"
                style={{ width: "100%" }}
                // variant="default"
                c={theme.colors.dark[7]}
                color={theme.colors.yellow[6]}
            >
                Оставить заявку
            </Button>
            {!!fitted && !!discount && !!price && (
                <CheckBox
                    fitted={fitted}
                    price={price}
                    discount={discount}
                    title={title}
                    value={boxValue}
                    setValue={setBoxValue}
                />
            )}
        </form>
    ) : mode === "Записаться c результатми теста" ? (
        <form
            onSubmit={formTwo.onSubmit(handleSubmitTwo)}
            style={{
                paddingBottom: "16px",
                paddingLeft: "16px",
                paddingRight: "16px",
            }}
        >
            <TextInput
                withAsterisk
                size="md"
                label="Имя"
                placeholder="Иван"
                key={formTwo.key("name")}
                {...formTwo.getInputProps("name")}
            />
            <TextInput
                withAsterisk
                size="md"
                label="Номер телефона:"
                placeholder="89876544321"
                mt="md"
                key={formTwo.key("tel")}
                {...formTwo.getInputProps("tel")}
            />

            <Textarea
                size="md"
                label="Доболнительное сообщение если нужно"
                placeholder="Подскажите сколько стоит?..."
                mt="md"
                key={formTwo.key("message")}
                {...formTwo.getInputProps("message")}
            />
            <Container size={640} mt={40}>
                <Table variant="vertical" layout="fixed" withTableBorder>
                    <Table.Tbody>
                        <Table.Tr>
                            <Table.Th w={150}>Количество точных ответов:</Table.Th>
                            <Table.Td>
                                <Text size="xl" ta="center" c={theme.colors.dark[4]} fw={500}>
                                    {ammountOfCorrectAnswers.length} из 10
                                </Text>
                            </Table.Td>
                        </Table.Tr>

                        <Table.Tr>
                            <Table.Th>Процент точных ответов:</Table.Th>
                            <Table.Td>
                                <Text size="xl" ta="center" c={theme.colors.dark[4]} fw={500}>
                                    {persantage} %
                                </Text>
                            </Table.Td>
                        </Table.Tr>
                    </Table.Tbody>
                </Table>
            </Container>
            <Button
                className={classes.btn}
                loading={isLoading}
                type="submit"
                mt="xl"
                style={{ width: "100%" }}
                variant="default"
            >
                Отправить
            </Button>
        </form>
    ) : (
        <form
            onSubmit={formTwo.onSubmit(handleSubmitTwo)}
            style={{
                paddingBottom: "16px",
                paddingLeft: "16px",
                paddingRight: "16px",
            }}
        >
            <TextInput
                withAsterisk
                size="md"
                label="Имя"
                placeholder="Иван"
                key={formTwo.key("name")}
                {...formTwo.getInputProps("name")}
            />
            <TextInput
                withAsterisk
                size="md"
                label="Номер телефона:"
                placeholder="89876544321"
                mt="md"
                key={formTwo.key("tel")}
                {...formTwo.getInputProps("tel")}
            />
            {/* <TextInput
                withAsterisk
                size="md"
                label="Subject"
                placeholder="Subject"
                mt="md" 
                key={formTwo.key("subject")}
                {...formTwo.getInputProps("subject")}
            /> */}
            <Textarea
                size="md"
                label="Доболнительное сообщение если нужно"
                placeholder="Подскажите сколько стоит?..."
                mt="md"
                key={formTwo.key("message")}
                {...formTwo.getInputProps("message")}
            />
            <Button
                className={classes.btn}
                loading={isLoading}
                type="submit"
                mt="xl"
                style={{ width: "100%" }}
                variant="default"
            >
                Отправить
            </Button>
        </form>
    );
}
