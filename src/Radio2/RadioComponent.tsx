import { Badge, Flex, Text, useMantineTheme } from "@mantine/core";
import { useAppSelector } from "@/store/hooks";
import { RadioSubComponent } from "./RadioSubComponent";
import { DndList } from "@/components/DndList/DndList";
import { ListeningTestsType } from "@/features/formSlice";

export const RadioComponent = () => {
    const form = useAppSelector((state) => state.form);
    const listening = useAppSelector((state) => state.form.listening);
    const theme = useMantineTheme();

    console.log("listening:", listening);

    return (
        <Flex justify="center" direction="column" align="center" pt={10} wrap="wrap">
            <Text size="lg" fw={500} bg={theme.colors.violet[6]} c="white" w="100%" ta="center">
                A1-A2 / test-part:
            </Text>
            {form.test.map((item, i) => (
                <Flex key={i} p={40} mt={50} justify="center" align="center" direction="column">
                    <Flex justify="center" align="center" direction="column" gap={10}>
                        <Badge size="sm" circle bg="#7950f2" style={{ minWidth: "32px" }}>
                            {i + 1}
                        </Badge>
                        <Text size="md" fw={500} fs="italic">
                            {item.question.question}
                        </Text>
                    </Flex>
                    <RadioSubComponent key={i} num={i} item={item} />
                </Flex>
            ))}
            <Text size="lg" fw={500} mt={60} bg={theme.colors.violet[6]} c="white" w="100%" ta="center">
                A1-A2 / listening:
            </Text>

            {listening.map((item: ListeningTestsType, index: number) => (
                <Flex key={index} direction="column" align="center" mt={100}>
                    <DndList item={item} index={index} />
                </Flex>
            ))}
        </Flex>
    );
};
