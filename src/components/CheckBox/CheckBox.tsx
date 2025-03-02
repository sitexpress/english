import { useEffect } from "react";
import { Checkbox, Group, Stack, Text } from "@mantine/core";
import classes from "./CheckBox.module.css";
import { badgesMockdata } from "../FeaturesAsymmetrical/FeaturesAsymmetrical";


type CheckboxType = {
    fitted: string | "";
    title: string;
    price: number;
    discount: number;
    value: string[];
    setValue: (value: string[]) => void;

};  

export const CheckBox: React.FC<CheckboxType> = ({ title, value, price, discount, setValue }) => {
    const cards = badgesMockdata.map((item) => (
        <Checkbox.Card className={classes.root} radius="md" value={item.title} key={item.title}>
            <Group wrap="nowrap" align="flex-start">
                <Checkbox.Indicator />
                <div>
                    <Text className={classes.label}>{item.title}</Text>
                    <Text className={classes.description}  >{item.fitted}</Text>
                    {!item.price ? (
                        <div>
                            <Text mb={5} fz="sm" c="dimmed" fw={500} style={{ lineHeight: 1 }}>
                                From:
                            </Text>
                            <Text fz="xl" fw={700} td="line-through" style={{ lineHeight: 1 }}>
                                 300 ₽
                            </Text>
                            <Text mt={5} fz="sm" c="dimmed" fw={600} style={{ lineHeight: 1 }}>
                                Included with service
                            </Text>
                        </div>
                    ) : (
                        <div>
                            <Text fz="xs" c="dimmed" fw={500} style={{ lineHeight: 1 }} mb={5} mt={10}>
                               от:
                            </Text>
                            <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
                                 {Number(item.price).toFixed(2)} ₽
                            </Text>
                        </div>
                    )}
                </div>
            </Group>
        </Checkbox.Card>
    ));

    useEffect(() => {
        setValue([...value, title]);
    }, [title]);


    return (
        <>
            <Checkbox.Group
                value={value}
                onChange={setValue}
                // onClick={() => setAddedSum([{ sumTitle: title, priceNum: price }])}
                label="Ниже можете добавить курсы:"
                description={
                    value.length === 0 ? (
                        <Text size="xs" c="red">
                            *Вы ничего не выбрали
                        </Text>
                    ) : (
                        <Text size="xs" c="green">
                             Вы выбрали {value.length} {value.length === 1 ? "курс" : value.length > 1 && value.length < 5 ? "курса" : "курсов" }
                        </Text>
                    )
                }
                mt="xl"
            >
                <Stack pt="md" gap="xs">
                    {cards}
                </Stack>
            </Checkbox.Group>

            {/* <Text fz="xs" mt="md" fw={500} ta="center">
                {value.join(", ") || "Nothing has been selected"}
            </Text> */}
        </>
    );
};
