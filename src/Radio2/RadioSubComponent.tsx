import { addToResult, OptionsType, QuestType } from "@/features/formSlice";
import { Group, Radio, Stack, Text } from "@mantine/core";
import React, { useState } from "react";
import classes from "./RadioComponent.module.css";
import { useAppDispatch } from "@/store/hooks";

type RadioSubComponentType = {
    item: QuestType;
    num: number;
};

export const RadioSubComponent: React.FC<RadioSubComponentType> = ({ item, num }) => {
    const [value, setValue] = useState<string | null>(null);
    const dispatch = useAppDispatch();

    const dispatchResultAndAnswerHandler = (itemId: number, id: number, answer: string | null, isSelected:boolean) => {
        dispatch(addToResult({itemId, id, answer, isSelected }));
        setValue(answer)
    };


    const cards = item.options.map((option: OptionsType, i: number) => (
                <Radio.Card
                    key={i}
                    className={classes.root}
                    radius="md"
                    value={option.name}
                    onClick={() => dispatchResultAndAnswerHandler(item.id, option.id, option.name, option.isCorrect)}
                >
                    <Group wrap="nowrap" align="flex-start">
                        <Radio.Indicator color="#7950f2" />
                        <div>
                            <Text className={classes.description}>{option.description}</Text>
                            <Text className={classes.label} fs="italic">
                                {option.name}
                            </Text>
                        </div>
                    </Group>
                </Radio.Card>
    ));


    return <Radio.Group 
            value={value}
            label=""
            description=""
            className={classes.radio_group}
        >
            <Stack pt="md" gap="xs">
              {cards}
            </Stack>
        </Radio.Group>
};


