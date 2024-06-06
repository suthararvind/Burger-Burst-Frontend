
import { createReducer } from "@reduxjs/toolkit";

 export const authReducer = createReducer(
    {},
    {  //test cases
        loadUserRequest: (state)=>{
            state.loading = true;
        },
        
        loadUserSuccess: (state,action)=>{
            state.loading = false;
            state.isAuthenticated =true;
            state.user = action.payload;
        },
        
        
        loadUserFail: (state,action)=>{
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action .payload;
        },


        //logout
        logoutRequest: (state)=>{
            state.loading = true;
        },  
        logoutSuccess: (state,action )=>{
            state.loading = false;
            state.isAuthenticated =false;
            state.message=action.payload;
            state.user = null;
        },
        logoutFail: (state,action)=>{
            state.loading = false;
            state.isAuthenticated = true;
            state.error = action .payload;
        },

        //when user is not login ,we are is error state to remove it we use below
           clearError: (state) => {
            state.error = null;
          },
          clearMessage: (state) => {
            state.message = null;
          },
    }
 )