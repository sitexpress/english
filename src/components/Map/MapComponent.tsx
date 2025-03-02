import { AspectRatio, Badge, Container, Flex, Group, Title, Text } from "@mantine/core";
import classes from "./MapComponent.module.css";

export function MapComponent() {

    return (
        <Container pt={100} mb={30} size="xl">  
            <Flex justify="center" align="center" direction="column">
                <Group justify="center">
                    <Badge
                        variant="gradient"
                        size="lg"
                        gradient={{ from: "#3F4AB7", to: "rgb(96, 109, 255)", deg: 64 }}
                    >
                        Contacts
                    </Badge>
                </Group>

                <Title order={2} className={classes.title} ta="center" mt="sm">
                    Want to get in touch?
                </Title>

                <Text c="dimmed" className={classes.description} ta="center" mt="md">
                    Feel free to ask any question in the live chat
                    <br /> or
                    <br />
                    you can reach via the contact form
                </Text>
            </Flex>
            <Title order={2} fw={900} fz={24} ta="center" pt="xl" mb="sm">
                Location
            </Title>
            <Container size="lg" className={classes.map_container}>
                <AspectRatio ratio={16 / 9}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru"
                        title="Google map"
                        style={{ border: 0 }}
                    />
                </AspectRatio>
            </Container>
        </Container>
    );
}
