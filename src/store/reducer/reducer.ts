import { modalReducer } from "../slices/modalSlice";
import { noteReducer } from "../slices/noteSlice";

const reducer = {
    modal: modalReducer,
    note: noteReducer
}

export default reducer;