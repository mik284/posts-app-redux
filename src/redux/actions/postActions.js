import { CREATE_POST_ACTION, DELETE_POST_ACTION } from "../types"

export const createPostAction = (newPost) => {
	return {
		type: CREATE_POST_ACTION,
		post: newPost
	}
}

export const deletePostAction = (id) => {
	return {
		type: DELETE_POST_ACTION,
		id
	}
}