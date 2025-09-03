import { DragDropContext, Draggable, DraggableLocation, Droppable } from "@hello-pangea/dnd";
import cx from "clsx";
import { Badge, Flex, Group, Paper, Text } from "@mantine/core";
// import { useListState } from "@mantine/hooks";
import classes from "./DndList.module.css";
import { useAppSelector } from "@/store/hooks";
import { ListeningTestsType, onDragEndHandlerType, reorderList, VariantsType } from "@/features/formSlice";
import ReactAudioPlayer from "react-audio-player";
import { useDispatch } from "react-redux";

type DndList = {
    item: ListeningTestsType;
    index: number;
};

export const DndList: React.FC<DndList> = ({ item, index }) => {
    // const [state, handlers] = useListState(item.variants);

    const audio = useAppSelector((item) => item.form.audio);
    const dispatch = useDispatch();
    

    const items = item.variants.map((item: VariantsType, index: number) => (
        <Draggable key={item.name} index={index} draggableId={item.name.toString()}>
            {(provided, snapshot) => (
                <div
                    className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <Text className={classes.symbol}>{item.symbol}</Text>
                    <div>
                        <Text>{item.name}</Text>
                        {/* <Text c="dimmed" size="sm">
                            current position: {item.position}
                        </Text> */}
                        {/* <Text c="dimmed" size="sm">
                             name: {item.name}
                        </Text> */}
                    </div>
                </div>
            )}
        </Draggable>
    ));

    const style = {
        width: "90%",
    };

    const onDragEndHandler = (destination: DraggableLocation<string> | null, source: onDragEndHandlerType) => {
        // console.log("destination: any, source:any", destination, source);
        // handlers.reorder({ from: source.index, to: destination?.index || 0 });
        dispatch(reorderList({index, destination, source }));
    };

    return (
        <Flex direction="column">
            <Flex direction="row" justify="center" align="center" gap={15}>
                <Badge size="sm" circle bg="#7950f2" style={{ minWidth: "32px" }}>
                    {index + 1}
                </Badge>
                <Text size="md" fw={500} fs="italic">
                    listening:
                </Text>
            </Flex>

            <Paper shadow="xs" withBorder p="xl" w="400px" mt={20}>
                <Flex direction="column" mt="xl" gap="lg" className="wrapper">
                    <Flex justify="center">
                        <ReactAudioPlayer src={audio[index]} controls style={style} />
                    </Flex>

                    <Group justify="center">
                        <Text size="xs" fw={500} c="dimmed" ta="center">
                            Put the items in order of priority:
                        </Text>
                        <DragDropContext onDragEnd={({ destination, source }) => onDragEndHandler(destination, source)}>
                            <Droppable droppableId="dnd-list" direction="vertical">
                                {(provided: any) => {
                                    // console.log("provided:",provided)

                                    return (
                                        <div {...provided.droppableProps} ref={provided.innerRef}>
                                            {items}
                                            {provided.placeholder}
                                        </div>
                                    );
                                }}
                            </Droppable>
                        </DragDropContext>
                    </Group>
                </Flex>
            </Paper>
        </Flex>
    );
};
