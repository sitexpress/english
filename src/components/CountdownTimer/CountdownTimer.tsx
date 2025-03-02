import { Flex, Title, useMantineTheme, Badge, Paper } from "@mantine/core";
import React, { useState, useEffect } from "react";

type CountdownTimerType = {
    initialSeconds: number;
};

const CountdownTimer: React.FC<CountdownTimerType> = ({ initialSeconds }) => {
    const [seconds, setSeconds] = useState(initialSeconds);

    const theme = useMantineTheme();

    useEffect(() => {
        if (seconds > 0) {
            const timerId = setTimeout(() => setSeconds(seconds - 1), 1000);
            return () => clearTimeout(timerId);
        }
    }, [seconds]);

    // Функция для форматирования времени в MM:SS
    const formatTime = (timeInSeconds:number) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };  

    return (
        <Paper shadow="xl" 
        // radius="xl"
         p={8} withBorder bg="none" w={200}>
            <Flex justify="space-between" align="center" gap={20} >
                <Title size={14} c="white">
                    Осталось:
                </Title>
                <Badge size="md" radius="xl" bg={theme.colors.yellow[6]} c={theme.colors.dark[8]}>
                    {formatTime(seconds)}
                </Badge>
            </Flex>
        </Paper>
    );
};

export default CountdownTimer;
