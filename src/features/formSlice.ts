import { DraggableLocation } from "@hello-pangea/dnd";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type OptionsType = {
    id: number;
    name: string;
    description: string;
    isCorrect: boolean;
    answer: string | null;
};

type QuestionType = {
    id: number;
    question: string;
};

export type Result = {
    quest: boolean;
};

export interface QuestType {
    id: number;
    isSelected: boolean;
    result: boolean;
    question: QuestionType;
    options: OptionsType[];
}

export interface VariantsType {
    position: number;
    symbol: number;
    name: string;
}
export interface ListeningTestsType {
    id: number;
    result: boolean;
    correctOrder: number[];
    variants: VariantsType[];
}

export interface AudioType {
    [key: number]: string;
}

export interface StateType {
    test: QuestType[];
    audio: AudioType;
    listening: ListeningTestsType[];
    // listening: ListeningTestsType[][];
    isLoading: boolean;
}

export type onDragEndHandlerType = {
    droppableId: string;
    index: number;
};

const initialState: StateType = {
    test: [
        {
            id: 0,
            isSelected: false,
            result: false,
            question: { id: 0, question: "Where ______________from? I’m from Russia." },
            options: [
                {
                    id: 0,
                    name: "you are",
                    description: "A",
                    isCorrect: false,
                    answer: null,
                },
                { id: 1, name: "you", description: "B", isCorrect: false, answer: null },
                { id: 2, name: "are you", description: "C", isCorrect: true, answer: null },
            ],
        },
        {
            id: 1,
            isSelected: false,
            result: false,
            question: { id: 0, question: "We have _____ house in Moscow." },
            options: [
                {
                    id: 0,
                    name: "any",
                    description: "A",
                    isCorrect: false,
                    answer: null,
                },
                { id: 1, name: "a", description: "B", isCorrect: true, answer: null },
                { id: 2, name: "an", description: "C", isCorrect: false, answer: null },
            ],
        },
        {
            id: 2,
            isSelected: false,
            result: false,
            question: { id: 0, question: "I have two_________, a boy and a girl." },
            options: [
                {
                    id: 0,
                    name: "sons",
                    description: "A",
                    isCorrect: false,
                    answer: null,
                },
                { id: 1, name: "daughters", description: "B", isCorrect: false, answer: null },
                { id: 2, name: "children", description: "C", isCorrect: true, answer: null },
            ],
        },
        {
            id: 3,
            isSelected: false,
            result: false,
            question: { id: 0, question: "This is my brother. ________name’s Paul." },
            options: [
                {
                    id: 0,
                    name: "Her",
                    description: "A",
                    isCorrect: false,
                    answer: null,
                },
                { id: 1, name: "His", description: "B", isCorrect: true, answer: null },
                { id: 2, name: "He's", description: "C", isCorrect: false, answer: null },
            ],
        },
        {
            id: 4,
            isSelected: false,
            result: false,
            question: { id: 0, question: "________ five people in my family." },
            options: [
                {
                    id: 0,
                    name: "They are",
                    description: "A",
                    isCorrect: false,
                    answer: null,
                },
                { id: 1, name: "There is", description: "B", isCorrect: false, answer: null },
                { id: 2, name: "There are", description: "C", isCorrect: true, answer: null },
            ],
        },
        {
            id: 5,
            isSelected: false,
            result: false,
            question: { id: 0, question: "I get up_________7 o’clock in the morning." },
            options: [
                {
                    id: 0,
                    name: "for",
                    description: "A",
                    isCorrect: false,
                    answer: null,
                },
                { id: 1, name: "at", description: "B", isCorrect: true, answer: null },
                { id: 2, name: "in", description: "C", isCorrect: false, answer: null },
            ],
        },
        {
            id: 6,
            isSelected: false,
            result: false,
            question: { id: 0, question: "I like apples, but I ______ bananas." },
            options: [
                {
                    id: 0,
                    name: "don't like",
                    description: "A",
                    isCorrect: true,
                    answer: null,
                },
                { id: 1, name: "like", description: "B", isCorrect: false, answer: null },
                { id: 2, name: "do like", description: "C", isCorrect: false, answer: null },
            ],
        },
        {
            id: 7,
            isSelected: false,
            result: false,
            question: { id: 0, question: "Excuse me, ______speak French?" },
            options: [
                {
                    id: 0,
                    name: "do you",
                    description: "A",
                    isCorrect: true,
                    answer: null,
                },
                { id: 1, name: "you do", description: "B", isCorrect: false, answer: null },
                { id: 2, name: "you", description: "C", isCorrect: false, answer: null },
            ],
        },
        {
            id: 8,
            isSelected: false,
            result: false,
            question: { id: 0, question: "How much are _______ shoes?" },
            options: [
                {
                    id: 0,
                    name: "this",
                    description: "A",
                    isCorrect: false,
                    answer: null,
                },
                { id: 1, name: "these", description: "B", isCorrect: true, answer: null },
                { id: 2, name: "that", description: "C", isCorrect: false, answer: null },
            ],
        },
        {
            id: 9,
            isSelected: false,
            result: false,
            question: { id: 0, question: "Are you __________ English teacher?" },
            options: [
                {
                    id: 0,
                    name: "Maria",
                    description: "A",
                    isCorrect: false,
                    answer: null,
                },
                { id: 1, name: "Marias'", description: "B", isCorrect: false, answer: null },
                { id: 2, name: "Maria's", description: "C", isCorrect: true, answer: null },
            ],
        },
        {
            id: 10,
            isSelected: false,
            result: false,
            question: { id: 0, question: "Bob will meet _________ at the airport." },
            options: [
                {
                    id: 0,
                    name: "us",
                    description: "A",
                    isCorrect: true,
                    answer: null,
                },
                { id: 1, name: "we", description: "B", isCorrect: false, answer: null },
                { id: 2, name: "our", description: "C", isCorrect: false, answer: null },
            ],
        },
        {
            id: 11,
            isSelected: false,
            result: false,
            question: { id: 0, question: "I’m going to a concert tonight. __________ you like to come?" },
            options: [
                {
                    id: 0,
                    name: "Do",
                    description: "A",
                    isCorrect: false,
                    answer: null,
                },
                { id: 1, name: "Are", description: "B", isCorrect: false, answer: null },
                { id: 2, name: "Would", description: "C", isCorrect: true, answer: null },
            ],
        },
        {
            id: 12,
            isSelected: false,
            result: false,
            question: { id: 0, question: "________ use your dictionary?" },
            options: [
                {
                    id: 0,
                    name: "Could I",
                    description: "A",
                    isCorrect: true,
                    answer: null,
                },
                { id: 1, name: "Could you", description: "B", isCorrect: false, answer: null },
                { id: 2, name: "Do I", description: "C", isCorrect: false, answer: null },
            ],
        },
        {
            id: 13,
            isSelected: false,
            result: false,
            question: { id: 0, question: "I like this apartment but the _________ is too expensive for me." },
            options: [
                {
                    id: 0,
                    name: "money",
                    description: "A",
                    isCorrect: false,
                    answer: null,
                },
                { id: 1, name: "rent", description: "B", isCorrect: true, answer: null },
                { id: 2, name: "cost", description: "C", isCorrect: false, answer: null },
            ],
        },
        {
            id: 14,
            isSelected: false,
            result: false,
            question: { id: 0, question: "Excuse me, how do I _________ to the bus station?" },
            options: [
                {
                    id: 0,
                    name: "come",
                    description: "A",
                    isCorrect: false,
                    answer: null,
                },
                { id: 1, name: "get", description: "B", isCorrect: true, answer: null },
                { id: 2, name: "arrive", description: "C", isCorrect: false, answer: null },
            ],
        },
        {
            id: 15,
            isSelected: false,
            result: false,
            question: { id: 0, question: "I work in a __________. I’m a doctor." },
            options: [
                {
                    id: 0,
                    name: "hospital",
                    description: "A",
                    isCorrect: true,
                    answer: null,
                },
                { id: 1, name: "hotel", description: "B", isCorrect: false, answer: null },
                { id: 2, name: "supermarket", description: "C", isCorrect: false, answer: null },
            ],
        },
        {
            id: 16,
            isSelected: false,
            result: false,
            question: { id: 0, question: "Do you sell stamps? Yes, we do. How ______ do you want?" },
            options: [
                {
                    id: 0,
                    name: "any",
                    description: "A",
                    isCorrect: false,
                    answer: null,
                },
                { id: 1, name: "many", description: "B", isCorrect: true, answer: null },
                { id: 2, name: "much", description: "C", isCorrect: false, answer: null },
            ],
        },
        {
            id: 17,
            isSelected: false,
            result: false,
            question: { id: 0, question: "Sorry, I’m so late. That’s ____." },
            options: [
                {
                    id: 0,
                    name: "Ok",
                    description: "A",
                    isCorrect: true,
                    answer: null,
                },
                { id: 1, name: "great", description: "B", isCorrect: false, answer: null },
                { id: 2, name: "right", description: "C", isCorrect: false, answer: null },
            ],
        },
        {
            id: 18,
            isSelected: false,
            result: false,
            question: { id: 0, question: "I’d like ______ milk in my coffee, please." },
            options: [
                {
                    id: 0,
                    name: "some",
                    description: "A",
                    isCorrect: true,
                    answer: null,
                },
                { id: 1, name: "any", description: "B", isCorrect: false, answer: null },
                { id: 2, name: "a", description: "C", isCorrect: false, answer: null },
            ],
        },
        {
            id: 19,
            isSelected: false,
            result: false,
            question: { id: 0, question: "_______ a bus stop near my flat." },
            options: [
                {
                    id: 0,
                    name: "It's",
                    description: "A",
                    isCorrect: false,
                    answer: null,
                },
                { id: 1, name: "Here's", description: "B", isCorrect: false, answer: null },
                { id: 2, name: "There's", description: "C", isCorrect: true, answer: null },
            ],
        },
        {
            id: 20,
            isSelected: false,
            result: false,
            question: { id: 0, question: "Is Ottawa the capital of Canada? I think _____________." },
            options: [
                {
                    id: 0,
                    name: "is",
                    description: "A",
                    isCorrect: false,
                    answer: null,
                },
                { id: 1, name: "yes", description: "B", isCorrect: true, answer: null },
                { id: 2, name: "so", description: "C", isCorrect: false, answer: null },
            ],
        },
        {
            id: 21,
            isSelected: false,
            result: false,
            question: { id: 0, question: "We never ________ a television when I was a child." },
            options: [
                {
                    id: 0,
                    name: "have had",
                    description: "A",
                    isCorrect: true,
                    answer: null,
                },
                { id: 1, name: "hadn't", description: "B", isCorrect: false, answer: null },
                { id: 2, name: "had", description: "C", isCorrect: false, answer: null },
            ],
        },
        {
            id: 22,
            isSelected: false,
            result: false,
            question: { id: 0, question: "We paid the restaurant bill ______ credit card." },
            options: [
                {
                    id: 0,
                    name: "to",
                    description: "A",
                    isCorrect: false,
                    answer: null,
                },
                { id: 1, name: "with", description: "B", isCorrect: true, answer: null },
                { id: 2, name: "on", description: "C", isCorrect: false, answer: null },
            ],
        },
        {
            id: 23,
            isSelected: false,
            result: false,
            question: { id: 0, question: "The last time I _________ Joanna was in Paris." },
            options: [
                {
                    id: 0,
                    name: "have seen",
                    description: "A",
                    isCorrect: false,
                    answer: null,
                },
                { id: 1, name: "saw", description: "B", isCorrect: true, answer: null },
                { id: 2, name: "see", description: "C", isCorrect: false, answer: null },
            ],
        },
        {
            id: 24,
            isSelected: false,
            result: false,
            question: {
                id: 0,
                question: "If you _________ money from a friend, you should always pay it back promptly.",
            },
            options: [
                {
                    id: 0,
                    name: "borrow",
                    description: "A",
                    isCorrect: true,
                    answer: null,
                },
                { id: 1, name: "earn", description: "B", isCorrect: false, answer: null },
                { id: 2, name: "lend", description: "C", isCorrect: false, answer: null },
            ],
        },
        {
            id: 25,
            isSelected: false,
            result: false,
            question: { id: 0, question: "Can I make myself a cup of coffee? Of course. You _______ to ask." },
            options: [
                {
                    id: 0,
                    name: "mustn't",
                    description: "A",
                    isCorrect: false,
                    answer: null,
                },
                { id: 1, name: "needn't", description: "B", isCorrect: false, answer: null },
                { id: 2, name: "don't have", description: "C", isCorrect: true, answer: null },
            ],
        },
        {
            id: 26,
            isSelected: false,
            result: false,
            question: { id: 0, question: "Can I make myself a cup of coffee? Of course. You _______ to ask." },
            options: [
                {
                    id: 0,
                    name: "mustn't",
                    description: "A",
                    isCorrect: false,
                    answer: null,
                },
                { id: 1, name: "needn't", description: "B", isCorrect: false, answer: null },
                { id: 2, name: "don't have", description: "C", isCorrect: true, answer: null },
            ],
        },
    ],
    audio: {
        0: "/public/audio/a1/1-A1-A2-request-from-your-boss.mp3",
        1: "/public/audio/a1/2-A1-A2-voicemail-message.mp3",
        2: "/public/audio/a1/3-A1-A2-booking-a-table.mp3",
        3: "/public/audio/a1/4-A1-A2-meeting-other-students.mp3",
        4: "/public/audio/a1/5-A1-A2-shopping-for-clothes.mp3",
    },
    listening: [
        {
            id: 0,
            result: false,
            correctOrder: [4, 1, 2, 3],
            variants: [
                { position: 1, symbol: 1, name: "Send an email to the customer." },
                { position: 2, symbol: 2, name: "Visit the customer." },
                { position: 3, symbol: 3, name: "Invite people to the meeting." },
                { position: 4, symbol: 4, name: "Reserve a meeting room." },
            ],
        },
        {
            id: 1,
            result: false,
            correctOrder: [2, 3, 1, 4, 6, 5],
            variants: [
                { position: 1, symbol: 1, name: "Marina asks John to call her back." },
                { position: 2, symbol: 2, name: "Marina introduces herself." },
                { position: 3, symbol: 3, name: "Marina says how she got John's phone number." },
                { position: 4, symbol: 4, name: "Marina leaves her phone number." },
                { position: 5, symbol: 5, name: "Marina leaves her email address." },
                { position: 6, symbol: 6, name: "Marina says that she needs some product information." },
            ],
        },
        {
            id: 2,
            result: false,
            correctOrder: [5, 3, 4, 2, 6, 1],
            variants: [
                { position: 1, symbol: 1, name: "Is eight OK for you?" },
                { position: 2, symbol: 2, name: "Can I make it for six people?" },
                { position: 3, symbol: 3, name: "How many people is it for?" },
                { position: 4, symbol: 4, name: "What time would you like?" },
                { position: 5, symbol: 5, name: "Can I book a table for tomorrow night?" },
                { position: 6, symbol: 6, name: "Is it possible to change the time?" },
            ],
        },
        {
            id: 3,
            result: false,
            correctOrder: [5, 2, 3, 6, 1, 4],
            variants: [
                { position: 1, symbol: 1, name: "I grew up near London." },
                { position: 2, symbol: 2, name: "Nice to meet you!" },
                { position: 3, symbol: 3, name: "Where are you from?" },
                { position: 4, symbol: 4, name: "Are you doing history on its own?" },
                { position: 5, symbol: 5, name: "I'm Cara. And you are?" },
                { position: 6, symbol: 6, name: "Do you live in Scotland?" },
            ],
        },
        {
            id: 4,
            result: false,
            correctOrder: [3, 2, 5, 4, 1, 6],
            variants: [
                { position: 1, symbol: 1, name: "Can I pay by credit card?" },
                { position: 2, symbol: 2, name: "Where are the changing rooms?" },
                { position: 3, symbol: 3, name: "Can I help you?" },
                { position: 4, symbol: 4, name: "How much is this?" },
                { position: 5, symbol: 5, name: "What size do you need?" },
                { position: 6, symbol: 6, name: "Would you like a bag for that?" },
            ],
        },
    ],

    isLoading: false,
};

export const formSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addToResult: (
            state,
            action: PayloadAction<{ itemId: number; id: number; answer: string | null; isSelected: boolean }>
        ) => {
            const elementIndex = state.test.findIndex((item) => item.id === action.payload.itemId);

            const newOptions = state.test[elementIndex].options.map((item) =>
                item.id === action.payload.id
                    ? {
                          id: state.test[elementIndex].options[action.payload.id].id,
                          name: state.test[elementIndex].options[action.payload.id].name,
                          description: state.test[elementIndex].options[action.payload.id].description,
                          isCorrect: state.test[elementIndex].options[action.payload.id].isCorrect,
                          answer: state.test[elementIndex].options[action.payload.id].answer,
                      }
                    : item
            );

            state.test.splice(elementIndex, 1, {
                id: action.payload.itemId,
                isSelected: action.payload.isSelected,
                result: state.test[elementIndex].result,
                question: state.test[elementIndex].question,
                options: newOptions,
            });
        },

        reorderList: (
            state,
            action: PayloadAction<{
                index: number;
                destination: DraggableLocation<string> | null;
                source: onDragEndHandlerType;
            }>
        ) => {
            const { index, destination, source } = action.payload;

            // Если нет места назначения или позиция не изменилась, выходим
            if (!destination || destination.index === source.index) {return;}

            // Получаем текущий элемент listening
            const listeningItem = state.listening[index];

            // Создаем копию массива variants
            const updatedVariants = [...listeningItem.variants];

            // Меняем элементы местами
            const [movedItem] = updatedVariants.splice(source.index, 1);
            updatedVariants.splice(destination.index, 0, movedItem);

            // Получаем текущий порядок symbol'ов
            const currentSymbolOrder = updatedVariants.map((v) => v.symbol);

            // Сравниваем с correctOrder
            const isCorrect = JSON.stringify(currentSymbolOrder) === JSON.stringify(listeningItem.correctOrder);

            // Обновляем состояние
            state.listening[index] = {
                ...listeningItem,
                variants: updatedVariants,
                result: isCorrect,
            };
        },

        startLoading: (state) => {
            state.isLoading = true;
        },
        stopLoading: (state) => {
            state.isLoading = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToResult, startLoading, stopLoading, reorderList } = formSlice.actions;
export const formReducer = formSlice.reducer;
