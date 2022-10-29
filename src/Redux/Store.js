import { configureStore, createSlice } from "@reduxjs/toolkit"
import { nanoid } from 'nanoid'

const contactsSlice = createSlice({
    name: 'contacts',
    initialstate: [],
    reducers:{
        addContact: {
            reducer: (state, { payload }) => {
                const chekContact = state.filter(item => item.name.toLocaleLowerCase() === data.name.toLocaleLowerCase())
                if (chekContact.length > 0) {
                    return alert(`${data.name} is already in contacts`)
                } else {
                    return {
                        payload: {
                           id: nanoid(),
                            ...data 
                        }
                    }
                }
                state.push(payload)
            },
            
        }
    }
})



export const store = configureStore({
    reducer: {
        contacts: contactsSlice,
        filter: ""
    }
  
})