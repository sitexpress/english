import { IconHeart } from "@tabler/icons-react";
import { AspectRatio, Badge, Button, Card, Center, Group, Image, Text, useMantineTheme } from "@mantine/core";
import classes from "./BadgeCard.module.css";
import { modals } from "@mantine/modals";
import CallBackForm from "../CallBackForm/CallBackForm";
import { useState } from "react";
import { BadgesType } from "../FeaturesAsymmetrical/FeaturesAsymmetrical";

type BadgeCard = {
    image: string;
    title: string;
    country: string;
    description: string;
    fitted: string;
    discount: number;
    price: number;
    badges: BadgesType[];
};

export const BadgeCard: React.FC<BadgeCard> = ({
    image,
    title,
    country,
    description,
    fitted,
    discount,
    price,
    badges,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const items = { image, title, country, description, fitted, discount, price, badges };
    const theme = useMantineTheme();
    const featuresB = badges.map((feature) => (
        <Center key={feature.label}>
            <feature.icon size={22} className={classes.icon} stroke={1.5} />
            <Text size="xs" c="dimmed">
                {feature.label}
            </Text>
        </Center>
    ));

    const openModal = (titleValue: string) => {
        setIsLoading(true);
        modals.open({
            title: (
                <Text fw={500} size="xl" ta="center" c="dark.8" pl="md">
                    Оставить заявку:
                </Text>
            ),
            children: (
                <>
                    <Text size="sm" ta="center" c="dimmed">
                        Пожалуйста заполните форму и мы с Вами свяжемся в ближайшее время.
                    </Text>
                    <CallBackForm
                        mode="Записаться на определённый курс"
                        setClose={() => modals.closeAll()}
                        {...items}
                    />
                </>
            ),
        });
        setIsLoading(false);
    };

    return (
        <Card withBorder radius="md" p="md" className={classes.card}>
            <Card.Section>
                <Image src={image} alt={title} height={180} />
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
                <Group justify="space-between" mt="md">
                    <div>
                        <Text fz="lg" fw={500}>
                            {title}
                        </Text>
                        <Text fz="xs" c="dimmed">
                            Free consultation
                        </Text>
                    </div>
                    <div>
                        <Badge size="sm" variant="light">
                            {country}
                        </Badge>
                        <Badge variant="outline" ml="xs">
                            ${discount}% off
                        </Badge>
                    </div>
                </Group>
                <Text fz="sm" mt="xs">
                    {description}
                </Text>
                <Text mt="md" className={classes.label} c="dimmed">
                    {fitted}
                </Text>
            </Card.Section>

            {/* <Card.Section className={classes.section}>
                <Group gap={7} mt={5}>
                    {featuresB}
                </Group>
            </Card.Section> */}

            <Card.Section className={classes.section}>
                <Group gap={30} mt="xs">
                    {!price ? (
                        <div>
                            <Text mb={5} fz="sm" c="dimmed" fw={500} style={{ lineHeight: 1 }}>
                                From:
                            </Text>
                            <Text fz="xl" fw={700} td="line-through" style={{ lineHeight: 1 }}>
                                $ 300
                            </Text>
                            <Text mt={5} fz="sm" c="dimmed" fw={600} style={{ lineHeight: 1 }}>
                                Included with service
                            </Text>
                        </div>
                    ) : (
                        <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
                            {Number(price).toFixed(2)}р.
                        </Text>
                    )}
                    {/* <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
                         $ {Number(price).toFixed(2)}
                        </Text> */}

                    <Button
                        style={{ flex: 1 }}
                        loading={isLoading}
                        radius="md"
                        onClick={() => openModal(title)}
                        variant="default"
                        bg={theme.colors.yellow[5]}
                    >
                        оставить заявку
                    </Button>
                </Group>
            </Card.Section>
        </Card>
    );
};
