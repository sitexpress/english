import { Button, Flex, Image, Text, TextInput, Title, useMantineTheme } from '@mantine/core';
import image from './image.svg';
import classes from "./TestComponent.module.css";

export function TestComponent() {
  const theme = useMantineTheme()
  return (
    <Flex justify="center" mt={150} >
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Онлайн тест</Title>
        <Text fw={500} fz="lg" mb={5}>
        Пройдите наш онлайн тест, чтобы определить свой уровень английского языка и записаться на бесплатный пробный урок.
        </Text>
        <Text fz="sm">
        --длительность теста: 30 минут
        </Text>

        <div className={classes.controls}>
          <a href="/test">
          <Button size="md" radius="xl" variant="default"  bg={theme.colors.yellow[4]}>Пройти тест</Button>
          
          </a>
        </div>
      </div>
    </div>

    </Flex>

  );
}