import { Flex, Text, Title } from "@mantine/core";
import classes from "./Welcome.module.css";

export function Welcome() {
    return (
        <Flex pt={100} mb={300} justify="center" direction="column">
            <Title className={classes.title} ta="center" mt={100}>
                Welcome to{" "}
                <Text inherit variant="gradient" component="span" gradient={{ from: "pink", to: "yellow" }}>
                    Ensysta Inc.
                </Text>
            </Title>
            <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                Visualize Your Progress. We deliver managing and supervising instruments to make construction processes
                better..
            </Text>
        </Flex>
    );
}
