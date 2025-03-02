import { useState } from "react";
import { Radio, Group, Stack, Text, Flex, Badge } from "@mantine/core";
import classes from "./RadioComponent2.module.css";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToReasult } from "@/features/formSlice";

type RadioComponent2 = {
    quest: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
};

export const RadioComponent2: React.FC<RadioComponent2> = ({ quest }) => {
    const [value, setValue] = useState<string | null>(null);
    const state = useAppSelector((state) => state.form);
    const result = useAppSelector((state) => state.form.result);
    const dispatch = useAppDispatch();

    const ammountOfCorrectAnswers = result.filter((item, i) => item.quest === true);

    const dispatchValueHandler = (id: number, isCorrect: boolean) => {
        dispatch(addToReasult({ id, isCorrect }));
    };

    console.log("result:", result);

    const cards =
        quest === 1
            ? state.quest1.map((item) => (
                  <Radio.Card
                      className={classes.root}
                      radius="md"
                      value={item.name}
                      key={item.name}
                      onClick={() => dispatchValueHandler(1, item.isCorrect)}
                  >
                      <Group wrap="nowrap" align="flex-start">
                          <Radio.Indicator />
                          <div>
                              <Text className={classes.description}>{item.description}</Text>
                              <Text className={classes.label}>{item.name}</Text>
                          </div>
                      </Group>
                  </Radio.Card>
              ))
            : quest === 2
              ? state.quest2.map((item) => (
                    <Radio.Card
                        className={classes.root}
                        radius="md"
                        value={item.name}
                        key={item.name}
                        onClick={() => dispatchValueHandler(2, item.isCorrect)}
                    >
                        <Group wrap="nowrap" align="flex-start">
                            <Radio.Indicator />
                            <div>
                                <Text className={classes.description}>{item.description}</Text>
                                <Text className={classes.label}>{item.name}</Text>
                            </div>
                        </Group>
                    </Radio.Card>
                ))
              : quest === 3
                ? state.quest3.map((item) => (
                      <Radio.Card
                          className={classes.root}
                          radius="md"
                          value={item.name}
                          key={item.name}
                          onClick={() => dispatchValueHandler(3, item.isCorrect)}
                      >
                          <Group wrap="nowrap" align="flex-start">
                              <Radio.Indicator />
                              <div>
                                  <Text className={classes.description}>{item.description}</Text>
                                  <Text className={classes.label}>{item.name}</Text>
                              </div>
                          </Group>
                      </Radio.Card>
                  ))
                : quest === 4
                  ? state.quest4.map((item) => (
                        <Radio.Card
                            className={classes.root}
                            radius="md"
                            value={item.name}
                            key={item.name}
                            onClick={() => dispatchValueHandler(4, item.isCorrect)}
                        >
                            <Group wrap="nowrap" align="flex-start">
                                <Radio.Indicator />
                                <div>
                                    <Text className={classes.description}>{item.description}</Text>
                                    <Text className={classes.label}>{item.name}</Text>
                                </div>
                            </Group>
                        </Radio.Card>
                    ))
                  : quest === 5
                    ? state.quest5.map((item) => (
                          <Radio.Card
                              className={classes.root}
                              radius="md"
                              value={item.name}
                              key={item.name}
                              onClick={() => dispatchValueHandler(5, item.isCorrect)}
                          >
                              <Group wrap="nowrap" align="flex-start">
                                  <Radio.Indicator />
                                  <div>
                                      <Text className={classes.description}>{item.description}</Text>
                                      <Text className={classes.label}>{item.name}</Text>
                                  </div>
                              </Group>
                          </Radio.Card>
                      ))
                    : quest === 6
                      ? state.quest6.map((item) => (
                            <Radio.Card
                                className={classes.root}
                                radius="md"
                                value={item.name}
                                key={item.name}
                                onClick={() => dispatchValueHandler(6, item.isCorrect)}
                            >
                                <Group wrap="nowrap" align="flex-start">
                                    <Radio.Indicator />
                                    <div>
                                        <Text className={classes.description}>{item.description}</Text>
                                        <Text className={classes.label}>{item.name}</Text>
                                    </div>
                                </Group>
                            </Radio.Card>
                        ))
                      : quest === 7
                        ? state.quest7.map((item) => (
                              <Radio.Card
                                  className={classes.root}
                                  radius="md"
                                  value={item.name}
                                  key={item.name}
                                  onClick={() => dispatchValueHandler(7, item.isCorrect)}
                              >
                                  <Group wrap="nowrap" align="flex-start">
                                      <Radio.Indicator />
                                      <div>
                                          <Text className={classes.description}>{item.description}</Text>
                                          <Text className={classes.label}>{item.name}</Text>
                                      </div>
                                  </Group>
                              </Radio.Card>
                          ))
                        : quest === 8
                          ? state.quest8.map((item) => (
                                <Radio.Card
                                    className={classes.root}
                                    radius="md"
                                    value={item.name}
                                    key={item.name}
                                    onClick={() => dispatchValueHandler(8, item.isCorrect)}
                                >
                                    <Group wrap="nowrap" align="flex-start">
                                        <Radio.Indicator />
                                        <div>
                                            <Text className={classes.description}>{item.description}</Text>
                                            <Text className={classes.label}>{item.name}</Text>
                                        </div>
                                    </Group>
                                </Radio.Card>
                            ))
                          : quest === 9
                            ? state.quest9.map((item) => (
                                  <Radio.Card
                                      className={classes.root}
                                      radius="md"
                                      value={item.name}
                                      key={item.name}
                                      onClick={() => dispatchValueHandler(9, item.isCorrect)}
                                  >
                                      <Group wrap="nowrap" align="flex-start">
                                          <Radio.Indicator />
                                          <div>
                                              <Text className={classes.description}>{item.description}</Text>
                                              <Text className={classes.label}>{item.name}</Text>
                                          </div>
                                      </Group>
                                  </Radio.Card>
                              ))
                            : state.quest10.map((item) => (
                                  <Radio.Card
                                      className={classes.root}
                                      radius="md"
                                      value={item.name}
                                      key={item.name}
                                      onClick={() => dispatchValueHandler(10, item.isCorrect)}
                                  >
                                      <Group wrap="nowrap" align="flex-start">
                                          <Radio.Indicator />
                                          <div>
                                              <Text className={classes.description}>{item.description}</Text>
                                              <Text className={classes.label}>{item.name}</Text>
                                          </div>
                                      </Group>
                                  </Radio.Card>
                              ));

    return (
        <Flex justify="center" direction="column" align="center" mt={100}>
            <Radio.Group
                value={value}
                onChange={setValue}
                label={
                    quest === 1 ? (
                        <Flex justify="center" align="center" gap={10}>
                            <Badge size="xl" circle variant="gradient" style={{ minWidth: "32px" }}>
                                {quest}
                            </Badge>
                            <Text size="xl">"Where ______________from? I’m from Russia."</Text>
                        </Flex>
                    ) : quest === 2 ? (
                        <Flex justify="center" align="center" gap={10}>
                            <Badge size="xl" circle style={{ minWidth: "32px" }} variant="gradient">
                                {quest}
                            </Badge>
                            <Text size="xl">"We have _____ house in Moscow."</Text>
                        </Flex>
                    ) : quest === 3 ? (
                        <Flex justify="center" align="center" gap={10}>
                            <Badge size="xl" circle style={{ minWidth: "32px" }} variant="gradient">
                                {quest}
                            </Badge>
                            <Text size="xl">"I have two_________, a boy and a girl."</Text>
                        </Flex>
                    ) : quest === 4 ? (
                        <Flex justify="center" align="center" gap={10}>
                            <Badge size="xl" circle style={{ minWidth: "32px" }} variant="gradient">
                                {quest}
                            </Badge>
                            <Text size="xl">"This is my brother. ________name’s Paul."</Text>
                        </Flex>
                    ) : quest === 5 ? (
                        <Flex justify="center" align="center" gap={10}>
                            <Badge size="xl" circle style={{ minWidth: "32px" }} variant="gradient">
                                {quest}
                            </Badge>
                            <Text size="xl">"________ five people in my family."</Text>
                        </Flex>
                    ) : quest === 6 ? (
                        <Flex justify="center" align="center" gap={10}>
                            <Badge size="xl" circle style={{ minWidth: "32px" }} variant="gradient">
                                {quest}
                            </Badge>
                            <Text size="xl">"I get up_________7 o’clock in the morning."</Text>
                        </Flex>
                    ) : quest === 7 ? (
                        <Flex justify="center" align="center" gap={10}>
                            <Badge size="xl" circle style={{ minWidth: "32px" }} variant="gradient">
                                {quest}
                            </Badge>
                            <Text size="xl">"I like apples, but I ______ bananas."</Text>
                        </Flex>
                    ) : quest === 8 ? (
                        <Flex justify="center" align="center" gap={10}>
                            <Badge size="xl" circle style={{ minWidth: "32px" }} variant="gradient">
                                {quest}
                            </Badge>
                            <Text size="xl">"Excuse me, ______speak French?"</Text>
                        </Flex>
                    ) : quest === 9 ? (
                        <Flex justify="center" align="center" gap={10}>
                            <Badge size="xl" circle style={{ minWidth: "32px" }} variant="gradient">
                                {quest}
                            </Badge>
                            <Text size="xl">"How much are _______ shoes?"</Text>
                        </Flex>
                    ) : (
                        quest === 10 && (
                            <Flex justify="center" align="center" gap={10}>
                                <Badge size="xl" circle style={{ minWidth: "32px" }} variant="gradient">
                                    {quest}
                                </Badge>
                                <Text size="xl">"I work in a __________. I’m a doctor."</Text>
                            </Flex>
                        )
                    )
                }
                description=""
                className={classes.radio_group}
            >
                <Stack pt="md" gap="xs">
                    {cards}
                </Stack>
            </Radio.Group>
        </Flex>
    );
};
