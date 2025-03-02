import {
    IconBrandWhatsapp,
    IconDeviceMobileVibration,
    IconMail,
    IconPhone,
} from "@tabler/icons-react";
import {
    Anchor,
    Badge,
    Button,
    Card,
    Container,
    Flex,
    Group,
    SimpleGrid,
    Text,
    Title,
} from "@mantine/core";
import classes from "./FeaturesCards.module.css";
import { FullScreenModal } from "../FullScreenModal/FullScreenModal";
import { useDisclosure } from "@mantine/hooks";

const mockdata = [
    {
        title: "Talk to Sales",
        description: "Interested in Ensysta's services? Just pick up a phone to chat with a member of our sales team.",
        additional: "+1 (646) 413-9075",
        icon: IconDeviceMobileVibration,
    },
    {
        title: "Contact Customer Support",
        description: "Use our contact form.",
        additional: "Send",
        icon: IconMail,
    },
    {
        title: "Whatsapp Support",
        description: "Sometimes you need a little help from our friends. Don't worry, we are here for you.",
        additional: "Open",
        icon: IconBrandWhatsapp,
    },
];

export function FeaturesCards() {
    // const theme = useMantineTheme();
  const [opened, { open, close }] = useDisclosure(false);

    const features = mockdata.map((feature, i) => (
        <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
            { opened && <FullScreenModal opened={opened} close={close}/>}
            <feature.icon
                size={50}
                stroke={2}
                // color={theme.colors.blue[6]}
                color="rgb(96, 109, 255)"
            />
            <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                {feature.title}
            </Text>
            <Text fz="sm" c="dimmed" mt="sm" pb="xl">
                {feature.description}
            </Text>
            {i === 0 ? (
                <Flex justify="start" gap="sm" c="primary" className={classes.additional}>
                    <IconPhone color="rgb(96, 109, 255)" />
                    <Anchor
                        variant="gradient"
                        href="tel:+16464139075"
                        gradient={{ from: "#3F4AB7", to: "rgb(96, 109, 255)", deg: 64 }}
                        target="_blank"
                    >
                        {feature.additional}
                    </Anchor>
                </Flex>
            ) : i === 1 ? (
                <Button
                    variant="gradient"
                    color="dark"
                    mt={10}
                    className={classes.additional}
                    gradient={{ from: "#3F4AB7", to: "rgb(96, 109, 255)", deg: 64 }}
                    onClick={open}
                >
                    <Anchor href="#"  underline="never" c="white" fw={500}>
                        {feature.additional}
                    </Anchor>
                </Button>
            ) : (
                <Button
                    variant="gradient"
                    color="dark"
                    mt={10}
                    className={classes.additional}
                    gradient={{ from: "#3F4AB7", to: "rgb(96, 109, 255)", deg: 64 }}
                >
                    <Anchor href="https://wa.me/16464139075" target="_blank" underline="never" c="white" fw={500}>
                        {feature.additional}
                    </Anchor>
                </Button>
            )}
        </Card>
    ));

    return (
        <Container size="lg" pt={100}>
            <Group justify="center">
                <Badge variant="gradient" size="lg" gradient={{ from: "#3F4AB7", to: "rgb(96, 109, 255)", deg: 64 }}>
                    Contacts
                </Badge>
            </Group>

            <Title order={2} className={classes.title} ta="center" mt="sm">
                Want to get in touch?
            </Title>

            <Text c="dimmed" className={classes.description} ta="center" mt="md">
                We'd love to hear from you. Here's how you can reach us...
            </Text>

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
                {features}
            </SimpleGrid>
        </Container>
    );
}
