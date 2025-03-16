import { Carousel } from "@mantine/carousel";
import { Badge,  Flex, Group, Paper, Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import "@mantine/carousel/styles.css";
import classes from "./CardsCarousel.module.css";

interface CardProps {
    image: string;
    title: string;
    category: string;
}

function Card({ image, title, category }: CardProps) {
    const theme = useMantineTheme()
    return (
        <Paper shadow="md" radius="md" style={{ backgroundImage: `url(${image})` }} className={classes.card}>
            <div style={{background: `#7950f2`, opacity: "0.9", padding: "5px", borderRadius: "10px"}}>
                <Text className={classes.category} size="xs">
                    {category}
                </Text>
                <Title order={3} className={classes.title}>
                    {title}
                </Title>  
            </div>
        </Paper>
    );
}

const data = [
    {
        image: "/images/img-1/11.jpg",
        title: "Анна Иванова",
        category: "Директор",
    },
    {
        image: "/images/img-1/22.jpg",
        title: "Мария Петрова",
        category: "Преподаватель",
    },
    {
        image: "/images/img-1/11.jpg",
        title: "Анна Иванова",
        category: "Директор",
    },
    {
        image: "/images/img-1/22.jpg",
        title: "Мария Петрова",
        category: "Преподаватель",
    },
    {
        image: "/images/img-1/11.jpg",
        title: "Анна Иванова",
        category: "Директор",
    },
    {
        image: "/images/img-1/22.jpg",
        title: "Мария Петрова",
        category: "Преподаватель",
    },
    {
        image: "/images/img-1/11.jpg",
        title: "Анна Иванова",
        category: "Директор",
    },
    {
        image: "/images/img-1/22.jpg",
        title: "Мария Петрова",
        category: "Преподаватель",
    },
    {
        image: "/images/img-1/11.jpg",
        title: "Анна Иванова",
        category: "Директор",
    },
    {
        image: "/images/img-1/22.jpg",
        title: "Мария Петрова",
        category: "Преподаватель",
    },
    {
        image: "/images/img-1/11.jpg",
        title: "Анна Иванова",
        category: "Директор",
    },
    {
        image: "/images/img-1/22.jpg",
        title: "Мария Петрова",
        category: "Преподаватель",
    },
    {
        image: "/images/img-1/11.jpg",
        title: "Анна Иванова",
        category: "Директор",
    },
    {
        image: "/images/img-1/22.jpg",
        title: "Мария Петрова",
        category: "Преподаватель",
    },
];

export function CardsCarousel() {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = data.map((item) => (
        <Carousel.Slide key={item.title}>
            <Card {...item} />
        </Carousel.Slide>
    ));

    return (
        <Flex justify="center" mt={150} direction="column">
            <Flex justify="center" direction="column">
                <Flex justify="center" align="center" direction="column">
                    <Group justify="center">
                        <Badge variant="default" size="lg"   bg={theme.colors.violet[4]} c="white">
                            Преподаватели
                        </Badge>
                    </Group>

                    <Title order={2} ta="center" mt="sm">
                        Преподаватели в English School:
                    </Title>
                </Flex>
            </Flex>
            <Carousel
                slideSize={{ xs:"100%", sm:"33.3%", lg: "20%" }}
                slideGap={{ base: 2, sm: "xl" }}
                align="start"
                slidesToScroll={1}
                m={20}
                mt={70}
            >
                {slides}
            </Carousel>
        </Flex>
    );
}
