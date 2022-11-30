import React, { useReducer } from "react";
import GithubContext from "./githubContext";
import GithubReducer from './githubReducer';
import Axios from "axios"; 

const GithubState = (props) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state,dispatch] = useReducer(GithubReducer, initialState)

    const searchUsers = (keyword) => {
        setLoading();
        setTimeout(() => {
            Axios
                .get(`https://api.github.com/search/users?q=${keyword}`)
                .then(response => {
                    dispatch({
                        type: "SEARCH_USERS",
                        payload: response.data.items
                    })
                });
        }, 1000);
    }

    const getUser = (username) => {
        setLoading();
        setTimeout(() => {
            Axios
        .get(`https://api.github.com/users/${username}`)
        .then(response => {
            dispatch({
                type: "GET_USER",
                payload: response.data
            })
        });
        }, 1000);
    }

    const clearUsers = () => {
        dispatch({
            type: "CLEAR_USERS"
        })
    }

    const setLoading = () => {
        dispatch({type: "SET_LOADING"})
    }

    return <GithubContext.Provider 
            value={{
                users: state.users, 
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                searchUsers,
                clearUsers,
                getUser
                }}>
                    {props.children}

    </GithubContext.Provider>
}

export default GithubState;