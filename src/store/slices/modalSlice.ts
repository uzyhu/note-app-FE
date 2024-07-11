import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { INote } from "../../types"

type TModalState = {
    note: INote;
}

const initialState : TModalState = {
    note: {
        noteId: 1,
        noteTitle: "메모1",
        noteContent: "메모입니다",
        noteCreatedAt: String(Date.now()),
        noteUpdatedAt: String(Date.now())
    }
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {

    }
})

export const modalReducer = modalSlice.reducer;