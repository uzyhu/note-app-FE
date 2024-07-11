import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { INote } from "../../types";

type TContainerState = {
  modalActive: boolean;
  noteArray: INote[];
  selectedNote: INote | null;
};

const initialState: TContainerState = {
  modalActive: false,
  noteArray: [
    {
      noteId: 1,
      noteTitle: "메모1",
      noteContent: "메모입니다",
      noteCreatedAt: new Date().toISOString(),
      noteUpdatedAt: new Date().toISOString(),
    },
  ],
  selectedNote: null,
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    setModalActive: (state, { payload }: PayloadAction<boolean>) => {
      state.modalActive = payload;
    },
    setSelectedNote: (state, { payload }: PayloadAction<INote | null>) => {
      state.selectedNote = payload;
    },
    updateNoteContent: (
      state,
      { payload }: PayloadAction<{ noteId: number; content: string }>
    ) => {
      const { noteId, content } = payload;
      const note = state.noteArray.find((n) => n.noteId === noteId);
      if (note) {
        note.noteContent = content;
        note.noteUpdatedAt = formatDate(new Date().toISOString());
      }
    },
    updateNoteArray: (state, { payload }: PayloadAction<INote[]>) => {
      state.noteArray = payload;
    },
  },
});

export const { setModalActive, setSelectedNote, updateNoteContent, updateNoteArray } = noteSlice.actions;
export const noteReducer = noteSlice.reducer;