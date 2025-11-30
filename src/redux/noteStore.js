import { configureStore } from "@reduxjs/toolkit";
import noteSlice from './noteSlice'


const noteStore=configureStore(
    {
        reducer:{
            notesReducer:noteSlice

        }
    }
)

export default noteStore