import { configureStore, createSlice } from "@reduxjs/toolkit";



export const theme = createSlice(
    {
        name: 'theme',
        initialState: {
            theme: 'bg-blue-900',
            deux: 'bg-blue-600',
           

        },
        reducers: {
            rien: (state) => {
                state.theme = 'bg-blue-900';
                state.deux = 'bg-blue-600';
                return state;
            },
            un: (state) => {
                state.theme = 'bg-blue-300';
                state.deux = 'bg-blue-400';
                return state;
            },
            deux: (state) => {
                state.theme = 'bg-black text-white';
                state.deux = 'bg-gray-800 text-white';
                return state;
            },
            trois: (state) => {
                state.theme = 'bg-red-300';
                state.deux = 'bg-red-600';
                return state;

            },
            quatre: (state) => {
                state.theme = 'bg-yellow-300';
                state.deux = 'bg-yellow-600';
                return state;

            }

        }
    }
)

// export 
export const { un, deux, trois, quatre, rien } = theme.actions;

 
export const store = configureStore({
    reducer: {
        theme: theme.reducer
    }
})