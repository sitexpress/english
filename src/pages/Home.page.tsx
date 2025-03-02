import { Header } from "@/components/Header/Header";
// import { Welcome } from "../components/Welcome/Welcome";
import { CardsCarousel } from "@/components/CardsCarousel/CardsCarousel";
import { FeaturesAsymmetrical } from "@/components/FeaturesAsymmetrical/FeaturesAsymmetrical";
import { FooterLinks } from "@/components/Footer/FooterLinks";
import { HeroImageBackground } from "@/components/HeroImageBackground/HeroImageBackground";
import { Box, LoadingOverlay } from "@mantine/core";
import { useDisclosure, useScrollIntoView } from "@mantine/hooks";
import { StatsGroup } from "@/components/Stats/StatsGroup";
import { PhotoComponent } from "@/components/PhotoComponent/PhotoComponent";
import { TestComponent } from "@/components/TestComponent/TestComponent";
import { useAppSelector } from "@/store/hooks";
import { ScrollRestoration, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { startLoading, stopLoading } from "@/features/formSlice";
import { Banner } from "@/components/Banner/Banner";

export function HomePage() {
    // const hideNotificationsHandler = (cookieNotificationId: string) => {
    //     notifications.hide(cookieNotificationId);
    //     // notifications.cleanQueue();
    //     notifications.clean();
    // };
    // useEffect(() => {
    //     setTimeout(() => {
    //         const cookieNotificationId = notifications.show({
    //             title: "Cookie",
    //             message: (
    //                 <Group>
    //                     We use cookies for essential website functions and to better understand how you use our site, so
    //                     we can create the best possible experience for you.
    //                     <Button variant="gradient" onClick={() => hideNotificationsHandler(cookieNotificationId)}>
    //                         <IconRosetteDiscountCheckFilled />
    //                         <Text pl="xs"> Got it</Text>
    //                     </Button>
    //                 </Group>
    //             ),
    //             color: "light-dark(var(--mantine-color-gray-8) , var(--mantine-color-dark-6))",
    //             autoClose: false,
    //             withCloseButton: false,
    //             closeButtonProps: IconCookie,
    //             position: "bottom-center",
    //             icon: <IconCookieFilled style={{ width: rem(48), height: rem(48) }} />,
    //             loading: false,
    //             withBorder: true,
    //             // classNames: classes,
    //         });
    //     }, 0);
    // }, []);

    const [visible, { toggle }] = useDisclosure(false);
    const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
        offset: 60,
    });

    return (
        <>
        <ScrollRestoration/>
            <Header />
            <HeroImageBackground page="home" scrollIntoView={scrollIntoView} />
            <FeaturesAsymmetrical mode="badge-cards" targetRef={targetRef} />
            {/* <FeaturesAsymmetrical mode="features-asymmetrical"/> */}
            <StatsGroup />

            {/* <Divider label="Ensysta Inc." pt={40} mb={50} /> */}
            {/* <MapComponent />
            <GetInTouch /> */}
            <Banner/>
            <PhotoComponent />
            <CardsCarousel />
            <TestComponent />
            <FooterLinks mode="main-page" />
        </>
    );
}
