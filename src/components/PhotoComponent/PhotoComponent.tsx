import { Container, Grid, useMantineTheme, Image, Flex, Group, Badge, Title } from "@mantine/core";
import classes from "./PhotoComponent.module.css";

export const PhotoComponent = () => {
    const theme = useMantineTheme();
    return (
        <Container my="xl" size="xl" mt={150}>
            <Flex justify="center" align="center" direction="column" mt={150}>
                <Group justify="center">
                    <Badge variant="default" size="lg" bg={theme.colors.violet[4]} c="white">
                        фото
                    </Badge>
                </Group>
                <Title order={2} className={classes.myTitle} ta="center" mt="sm">
                    Фотогалерея:
                </Title>
            </Flex>
            <Grid grow gutter="lg" mt={50}>
                <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                    <Image src="/images/img/1.jpg" />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                    <Image src="/images/img/2.jpg" />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                    <Image src="/images/img/3.jpg" />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                    <Image src="/images/img/4.jpg" />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                    <Image src="/images/img/4.jpg" />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                    <Image src="/images/img/5.jpg" />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                    <Image src="/images/img/6.jpg" />
                </Grid.Col>
            </Grid>
        </Container>
    );
};
