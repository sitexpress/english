import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type QuestType = {
    id:number,
    name: string,
    description: string,
    isCorrect: boolean,
}

export type Result = {
  quest: boolean,

}
export interface FormState {
  quest1: QuestType[]
  quest2: QuestType[]
  quest3: QuestType[]
  quest4: QuestType[]
  quest5: QuestType[]
  quest6: QuestType[]
  quest7: QuestType[]
  quest8: QuestType[]
  quest9: QuestType[]
  quest10: QuestType[]
  result: Result[]
  isLoading: boolean
}

const initialState: FormState = {
  quest1: [
    {
        id:1,
        name: "you are",
        description: "A",
        isCorrect: false,
    },
    { id:2,name: "you", description: "B", isCorrect: false },   
    { id:3,name: "are you", description: "C", isCorrect: true },
],
quest2:  [
    {
        id:2,
        name: "any",
        description: "A",
        isCorrect: false,
    }, 
    { id:2, name: "a", description: "B", isCorrect: true },
    { id:3, name: "an", description: "C", isCorrect: false },
],
quest3:  [
    {
        id:3,
        name: "sons",
        description: "A",
        isCorrect: false,
    },
    { id:2, name: "daughters", description: "B", isCorrect: false },
    { id:3, name: "children", description: "C", isCorrect: true },
],
quest4:  [
    {
        id:4,
        name: "Her",
        description: "A",
        isCorrect: false,
    },
    { id:2, name: "His", description: "B", isCorrect: true },
    { id:3, name: "He's", description: "C", isCorrect: false },
],
quest5:  [
    {
        id:5,
        name: "They are",
        description: "A",
        isCorrect: false,
    },
    { id:2, name: "There is", description: "B", isCorrect: false },
    { id:3, name: "There are", description: "C", isCorrect: true },
],
quest6:  [
    {
        id:6,
        name: "for",
        description: "A",
        isCorrect: false,
    },
    { id:2, name: "at", description: "B", isCorrect: true },
    { id:3, name: "in", description: "C", isCorrect: false },
],
quest7:  [
    {
        id:7,
        name: "don't like",
        description: "A",
        isCorrect: true,
    },
    { id:2, name: "like", description: "B", isCorrect: false },
    { id:3, name: "do like", description: "C", isCorrect: false },
],
quest8:  [
    {
        id:8,
        name: "do you",
        description: "A",
        isCorrect: true,
    },
    { id:2, name: "you do", description: "B", isCorrect: false },
    { id:3, name: "you", description: "C", isCorrect: false },
],
quest9:  [
    {
        id:9,
        name: "this",
        description: "A",
        isCorrect: false,
    },
    { id:2, name: "these", description: "B", isCorrect: true },
    { id:3, name: "that", description: "C", isCorrect: false },
],
quest10:  [
    {
        id:10,
        name: "hospital",
        description: "A",
        isCorrect: true,
    },
    { id:2, name: "hotel", description: "B", isCorrect: false },
    { id:3, name: "supermarket", description: "C", isCorrect: false },
],
result: [
  {quest: false},
  {quest: false},
  {quest: false},
  {quest: false},
  {quest: false},
  {quest: false},
  {quest: false},
  {quest: false},
  {quest: false},
  {quest: false},
],
isLoading: false
}



export const formSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToReasult: (state, action:PayloadAction<{id:number, isCorrect:boolean}>) => {
      const element = state.result.findIndex((item, i) => i + 1 === action.payload.id);
        state.result.splice(element, 1,  {quest: action.payload.isCorrect},) 
        // console.log("state.result:",state.result)
    },
    startLoading: (state) => {
    state.isLoading = true;
    },
    stopLoading: (state) => {
    state.isLoading = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToReasult, startLoading, stopLoading } = formSlice.actions

export const formReducer = formSlice.reducer