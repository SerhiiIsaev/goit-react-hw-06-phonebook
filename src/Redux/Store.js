import { configureStore, createSlice, combineReducers } from "@reduxjs/toolkit"
import { nanoid } from 'nanoid'

const contactsSlice = createSlice({
    name: 'contacts',
    initialstate: [],
    reducers:{
        addContact: {
            reducer: (state, { payload }) => {
                console.log('Hi')
                const chekContact = state.filter(item => item.name.toLocaleLowerCase() === payload.name.toLocaleLowerCase())
                const contactItem = {}
                if (chekContact.length > 0) {
                    return alert(`${payload.name} is already in contacts`)
                } else {
                    return {
                        contactItem: {
                           id: nanoid(),
                            ...payload 
                        }
                    }
                }
                state.push(contactItem)
                console.log(state)
            },
            
        }
    }
})
const contactsReducer = contactsSlice.reducer;
// const handleSubmit = (e) => {
//     e.preventDefault();
//     const contact = {
//         name: e.target.name.value,
//         number: e.target.number.value,
//     }
//     const action = addContact(contact)

//     e.target.number.value = '';
//     e.target.name.value = '';
//   }

const reducers = combineReducers({
  contacts: contactsSlice.reducer,

});

export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer
    }
  
})

export const {addContact} = contactsSlice.actions