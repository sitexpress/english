import { Modal, Text } from "@mantine/core";
import CallBackForm from "../CallBackForm/CallBackForm";
import classes from "./FullScreenModal.module.css";
import { CallBackModeType } from "../HeroImageBackground/HeroImageBackground";

type FullScreenModalType = {
    opened: boolean;
    close: () => void;
    mode: CallBackModeType;
};

export const FullScreenModal: React.FC<FullScreenModalType> = ({ opened, close, mode }) => {
    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title={
                    mode === "Записаться" ? (
                        <Text fw={500} size="xl" ta="center" c="dark.8" pl="md">
                            Записаться
                        </Text>
                    ) : mode === "Заказать звонок" ? (
                        <Text fw={500} size="xl" ta="center" c="dark.8" pl="md">
                            Заказать звонок
                        </Text>
                    ) : mode === "Записаться c результатми теста" ? (
                        <Text fw={500} size="xl" ta="center" c="dark.8" pl="md">
                            Записаться c результатми теста
                        </Text>
                    ) : (
                        <Text fw={500} size="xl" ta="center" c="dark.8" pl="md">
                            Записаться на пробный урок
                        </Text>
                    )
                }
                fullScreen
                radius={0}
                transitionProps={{ transition: "fade-right", duration: 2000 }}
                className={classes.modals}
            >
                <CallBackForm
                    mode={
                        mode === "Записаться"
                            ? "Записаться"
                            : mode === "Заказать звонок"
                              ? "Заказать звонок"
                              : mode === "Записаться на пробный урок"
                                ? "Записаться на пробный урок"
                                : mode === "Записаться c результатми теста"
                                  ? "Записаться c результатми теста"
                                  : "Записаться на определённый курс"
                    }
                    title=""
                    setClose={() => close()}
                />
            </Modal>
        </>
    );
};
