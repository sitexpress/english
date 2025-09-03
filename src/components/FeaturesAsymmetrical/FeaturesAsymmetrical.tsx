import {
    Icon,
    IconBalloon,
    IconBarrierBlock,
    IconBrandDocker,
    IconBuildings,
    IconBulldozer,
    IconCake,
    IconCapture,
    IconChartColumn,
    IconCylinder,
    IconGlobe,
    IconLeaf2,
    IconMessageChatbot,
    IconProps,
    IconRotate3d,
    IconStopwatch,
} from "@tabler/icons-react";
import { Badge, Container, Flex, Group, SimpleGrid, Title, useMantineTheme } from "@mantine/core";
import classes from "./FeaturesAsymmetrical.module.css";
import { BadgeCard } from "../BadgeCard/BadgeCard";
import { ForwardRefExoticComponent, RefAttributes } from "react";

// interface FeatureProps extends React.ComponentPropsWithoutRef<"div"> {
//     icon: React.FC<any>;
//     title: string;
//     description: string;

// }

export type BadgesType = {
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
    label: string;
};

export type BadgesMockdataType = {
    image: string;
    title: string;
    country: string;
    description: string;
    fitted: string;
    discount: number;
    price: number;
    badges: BadgesType[];
};

// function Feature({ icon: Icon, title, description, className, fullSize, setFullsize, ...others }: FeatureProps) {
//     return (
//         <div className={classes.feature} {...others}>
//             <div className={classes.overlay} />

//             <div className={classes.content}>
//                 <Icon size={38} className={classes.icon} stroke={1.5} />
//                 <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title_sub}>
//                     {title}
//                 </Text>
//                 <Text c="dimmed" fz="sm">
//                     {description}
//                 </Text>

//                 <Button
//                     variant="gradient"
//                     color="dark"
//                     mt={10}
//                     gradient={{ from: "#3F4AB7", to: "rgb(96, 109, 255)", deg: 64 }}
//                 >
//                     Book Now
//                 </Button>
//             </div>
//         </div>
//     );
// }

// const mockdata = [
//     {
//         icon: IconDrone,
//         title: "AERIAL PHOTOGRAPHY",
//         description:
//             "With the latest high-tech unmanned aerial equipment, obtaining a bird's-eye view has never been simpler!",
//     },
//     {
//         icon: IconBrandYoutube,
//         title: "VIDEO EDITING",
//         description:
//             "Transform a routine moment into a customized cinematic experience. Life has never seemed so vibrant!",
//     },
//     {
//         icon: IconFrustum,
//         title: "3D MAPPING",
//         description:
//             "Reduce those man-hours by 50%! Land surveying can be completed in minutes by utilizing pre-mapped flight plans even before we reach the job site.",
//     },
// ];

export const badgesMockdata: BadgesMockdataType[] = [
    {
        image: "/images/img/3.jpg",
        title: "Для начинающих изучать",
        country: "быстрй старт",
        description:
            "Освойте основы английского с нуля! Простые и понятные уроки, практика произношения и первые диалоги. Начните говорить уверенно уже с первого занятия!.",
        fitted: "Подходит для тех кто начинает",
        discount: 5,
        price: 400,
        badges: [
            { icon: IconBuildings, label: "Aerial imagery" },
            { icon: IconCake, label: "Birthdays" },
            { icon: IconLeaf2, label: "Nature" },
            { icon: IconBalloon, label: "Weddings" },
            { icon: IconChartColumn, label: "Gigs" },
        ],
    },
    {
        image: "/images/img/4.jpg",
        title: "Для продолжающих изучать",
        country: "уверенное продолжение",
        description:
            "Углубите знания, расширьте словарный запас и улучшите грамматику. Интенсивная практика и актуальные темы для уверенного общения на английском.",
        fitted: "Подходит для тех кто продолжает изучать",
        discount: 5,
        price: 400,
        badges: [
            { icon: IconBuildings, label: "Real estate" },
            { icon: IconBuildings, label: "Aerial imagery" },
            { icon: IconCylinder, label: "Other objects" },
        ],
    },
    {
        image: "/images/img/1.jpg",
        title: "Для детей дошкольного возраста",
        country: "дети",
        description:
            "Игровые занятия для малышей! Учим английский через песни, игры и творчество. Развиваем интерес к языку с ранних лет.",
        fitted: "Подходит для детей с 3х лет",
        discount: 5,
        price: 300,
        badges: [
            { icon: IconBarrierBlock, label: "Construction" },
            { icon: IconMessageChatbot, label: "Support included" },
            { icon: IconBulldozer, label: "On site" },
            { icon: IconCapture, label: "Capture real-time" },
        ],
    },
    {
        image: "/images/img/5.jpg",
        title: "Для школьников",
        country: "школа",
        description:
            "Поможем подтянуть школьную программу, улучшить оценки и подготовиться к экзаменам. Увлекательные и эффективные уроки.",
        fitted: "Подходит для всех классов",
        discount: 5,
        price: 450,
        badges: [
            { icon: IconBarrierBlock, label: "Construction" },
            { icon: IconRotate3d, label: "3D Models" },
            { icon: IconStopwatch, label: "Fast delivery" },
            { icon: IconMessageChatbot, label: "Support included" },
            { icon: IconBulldozer, label: "On site" },
            { icon: IconCapture, label: "Capture real-time" },
        ],
    },
    {
        image: "/images/img/10.jpg",
        title: "Подготовка к IELTS, TOEFL",
        country: "экзамены",
        description: "Обеспечим высокий балл на экзаменах! Интенсивная подготовка, пробные тесты и советы экспертов.",
        fitted: "Подходит для тех кто готовится к экзаменам IELTS, TOEFL",
        discount: 5,
        price: 450,
        badges: [
            { icon: IconBarrierBlock, label: "Construction" },
            { icon: IconGlobe, label: "Surveying" },
            { icon: IconStopwatch, label: "Fast delivery" },
            { icon: IconMessageChatbot, label: "Support included" },
            { icon: IconBulldozer, label: "On site" },
            { icon: IconCapture, label: "Capture real-time" },
            { icon: IconBrandDocker, label: "Environmental monitoring" },
        ],
    },
    {
        image: "/images/img/11.jpg",
        title: "Разговорный клуб",
        country: "практика",
        description:
            "Практикуйте английский в живом общении! Обсуждаем интересные темы, снимаем языковой барьер и улучшаем fluency.",
        fitted: "Подходит и необходим всем и на всех этапах",
        discount: 5,
        price: 450,
        badges: [
            { icon: IconBarrierBlock, label: "Construction" },
            { icon: IconGlobe, label: "Surveying" },
            { icon: IconStopwatch, label: "Fast delivery" },
            { icon: IconMessageChatbot, label: "Support included" },
            { icon: IconBulldozer, label: "On site" },
            { icon: IconCapture, label: "Capture real-time" },
            { icon: IconBrandDocker, label: "Environmental monitoring" },
        ],
    },
];
export const testGradesData = [
    {
        image: "/images/grades/a1.jpg",
        title: "Для продолжающих изучать",
        country: "быстрй старт",
        description: "Тест ориентирован на тех кто проходил уровень А0 и сейчас продолжает изучать английский",
        fitted: "A1",
    },
    {
        image: "/images/grades/a2.jpg",
        title: "Для продолжающих изучать",
        description: "Тест ориентирован на тех кто  проходил уровень А1 и сейчас продолжает изучать английский",
        fitted: "А2",
    },
    {
        image: "/images/grades/b1.jpg",
        title: "Для тех у кого средний уровень",
        description: "Тест ориентирован на тех кто изучал английский но застрял на уровне intermediate",
        fitted: "B1",
    },
];

type FeaturesAsymmetricalType = {
    mode: "features-asymmetrical" | "badge-cards" | "tests";
    targetRef?: any;
    isStarted?: boolean;
    setIsStarted?: (value: boolean) => void;
    fullSize?: boolean;
    setFullsize?: (value: boolean) => void;
};

export const FeaturesAsymmetrical: React.FC<FeaturesAsymmetricalType> = ({
    mode,
    targetRef,
    isStarted,
    setIsStarted,
    fullSize,
    setFullsize,
}) => {
    // const items = mockdata.map((item) => <Feature {...item} key={item.title} />);
    const badgeItems = badgesMockdata.map((item, index) => (
        isStarted && setIsStarted && <BadgeCard key={index} {...item} mode="badge-cards" isStarted={isStarted} setIsStarted={setIsStarted} />
    ));
    const testItems = testGradesData.map((item, index) => (
        isStarted && setIsStarted &&  <BadgeCard
            key={index}
            {...item}
            mode="tests"
            fullSize={fullSize}
            setFullsize={setFullsize}
            isStarted={isStarted}
            setIsStarted={setIsStarted}
        />
    ));

    const theme = useMantineTheme();

    return (
        <Flex
            justify="center"
            align="center"
            direction="column"
            pt={{ base: 30, sm: 30, md: 30, lg: 10, xg: 110, xl: 100 }}
            mb={30}
            gap={100}
        >
            <Flex justify="center" align="center" direction="column" ref={targetRef}>
                {mode === "tests" ? (
                    <>
                        <Group justify="center">
                            <Badge variant="default" size="lg" bg={theme.colors.violet[4]} c="white">
                                Тестирование
                            </Badge>
                        </Group>

                        <Title order={2} className={classes.title} ta="center" mt="sm">
                            Выберите уровень теста:
                        </Title>
                    </>
                ) : (
                    <>
                        <Group justify="center">
                            <Badge variant="default" size="lg" bg={theme.colors.violet[4]} c="white">
                                Услуги
                            </Badge>
                        </Group>

                        <Title order={2} className={classes.title} ta="center" mt="sm">
                            Все наши услуги тут:
                        </Title>
                    </>
                )}
            </Flex>
            <Container size="xl">
                <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={50}>
                    {mode === "badge-cards" ? badgeItems : testItems}
                </SimpleGrid>
            </Container>
        </Flex>
    );
};
