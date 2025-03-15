import { Badge, Flex, Group, Text, Title, useMantineTheme } from "@mantine/core";
import classes from "./StatsGroup.module.css";

const data = [
    {
        title: "Более",
        stats: "3",
        description: "лет успешной работы",
    },
    {
        title: "Более",
        stats: "3000",
        description: "студентов, успешно закончивших курс",
    },
    {
        title: "Более",
        stats: "1200",
        description: "студентов, успешно сдавших Кембриджские экзамены",
    },
    {
        title: "",
        stats: "10",
        description: "высококвалифицированных преподавателей",
    },
];

export const StatsGroup = () => {
    const theme = useMantineTheme();
    const stats = data.map((stat) => (
        <div key={stat.title} className={classes.stat}>
            <Text className={classes.title} c="white">{stat.title}</Text>
            <Text className={classes.count} c="white">{stat.stats}</Text>
            <Text className={classes.description} c="white">{stat.description}</Text>
        </div>
    ));
    return (
        <Flex justify="center" mt={150} >
            <Flex justify="center" direction="column" gap={100}>
                <Flex justify="center" align="center" direction="column">
                    <Group justify="center">
                        <Badge variant="default" size="lg" bg="#53377A" c="white">
                            Статистика
                        </Badge>
                    </Group>

                    <Title order={2} className={classes.myTitle} ta="center" mt="sm">
                        English School в цифрах:
                    </Title>
                </Flex>
                <Group className={classes.root} ta="center" justify="center" >
                    {stats}
                </Group>
            </Flex>
        </Flex>
    );
};
