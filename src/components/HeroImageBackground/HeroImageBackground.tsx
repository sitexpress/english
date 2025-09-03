import cx from "clsx";
import {
    Button,
    Container,
    Overlay,
    Text,
    Title,
    Flex,
    useMantineTheme,
    Paper,
    Table,
    Group,
    List,
    ThemeIcon,
} from "@mantine/core";
import classes from "./HeroImageBackground.module.css";
import { Dots } from "./Dots";
import { useDisclosure } from "@mantine/hooks";
import { FullScreenModal } from "../FullScreenModal/FullScreenModal";

import { useEffect, useState } from "react";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import { modals } from "@mantine/modals";
import { useAppSelector } from "@/store/hooks";

import { IconCircleCheck } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

type AlignmentType = {
    alignment: "center" | "end" | "start" | undefined;
};

type HeroImageBackgroundType = {
    page: "home" | "contacts" | "test" | "result";
    scrollIntoView: (value: AlignmentType) => void;
    mode?: "start";
    isStarted?: boolean;
    setIsStarted?: (value: boolean) => void;
    fullSize?: boolean;
    setFullsize?: (value: boolean) => void;
};

export type CallBackModeType =
    | "Записаться"
    | "Оставить заявку"
    | "Записаться на пробный урок"
    | "Записаться c результатми теста"
    | "Записаться на определённый курс"
    | "Заказать звонок"
    | "";

export const HeroImageBackground: React.FC<HeroImageBackgroundType> = ({
    page,
    scrollIntoView,
    isStarted,
    setIsStarted,
    fullSize,
    setFullsize,
}) => {
    const [opened, { open, close }] = useDisclosure(false);
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [callBackMode, setCallBackMode] = useState<CallBackModeType>("");

    const theme = useMantineTheme();
    const navigate = useNavigate();
    const test = useAppSelector((state) => state.form.test);
    const listening = useAppSelector((state) => state.form.listening);

    // test-----------------------------------------------------------------------------
    const correctTestAnswers = test.filter((item) => item.isSelected === true).length;
    const correctTestAnswersLS = localStorage.getItem("test-result");

    const testResult =
        correctTestAnswersLS !== undefined && correctTestAnswersLS !== null && JSON.parse(correctTestAnswersLS);
    const persantageOfCorrectTestResult = testResult && (Number(testResult) * 100) / test.length;

    // listening-----------------------------------------------------------------------
    const correctListeningAnswers = listening.filter((item) => item.result).length;
    const correctListeningAnswersLS = localStorage.getItem("listening-result");

    const listeningResult =
        correctListeningAnswersLS !== undefined &&
        correctListeningAnswersLS !== null &&
        JSON.parse(correctListeningAnswersLS);
    const persantageOfCorrectListeningResult = listeningResult && (Number(listeningResult) * 100) / listening.length;

    const onEndTest = () =>
        modals.openConfirmModal({
            title: "Вы уверены что хотите завершить?",
            centered: true,
            children: <Text size="sm">После завершения мы подсчитаем кол-во правильных ответов.</Text>,
            labels: { confirm: "Завершить", cancel: "Вернуться к тесту" },
            confirmProps: { color: "red" },
            onCancel: () => console.log("Cancel"),
            onConfirm: () => {
                setIsStarted && setIsStarted(false);
                setFullsize && setFullsize(false);

                localStorage.setItem("test-result", JSON.stringify(correctTestAnswers));
                localStorage.setItem("listening-result", JSON.stringify(correctListeningAnswers));
                navigate("/result");
            },
        });

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    const handlerCallback = (value: CallBackModeType) => {
        open();
        setCallBackMode(value);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setFullsize && setFullsize(false);
        }, 1000);
    }, [fullSize]);

    return page === "home" ? (
        <Group className={classes.wrapper_home} p="lg">
            <FullScreenModal opened={opened} close={close} mode={callBackMode} />
            <Dots className={classes.dots} style={{ right: 0, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 0, bottom: 0 }} />
            <div className={classes.inner}>
                <Title className={classes.title} mt={30} c={theme.colors.violet[4]}>
                    English School
                </Title>

                <Container size="100%" p={0} ta="start" mt={10}>
                    <Text size="xl" ta="center" fw={700} c={theme.colors.dark[6]}>
                        Английский - ONLINE для детей и не только
                    </Text>
                </Container>

                <Container size="100%" p={30} ta="start">
                    <Flex justify="center">
                        <List
                            spacing="xs"
                            size="sm"
                            center
                            icon={
                                <ThemeIcon color="teal" size={24} radius="xl">
                                    <IconCircleCheck size={16} />
                                </ThemeIcon>
                            }
                        >
                            <List.Item>Для школьников</List.Item>
                            <List.Item>Для детей дошкольного возраста</List.Item>
                            <List.Item>Для начинающих изучать</List.Item>
                            <List.Item>Для продолжающих изучать</List.Item>
                            <List.Item>Подготовка к IELTS, TOEFL</List.Item>
                            <List.Item>Разговорный клуб</List.Item>
                            {/* <List.Item
                                icon={
                                    <ThemeIcon color="blue" size={24} radius="xl">
                                        <IconCircleDashed size={16} />
                                    </ThemeIcon>
                                }
                            >
                                Submit a pull request once you are done
                            </List.Item> */}
                        </List>
                    </Flex>
                </Container>

                <Group className={classes.controls}>
                    <Button
                        // href="https://dikidi.ru/#widget=182726"
                        // component="a"
                        onClick={() => handlerCallback("Записаться на пробный урок")}
                        className={classes.control}
                        variant="filled"
                        size="md"
                        radius="xl"
                        bg={theme.colors.red[6]}
                    >
                        Записаться на пробный урок
                    </Button>
                    <Button
                        className={classes.control}
                        variant="default"
                        size="md"
                        onClick={() => handlerCallback("Оставить заявку")}
                        radius="xl"
                        component="span"
                    >
                        Оставить заявку
                    </Button>
                </Group>
            </div>
        </Group>
    ) : page === "test" ? (
        <div
            className={
                isStarted && fullSize
                    ? classes.wrapper_test_started_fullSize
                    : isStarted && !fullSize && scrollPosition === 0
                      ? classes.wrapper_test_started_top
                      : isStarted && !fullSize && scrollPosition !== 0
                        ? classes.wrapper_test_started_scrolled
                        : classes.wrapper_test
            }
        >
            <div className={classes.inner}>
                {isStarted ? (
                    <Flex
                        direction={fullSize ? "column" : "row"}
                        justify={fullSize ? "center" : "space-between"}
                        align={fullSize ? "center" : "center"}
                        gap={20}
                        pl={10}
                        pr={10}
                    >
                        {fullSize && (
                            <Text size="44px" fw={700} c="white" variant="text">
                                Удачи !{" "}
                            </Text>
                        )}

                        <CountdownTimer initialSeconds={1500} />
                        {isStarted && !fullSize && (
                            <Button
                                disabled={!isStarted}
                                variant="filled"
                                size="sm"
                                w="130px"
                                color="red"
                                onClick={onEndTest}
                            >
                                Завершить
                            </Button>
                        )}
                    </Flex>
                ) : (
                    <Flex
                        direction="column"
                        p={20}
                        style={{
                            background: `${theme.colors.violet[0]}`,
                            opacity: 0.9,
                        }}
                    >
                        <Title mt={30} className={classes.title} c={theme.colors.violet[6]}>
                            Онлайн тест{" "}
                        </Title>
                        <Container size="100%" ta="center" p={20}>
                            <Text size="md" ta="center" c={theme.colors.dark[6]} fw="700">
                                Узнайте свой уровень английского — пройдите тест и запишитесь на бесплатный пробный урок
                            </Text>
                            <Text fz="sm" c={theme.colors.dark[6]} mt="sm">
                                --длительность теста: 50 минут
                            </Text>
                        </Container>
                    </Flex>
                )}

                {/* {mode && setIsStarted && !isStarted && isStarted !== undefined && (
                    <FinalStart
                        mode={mode}
                        isStarted={isStarted}
                        setIsStarted={setIsStarted}
                        setFullsize={setFullsize}
                    />
                )} */}
            </div>
        </div>
    ) : page === "result" ? (
        <div className={classes.wrapper_test}>
            <div className={classes.inner}>
                <Paper className={classes.paper} shadow="xs" radius="none" p="xl" style={{ opacity: "0.95" }}>
                    <Title className={classes.title} ta="center" c={theme.colors.dark[4]} pt={100}>
                        Ваш{" "}
                        <Text inherit component="span" c={theme.colors.yellow[6]}>
                            результат:
                        </Text>
                    </Title>

                    <Container size={640} mt={40} p={10} style={{ border: "1px solid #7950f2" }}>
                        <Text size="md" p={10} fw={700}>
                            1.Результаты теста:
                        </Text>

                        <Table variant="vertical" layout="fixed" withTableBorder>
                            <Table.Tbody>
                                <Table.Tr>
                                    <Table.Th w={150}>Количество точных ответов:</Table.Th>
                                    <Table.Td>
                                        <Text size="xl" ta="center" c={theme.colors.dark[4]} fw={500}>
                                            {testResult} из {test.length}
                                        </Text>
                                    </Table.Td>
                                </Table.Tr>

                                <Table.Tr>
                                    <Table.Th>Процент точных ответов:</Table.Th>
                                    <Table.Td>
                                        <Text size="xl" ta="center" c={theme.colors.dark[4]} fw={500}>
                                            {persantageOfCorrectTestResult.toFixed(1)} %
                                        </Text>
                                    </Table.Td>
                                </Table.Tr>
                            </Table.Tbody>
                        </Table>

                        <Text size="md" p={10} fw={700}>
                            2.Результаты аудирования:
                        </Text>

                        <Table variant="vertical" layout="fixed" withTableBorder>
                            <Table.Tbody>
                                <Table.Tr>
                                    <Table.Th w={150}>Количество точных ответов:</Table.Th>
                                    <Table.Td>
                                        <Text size="xl" ta="center" c={theme.colors.dark[4]} fw={500}>
                                            {listeningResult} из {listening.length}
                                        </Text>
                                    </Table.Td>
                                </Table.Tr>

                                <Table.Tr>
                                    <Table.Th>Процент точных ответов:</Table.Th>
                                    <Table.Td>
                                        <Text size="xl" ta="center" c={theme.colors.dark[4]} fw={500}>
                                            {persantageOfCorrectListeningResult.toFixed(1)} %
                                        </Text>
                                    </Table.Td>
                                </Table.Tr>
                            </Table.Tbody>
                        </Table>

                        <Flex
                            direction="column"
                            gap={20}
                            justify="center"
                            align="center"
                            mt={20}
                            pt={30}
                            pb={30}
                            bg="#7950f2"
                            style={{ border: "1px solid lightgrey" }}
                        >
                            <Text size="md" ta="center" p="sm" c="white" fw="700">
                                Поделитесь результатами теста с менеджером и забронируйте пробное занятие:
                            </Text>
                            <Button
                                className={classes.control}
                                variant="default"
                                size="sm"
                                w="200px"
                                onClick={() => handlerCallback("Записаться c результатми теста")}
                                radius="xl"
                            >
                                Записаться
                            </Button>
                        </Flex>
                    </Container>
                    <Container className={classes.controls}>
                        <a href="/test">
                            <Button
                                className={classes.control}
                                variant="filled"
                                size="sm"
                                w="200px"
                                // onClick={onReStartTest}
                                radius="xl"
                                bg="red"
                            >
                                Пройти тест заново
                            </Button>
                        </a>

                        <a href="/">
                            <Button
                                className={classes.control2}
                                variant="outline"
                                size="sm"
                                w="200px"
                                radius="xl"
                                c="black"
                                bg="white"
                            >
                                На главную
                            </Button>
                        </a>
                    </Container>
                </Paper>
            </div>
        </div>
    ) : (
        <div className={classes.wrapper_contact}>
            <Dots className={classes.dots} style={{ right: 0, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 0, bottom: 0 }} />

            <Overlay color="#000" opacity={0.65} zIndex={1} />

            <div className={classes.inner}>
                <Title className={classes.title}>
                    <Text inherit component="span" gradient={{ from: "pink", to: "yellow" }}>
                        Let's have a talk
                    </Text>
                </Title>

                <Container size={640}>
                    <Text size="lg" className={classes.description}>
                        Contact Us
                    </Text>
                </Container>

                <div className={classes.controls}>
                    <Button
                        component="a"
                        href="https://dashboard.ensystainc.com/login.php"
                        className={classes.control}
                        variant="gradient"
                        size="lg"
                        gradient={{ from: "#3F4AB7", to: "rgb(96, 109, 255)", deg: 64 }}
                    >
                        Sign In
                    </Button>
                    <Button
                        className={cx(classes.control, classes.secondaryControl)}
                        size="lg"
                        onClick={() =>
                            scrollIntoView({
                                alignment: "center",
                            })
                        }
                    >
                        Contact form
                    </Button>
                </div>
            </div>
        </div>
    );
};
