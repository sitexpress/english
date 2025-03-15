import {
    IconBadge4k,
    IconBook,
    IconChartPie3,
    IconCheck,
    IconChevronDown,
    IconCode,
    IconCoin,
    IconFingerprint,
    IconNotification,
} from "@tabler/icons-react";
import {
    Anchor,
    Box,
    Burger,
    Button,
    Center,
    Collapse,
    Divider,
    Drawer,
    Flex,
    Group,
    HoverCard,
    ScrollArea,
    SimpleGrid,
    Text,
    ThemeIcon,
    Title,
    UnstyledButton,
    useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import classes from "./Header.module.css";
import { ColorSchemeToggle } from "../ColorSchemeToggle/ColorSchemeToggle";
import { useEffect, useState } from "react";
import { FullScreenModal } from "../FullScreenModal/FullScreenModal";
import { useAppDispatch } from "@/store/hooks";
import { NavLink  } from "react-router-dom";
import { startLoading } from "@/features/formSlice";
import { CallBackModeType } from "../HeroImageBackground/HeroImageBackground";

const mockdata = [
    {
        icon: IconCheck,
        title: "Для начинающих изучать",
        description: "This Pokémon’s cry is very loud and distracting",
    },
    {
        icon: IconCheck,
        title: "Для продолжающих изучать",
        description: "The fluid of Smeargle’s tail secretions changes",
    },
    {
        icon: IconCheck,
        title: "Для детей дошкольного возраста",
        description: "Yanma is capable of seeing 360 degrees without",
    },
    {
        icon: IconCheck,
        title: "Для школьников",
        description: "The shell’s rounded shape and the grooves on its.",
    },
    {
        icon: IconCheck,
        title: "Подготовка к IELTS, TOEFL",
        description: "This Pokémon uses its flying ability to quickly chase",
    },
    {
        icon: IconCheck,
        title: "Разговорный клуб",
        description: "Combusken battles with the intensely hot flames it spews",
    },
];

export function Header() {
    const [myMode, setMyMode] = useState<CallBackModeType>("");
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
    const [scrollPosition, setScrollPosition] = useState(0);
    const [opened, { open, close }] = useDisclosure(false);
    const dispatch = useAppDispatch();

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    const openHandler = (value: CallBackModeType) => {
        setMyMode(value);
        open();
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const links = mockdata.map((item) => (
        <UnstyledButton className={classes.subLink} key={item.title}>
            <Group wrap="nowrap" align="flex-start">
                <ThemeIcon size={34} variant="default" radius="md" bg={theme.colors.dark[5]}>
                    <item.icon size={22} color={theme.colors.yellow[3]} />
                </ThemeIcon>
                <div>
                    <Text size="sm" fw={500}>
                        {item.title}
                    </Text>
                    <Text size="xs" c="dimmed">
                        {item.description}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    ));

    const handlerDrawerOrderLessons = (value: CallBackModeType) => {
        openHandler(value)
        closeDrawer()

    }

    return (
        <Box>
            {opened && <FullScreenModal opened={opened} close={close} mode={myMode} />}
            <header className={scrollPosition === 0 ? classes.header_top : classes.header_scrolled}>
                <Group justify="space-between" h="100%">
                    <Group visibleFrom="sm">
                        <Text
                            size="xl"
                            fw={700}
                            fs="32px"
                            c={
                                scrollPosition === 0
                                    ? "light-dark(var(--mantine-color-white), var(--mantine-color-white))"
                                    : "light-dark(var(--mantine-color-black), var(--mantine-color-white))"
                            }
                        >
                            English School
                        </Text>
                        {/* <ColorSchemeToggle /> */}
                    </Group>

                    <Group h="100%" gap={0} visibleFrom="sm">
                        <NavLink 
                            to="/"
                            className={scrollPosition === 0 ? classes.link_top : classes.link_scrolled}
                            onClick={() => dispatch(startLoading())}
                            style={({ isActive }) => ({
                                color: isActive ? `${theme.colors.yellow[6]}` : ``,
                              })}
                               
                        >
                            Главная
                        </NavLink >
                        <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                            <HoverCard.Target>
                                <NavLink 
                                    to="#"
                                    className={scrollPosition === 0 ? classes.link_top : classes.link_scrolled}
                                >
                                    <Center inline>
                                        <Box component="span" mr={5}>
                                            Наши курсы
                                        </Box>
                                        <IconChevronDown
                                            size={16}
                                            color={scrollPosition === 0 ? theme.colors.gray[1] : theme.colors.dark[9]}
                                        />
                                    </Center>
                                </NavLink >
                            </HoverCard.Target>

                            <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                                <Group justify="space-between" px="md">
                                    <Text fw={500}>Features</Text>
                                    <Anchor href="#" fz="xs">
                                        Посмотреть всё
                                    </Anchor>
                                </Group>

                                <Divider my="sm" />

                                <SimpleGrid cols={2} spacing={0}>
                                    {links}
                                </SimpleGrid>

                                {/* <div className={classes.dropdownFooter}>
                                    <Group justify="space-between">
                                        <div>
                                            <Text fw={500} fz="sm">
                                                Get started
                                            </Text>
                                            <Text size="xs" c="dimmed">
                                                Their food sources have decreased, and their numbers
                                            </Text>
                                        </div>
                                        <Button variant="default">Get started</Button>
                                    </Group>
                                </div> */}
                            </HoverCard.Dropdown>
                        </HoverCard>
                        {/* <NavLink 
                            to="/contact"
                            className={scrollPosition === 0 ? classes.link_top : classes.link_scrolled}
                            onClick={() => dispatch(startLoading())}
                            style={({ isActive }) => ({
                                color: isActive ? `${theme.colors.yellow[6]}` : ``,
                              })}
                        >
                            Контакты
                        </NavLink > */}
                        <NavLink 
                            to="/test"
                            className={scrollPosition === 0 ? classes.link_top : classes.link_scrolled}
                            onClick={() => dispatch(startLoading())}
                            style={({ isActive }) => ({
                                color: isActive ? `${theme.colors.yellow[6]}` : ``,
                              })}
                        >
                            Онлайн тест
                        </NavLink >
                    </Group>

                    <Group visibleFrom="sm">
                        <Button
                            className={classes.btn_2}
                            variant="default"
                            onClick={() => openHandler("Заказать звонок")}
                            radius="xl"
                            size="sm"
                            component="a"
                        >
                            Заказать звонок
                        </Button>

                        <Button
                            onClick={() => openHandler("Записаться на пробный урок")}
                            radius="xl"
                            className={classes.btn_1}
                            visibleFrom="md"
                            bg={theme.colors.red[7]}
                        >
                            Записаться на пробный урок
                        </Button>
                    </Group>
                    <Burger
                        opened={drawerOpened}
                        onClick={toggleDrawer}
                        hiddenFrom="sm"
                        color={
                            scrollPosition === 0
                                ? "light-dark(var(--mantine-color-white), var(--mantine-color-white))"
                                : "light-dark(var(--mantine-color-black), var(--mantine-color-white))"
                        }
                    />
                </Group>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title={
                    <Group>
                        <Title order={1} size="xl">
                            English School
                        </Title>
                        <ColorSchemeToggle />
                    </Group>
                }
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h="calc(100vh - 80px" mx="-md">
                    <Divider mb={20} />

                    <NavLink  to="/" className={classes.link_scrolled} onClick={() => dispatch(startLoading())}
                                     style={({ isActive }) => ({
                                        color: isActive ? `${theme.colors.yellow[6]}` : ``,
                                      })}
                    >
                        Главная 
                    </NavLink >

                    <UnstyledButton className={classes.link_scrolled} onClick={toggleLinks}>
                        <Center inline>
                            <Box component="span" mr={5}>
                            Наши курсы
                            </Box>
                            <IconChevronDown size={16} color={theme.colors.blue[6]} />
                        </Center>
                    </UnstyledButton>
                    <Collapse in={linksOpened}>{links}</Collapse>
                    {/* <NavLink  to="/contact" className={classes.link_scrolled} onClick={() => dispatch(startLoading())}
                                     style={({ isActive }) => ({
                                        color: isActive ? `${theme.colors.yellow[6]}` : ``,
                                      })}
                    >
                        Контакты
                    </NavLink > */}

                    <NavLink  to="/test" className={classes.link_scrolled} onClick={() => dispatch(startLoading())} 
                                     style={({ isActive }) => ({
                                        color: isActive ? `${theme.colors.yellow[6]}` : ``,
                                      })}
                    >
                        Онлайн тест
                    </NavLink >

                    <Divider mt={20} mb={40} />

                    <Flex justify="center" direction="column" gap={20} pb="xl" px="md">
                        <Button
                            className={classes.btn_2}
                            variant="default"
                            onClick={() => handlerDrawerOrderLessons("Заказать звонок")}
                            radius="xl"
                            size="sm"
                            component="a"
                        >
                            Заказать звонок
                        </Button>

                        <Button
                            variant="default"
                            onClick={() => handlerDrawerOrderLessons("Записаться на пробный урок")}
                            radius="xl"
                            className={classes.btn_1}
                        >
                            Записаться на пробный урок
                        </Button>
                    </Flex>
                </ScrollArea>
            </Drawer>
        </Box>
    );
}
