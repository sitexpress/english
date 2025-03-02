import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from "@tabler/icons-react";
import { ActionIcon, Container, Group, Text,  } from "@mantine/core";
import classes from "./FooterLinks.module.css";

const data = [
    {
        title: "Курсы",
        links: [
            { label: "Для начинающих", link: "/" },
            { label: "Для продолжающих", link: "/" },
            { label: "Дошкольный возраст", link: "/" },
            { label: "Для продолжающих", link: "/" },
            { label: "Для продолжающих", link: "/" },
            // { label: "Support", link: "#" },
            // { label: "Forums", link: "#" },
        ],
    },
    {
        title: "Контакты",
        links: [
            { label: "Тел: +79876543221", link: "#" },
            { label: "Тел: +79876543221", link: "#" },
            { label: "Адрес: ул.Английская д.42", link: "#" },
            { label: "Releases", link: "#" },
        ],
    },
    {
        title: "Онлайн тест",
        links: [
            { label: "Begginer", link: "#" },
            { label: "Junior", link: "#" },
            { label: "Senior", link: "#" },
        ],
    },
];

type FooterLinks = {
    mode: "main-page" | "test-page" | "result-page" | "contact-page" | "result-page"
}

export function FooterLinks({mode}) {
    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <Text<"a">
                key={index}
                className={classes.link}
                component="a"
                href={link.link}
                // onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </Text>
        ));

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
        );
    });

    return (
        <footer className={classes.footer} style={mode === "test-page" || mode === "result-page"? {marginTop: "0px"} : {marginTop: "120px"}}>
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    {/* <Title order={2} size="lg">
                        Ensysta Inc.
                    </Title> */}
                    <Text
                        size="lg"
                        fw={700}
                        variant="gradient"
                        component="span"
              
                    >
                        English School.
                    </Text>
                    {/* <Text size="xs" c="dimmed" className={classes.description}>
                        Visualize Your Progress. We deliver managing and supervising instruments to make construction
                        processes better..
                    </Text> */}
                    <Text size="xs" c="dimmed" className={classes.description}>
                        Твоя школа английского языка.
                    </Text>
                    <Text pt={10} size="xs" c="dimmed" className={classes.description}>
                    Инвестируйте в себя и свое будущее. Начните сегодня - ваш успех начинается с первого
                    слова!
                    </Text>
                </div>
                <div className={classes.groups}>{groups}</div>
            </Container>

            <Container className={classes.afterFooter}>
                <Text c="dimmed" size="sm">
                    © 2024 English School. Все права защищены.  |  Created by siteXpress
                </Text>

                <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandTwitter size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandYoutube size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon size="lg" color="gray" variant="subtle">
                        <IconBrandInstagram size={18} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
    );
}
