import {
    CREATE_POST_ACTION,
    DELETE_POST_ACTION,
    ADD_LIKES,
    TOTAL_LIKES,
    ADD_FAVORITE
} from "../types";

const initialState = {
    posts: [],
    name: "Awesome App",
    count: 0,
    favorite: []
};

export const postReducer = (state = initialState, action) => {
    // console.log(action.payload);
    // if (action.type === CREATE_POST_ACTION) {
    //     return { ...state, posts: [...state.posts, action.post] };
    // } else {
    // 	 return state
    // }

    switch (action.type) {
        case CREATE_POST_ACTION:
            return {
                ...state, posts: [...state.posts, action.payload.post]
            };
        case DELETE_POST_ACTION:
            const newPosts = state.posts.filter(post => post.id !== action.id);
            return {
                ...state, posts: newPosts
            };
        case ADD_LIKES:
            let AddLikes = state.posts.map(post => {
                if (post.id === action.id) {
                    post.likes = post.likes + 1
                }
                return post
            })

            return {
                ...state, posts: AddLikes
            };

        case TOTAL_LIKES:
            let res = state.posts.reduce((totallikes, post) => totallikes + post.likes, 0);

            return {
                ...state, count: res
            }
            case ADD_FAVORITE:
                let selectedItem = state.posts.find((post) => post.id === action.id);
                // let Addfavorite = state.posts.map(post => {
                //     if (post.id === action.id) {
                //         state.favorite.push(post)
                //     }
                //     return post
                // })
                return {
                    ...state, favorite: [...state.favorite, selectedItem]
                }
                default:
                    return state;
    }
};