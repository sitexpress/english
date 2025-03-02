import { Header } from "@/components/Header/Header";
import { FooterLinks } from "@/components/Footer/FooterLinks";
import { HeroImageBackground } from "@/components/HeroImageBackground/HeroImageBackground";
import { useScrollIntoView } from '@mantine/hooks';
import { ScrollRestoration } from "react-router-dom";

export const ResultPage = () => {
    const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
        offset: 60, 
      });

      return (
        <>
        <ScrollRestoration/>
            <Header />
            <HeroImageBackground page="result" scrollIntoView={scrollIntoView} />
            {/* <Divider label="Ensysta Inc." pt={40} mb={50} /> */}
            <FooterLinks mode="result-page"/>
        </>
    );
}