import {  Card, Overlay, Text } from "@mantine/core";
import classes from "./Banner.module.css";


export function Banner() {
    // const [isLoading, setIsLoading] = useState(false);
    // const openModal = (titleValue: string) => {
    //     setIsLoading(true);

    //     modals.open({
    //         title: (
    //             <Text fw={500} size="xl" ta="center" c="dark.8" pl="md">
    //                 Callback-order form:
    //             </Text>
    //         ),
    //         children: (
    //             <>
    //                 <Text size="sm" ta="center" c="dimmed">
    //                     Please fill in the form so that we can get in touch with you.
    //                 </Text>
    //                 <CallBackForm
    //                     modalMode="callBack"
    //                     title={titleValue}
    //                     fitted="Perfect for you, if you want to make a video"
    //                     setClose={() => modals.closeAll()}
    //                 />
    //             </>
    //         ),
    //     });
    //     setIsLoading(false);
    // };

    
    return (
        <Card radius="none" className={classes.card} mt={200}>
            <Overlay className={classes.overlay} opacity={0.7} zIndex={0} />

            <div className={classes.content}>
                <Text size="lg" fw={700} className={classes.title}>
                    Откройте новые возможности!
                </Text>

                <Text size="md" className={classes.description} pt="md" ta="justify">
                    Изучение английского языка - это не только путешествия без языкового
                    барьера, но и карьерный рост, доступ к мировой информации и культуре. Развивайте мозг, улучшайте
                    память и находите новых друзей по всему миру. Инвестируйте в себя и свое будущее. Начните сегодня - ваш успех начинается с первого
                    слова!
                </Text>

                {/* <Button
                    className={classes.action}
                    variant="white"
                    color="dark"
                    size="xs"
                    onClick={() => openModal("Aerial Media Content")}
                >
                    Записаться на пробный урок
                </Button> */}
            </div>
        </Card>
    );
}
