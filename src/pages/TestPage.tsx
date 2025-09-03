import { Header } from "@/components/Header/Header";
import { FooterLinks } from "@/components/Footer/FooterLinks";
import { HeroImageBackground } from "@/components/HeroImageBackground/HeroImageBackground";
import { useScrollIntoView } from "@mantine/hooks";

import { Badge, Flex, Group, Title, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { ScrollRestoration } from "react-router-dom";
import { RadioComponent } from "@/Radio2/RadioComponent";
import { FeaturesAsymmetrical } from "@/components/FeaturesAsymmetrical/FeaturesAsymmetrical";
import { FinalStart } from "@/components/Final/FinalStart";

export function TestPage() {
    const [fullSize, setFullsize] = useState<boolean>(false);
    const [isStarted, setIsStarted] = useState(false);
    const theme = useMantineTheme();

    const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
        offset: 60,
    });

    console.log("fullSize:",fullSize)
    console.log("isStarted:",isStarted)

    return (
        <>
            <ScrollRestoration />
            <Header />
            <HeroImageBackground
                page="test"
                scrollIntoView={scrollIntoView}
                mode="start"
                isStarted={isStarted}
                setIsStarted={setIsStarted}
                fullSize={fullSize}
                setFullsize={setFullsize}
            />

            {/* <Divider label="Ensysta Inc." pt={40} mb={50} /> */}
            {isStarted && (
                <Flex
                    justify="flex-end"
                    align="center"
                    direction="column"
                    ref={targetRef}
                    mt={170}
                    mb={0}
                    pl={20}
                    pr={20}
                >
                    <Group justify="center">
                        <Badge variant="default" size="lg" bg={theme.colors.yellow[5]}>
                            Тест
                        </Badge>
                    </Group>

                    <Title order={2} size="18px" fw="900" ta="center" mt="sm">
                        Постарайтесь ответить на все вопросы:
                    </Title>
                </Flex>
            )}
            {!isStarted && (
                <FeaturesAsymmetrical
                    mode="tests"
                    targetRef={targetRef}
                    fullSize={fullSize}
                    setFullsize={setFullsize}
                    isStarted={isStarted}
                    setIsStarted={setIsStarted}
                />
            )}
            {isStarted && <RadioComponent />}
            {isStarted && <FinalStart mode="final" isStarted={isStarted} setIsStarted={setIsStarted} />}
            <FooterLinks mode="test-page" />
        </>
    );
}
