import { Button, Flex, useMantineTheme, Text } from "@mantine/core";
import { useAppSelector } from "@/store/hooks";
import { modals } from "@mantine/modals";
import { useNavigate } from "react-router-dom";

type FinalStartType = {
    mode: "final" | "start";
    isStarted: boolean;
    setIsStarted: (value: boolean) => void;
    setFullsize?: (value: boolean) => void;
    fullSize?: boolean;
};
export const FinalStart: React.FC<FinalStartType> = ({ mode, isStarted, setIsStarted, setFullsize }) => {
    const theme = useMantineTheme();
    const navigate = useNavigate();
    const test = useAppSelector((state) => state.form.test);
    const listening = useAppSelector((state) => state.form.listening);

    const ammountOfCorrectTestAnswers = test.filter((item) => item.isSelected).length;
    const ammountOfCorrectListeningAnswers = listening.filter((item) => item.result).length;

    const handler = () => {
        console.log("click")
        setIsStarted(true);
        setFullsize && setFullsize(true);
    };

    const onEndTest = () =>
        modals.openConfirmModal({
            title: "Вы уверены что хотите завершить?",
            centered: true,
            children: <Text size="sm">После завершения мы подсчитаем кол-во правильных ответов.</Text>,
            labels: { confirm: "Завершить", cancel: "Вернуться к тесту" },
            confirmProps: { color: "red" },
            onCancel: () => console.log("Cancel"),
            onConfirm: () => {
                setIsStarted(false);
                setFullsize && setFullsize(false);

                localStorage.setItem("test-result", JSON.stringify(ammountOfCorrectTestAnswers));
                localStorage.setItem("listening-result", JSON.stringify(ammountOfCorrectListeningAnswers));
                navigate("/result");
            },
        });

    return mode === "start" ? (
        <Flex
            justify="center"
            // bg={theme.colors.violet[0]}
            // pb={20}
            style={{
                // background: `${theme.colors.violet[0]}`,
                opacity: 0.9,
            }}
        >
            <Button
                disabled={isStarted}
                variant="default"
                size="md"
                w="200px"
                radius="xl"
                onClick={handler}
                c={theme.colors.dark[6]}
                bg={theme.colors.yellow[6]}
            >
                Начать тест
            </Button>
        </Flex>
    ) : (
        <Flex justify="center" mt={100} mb={100}>
            <Button
                disabled={!isStarted}
                variant="filled"
                size="md"
                w="200px"
                radius="xl"
                onClick={onEndTest}
                color="red"
            >
                Завершить
            </Button>
        </Flex>
    );
};
