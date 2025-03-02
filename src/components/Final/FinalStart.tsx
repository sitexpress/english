import { Button, Flex, useMantineTheme, Text } from "@mantine/core";
import { useAppSelector } from "@/store/hooks";
import { modals } from "@mantine/modals";
import {  useNavigate } from "react-router-dom";

type FinalStartType = {
    mode: "final" | "start";
    isStarted: boolean;
    setIsStarted: (value: boolean) => void;
    setFullsize?: (value: boolean) => void;
};
export const FinalStart: React.FC<FinalStartType> = ({ mode, isStarted, setIsStarted,setFullsize }) => {
    const theme = useMantineTheme();
    const navigate = useNavigate();
    const result = useAppSelector(state => state.form.result)
    const handler = () => {
        setIsStarted(true)
        setFullsize && setFullsize(true)
    }


    const onEndTest = () =>
        modals.openConfirmModal({
          title: 'Вы уверены что хотите завершить?',
          centered: true,
          children: (
            <Text size="sm">
                После завершения мы подсчитаем кол-во правильных ответов.
            </Text>
          ),
          labels: { confirm: 'Завершить', cancel: "Вернуться к тесту" },
          confirmProps: { color: 'red' },
          onCancel: () => console.log('Cancel'),
          onConfirm: () =>  {
            localStorage.setItem("result", JSON.stringify(result));
            navigate("/result")
          },
        });

    
    return mode === "start" ? (
        <Flex justify="center" mt={50}>
            <Button
                disabled={isStarted}
                variant="outline"
                color={theme.colors.yellow[6]}
                size="lg"
                w="200px"
                // onClick={open}
                radius="xl"
                onClick={handler}
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
