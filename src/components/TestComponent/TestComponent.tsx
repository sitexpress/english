import { Button, Flex, Text, Title, useMantineTheme } from "@mantine/core";
import classes from "./TestComponent.module.css";

export function TestComponent() {
    const theme = useMantineTheme();
    return (
        <Flex justify="center" mt={150}>
            <div className={classes.wrapper}>
                <div className={classes.body}>
                    <Title className={classes.title}>Онлайн тест</Title>
                    <Text fw={500} fz="lg" mb={5}>
                    Узнайте свой уровень английского — пройдите тест и запишитесь на бесплатный пробный урок
                    </Text>
                    <Text fz="sm" mt="sm" ta="right">--длительность теста: 50 минут</Text>

                    <div className={classes.controls}>
                        <a href="/test">
                            <Button size="md" radius="xl" variant="default" bg={theme.colors.yellow[4]}>
                                Пройти тест
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </Flex>
    );
}
