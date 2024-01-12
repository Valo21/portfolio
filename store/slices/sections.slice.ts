import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: SectionState = {
    value: [
        {
            name: 'skills',
            icon: 'faHammer'
        },
        {
            name: 'education',
            icon: 'faHammer'
        }
    ]
}

export const sectionSlice = createSlice({
    name: 'sections',
    initialState,
    reducers: {
        addSection(state, action: PayloadAction<Section>) {
            state.value.push(action.payload)
        },
        removeSection(state, action: PayloadAction<string>) {
            state.value.splice(state.value.findIndex(section => section.name === action.payload))
        }
    }
})