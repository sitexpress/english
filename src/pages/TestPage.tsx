import { Header } from "@/components/Header/Header";
import { FooterLinks } from "@/components/Footer/FooterLinks";
import { HeroImageBackground } from "@/components/HeroImageBackground/HeroImageBackground";
import { useScrollIntoView } from "@mantine/hooks";

import { RadioComponent2 } from "@/Radio2/RadioComponent2";
import { Badge, Flex, Group,  Title,  useMantineTheme } from "@mantine/core";
import { FinalStart } from "@/components/Final/FinalStart";
import { useState } from "react";
import { ScrollRestoration } from "react-router-dom";


export function TestPage() {
    const [isStarted, setIsStarted] = useState(false);
    const theme = useMantineTheme();
    const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
        offset: 60,
    });



    return (
        <>
        <ScrollRestoration/>
            <Header />
            <HeroImageBackground
                page="test"
                scrollIntoView={scrollIntoView}
                mode="start"
                isStarted={isStarted}
                setIsStarted={setIsStarted}
            />

            {/* <Divider label="Ensysta Inc." pt={40} mb={50} /> */}

            {isStarted && (
                <Flex justify="center" align="center" direction="column" ref={targetRef} mt={200}>
                    <Group justify="center">
                        <Badge variant="default" size="lg" bg={theme.colors.yellow[5]}>
                            Тест
                        </Badge>
                    </Group>

                    <Title order={2} size="24px" fw="900" ta="center" mt="sm">
                        Постарайтесь ответить на все вопросы:
                    </Title>
                </Flex>
            )}
            {isStarted && (
                <Flex mt={0} justify="center" direction="column" wrap="wrap" align="center">
                    <RadioComponent2 quest={1} />
                    <RadioComponent2 quest={2} />
                    <RadioComponent2 quest={3} />
                    <RadioComponent2 quest={4} />
                    <RadioComponent2 quest={5} />
                    <RadioComponent2 quest={6} />
                    <RadioComponent2 quest={7} />
                    <RadioComponent2 quest={8} />
                    <RadioComponent2 quest={9} />
                    <RadioComponent2 quest={10} />
                </Flex>
            )}

            {isStarted && <FinalStart mode="final" isStarted={isStarted} setIsStarted={setIsStarted} />}

            <FooterLinks mode="test-page" />
        </>
    );
}
