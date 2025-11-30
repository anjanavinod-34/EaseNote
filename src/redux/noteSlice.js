import { createSlice } from "@reduxjs/toolkit";

const noteSlice=createSlice({
    name:"notes",
    initialState:{
        noteList:[],
        demoList:[]
    },
    reducers:{

        // add note


        addNote:(state,action)=>{


           state.noteList.push({...action.payload,id:Date.now()})
            state.demoList.push({...action.payload,id:Date.now()})


        },

        // delete note

        deleteNote:(state,action)=>{
          state.noteList  =  state.noteList.filter(item=>item.id!=action.payload)
           state.demoList  =  state.noteList.filter(item=>item.id!=action.payload)
        },
        
        //  edit note
        editNote:(state,action)=>{

            const{editId,title,notes}=action.payload

            const existingNote=state.noteList.find(item=>item.id==editId)

            if(existingNote){
                existingNote.title=title,
                existingNote.notes=notes

            }

        },


        // search


        search:(state,action)=>{
            state.noteList=state.demoList.filter(item=>item.title.toLowerCase().includes(action.payload.toLowerCase()))
        }





    }


})
export default noteSlice.reducer
export const {addNote,deleteNote,editNote,search}=noteSlice.actions