import { CREATE_POST_ACTION, DELETE_POST_ACTION, ADD_LIKES, TOTAL_LIKES} from "../types"

export const createPostAction = (newPost) => {
	return {
		type: CREATE_POST_ACTION,
		// post: newPost,
		payload:{
			post: newPost
		}
	}
}

export const deletePostAction = (id) => {
	return {
		type: DELETE_POST_ACTION,
		id
	}
}

export const addLikes=(id)=>{
	return {
		type: ADD_LIKES,
		id
	}
}

export const TotalLikes = ()=>{
	return{
		type: TOTAL_LIKES
	}
}